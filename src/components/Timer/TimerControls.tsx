import React from 'react';
import { TimerMode } from '../../types';
import { translations } from '../../constants/translations';

interface TimerControlsProps {
  mode: TimerMode;
  onModeChange: (mode: TimerMode) => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => onModeChange('pomodoro')}
        className={`px-4 py-2 rounded ${
          mode === 'pomodoro'
            ? 'bg-white text-navy-900'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        {translations.timer.pomodoro}
      </button>
      <button
        onClick={() => onModeChange('shortBreak')}
        className={`px-4 py-2 rounded ${
          mode === 'shortBreak'
            ? 'bg-white text-gray-900'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        {translations.timer.shortBreak}
      </button>
      <button
        onClick={() => onModeChange('longBreak')}
        className={`px-4 py-2 rounded ${
          mode === 'longBreak'
            ? 'bg-white text-[#FF6200]'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        {translations.timer.longBreak}
      </button>
    </div>
  );
};

export default TimerControls;