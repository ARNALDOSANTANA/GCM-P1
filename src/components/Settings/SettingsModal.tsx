import React, { useState } from 'react';
import { X, Moon, Sun } from 'lucide-react';
import { TimerSettings } from '../../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: TimerSettings;
  onSave: (settings: TimerSettings) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [isDark, setIsDark] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pomodoro Duration (minutes)
            </label>
            <input
              type="number"
              value={localSettings.pomodoro}
              onChange={(e) => setLocalSettings({
                ...localSettings,
                pomodoro: parseInt(e.target.value)
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Short Break Duration (minutes)
            </label>
            <input
              type="number"
              value={localSettings.shortBreak}
              onChange={(e) => setLocalSettings({
                ...localSettings,
                shortBreak: parseInt(e.target.value)
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Long Break Duration (minutes)
            </label>
            <input
              type="number"
              value={localSettings.longBreak}
              onChange={(e) => setLocalSettings({
                ...localSettings,
                longBreak: parseInt(e.target.value)
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Theme</span>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-200"
            >
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
          
          <button
            onClick={() => {
              onSave(localSettings);
              onClose();
            }}
            className="w-full bg-navy-900 text-white rounded-lg py-2 hover:bg-navy-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;