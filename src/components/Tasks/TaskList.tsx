import React, { useState } from 'react';
import { Plus, Edit2, Check, X } from 'lucide-react';
import { Task } from '../../types';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        name: newTaskName,
        completed: false,
        focusTime: 0,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  };

  const updateTaskName = (id: string, newName: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, name: newName } : task
    ));
    setEditingId(null);
  };

  return (
    <div className="bg-white/10 rounded-lg p-4">
      <div className="flex mb-4">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 bg-white/10 text-white rounded px-3 py-2 mr-2"
        />
        <button
          onClick={addTask}
          className="bg-white/20 hover:bg-white/30 text-white rounded p-2"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center bg-white/5 rounded p-2">
            {editingId === task.id ? (
              <input
                type="text"
                defaultValue={task.name}
                onBlur={(e) => updateTaskName(task.id, e.target.value)}
                className="flex-1 bg-white/10 text-white rounded px-2 py-1"
                autoFocus
              />
            ) : (
              <>
                <span className="flex-1 text-white">{task.name}</span>
                <button
                  onClick={() => setEditingId(task.id)}
                  className="text-white/70 hover:text-white ml-2"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;