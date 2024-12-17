import React from 'react';
import { Play, Pause } from 'lucide-react';
import { TimerMode } from '../../types';

interface TimerDisplayProps {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  onToggle: () => void;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  mode,
  timeLeft,
  isRunning,
  onToggle,
}) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getBackgroundColor = () => {
    switch (mode) {
      case 'shortBreak':
        return 'bg-gray-900';
      case 'longBreak':
        return 'bg-[#FF6200]';
      default:
        return 'bg-navy-900';
    }
  };

  return (
    <div className={`rounded-lg p-6 ${getBackgroundColor()} transition-colors duration-300`}>
      <div className="text-center">
        <div className="text-6xl font-bold text-white mb-4">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <button
          onClick={onToggle}
          className="bg-white/20 hover:bg-white/30 text-white rounded-full p-4 transition-colors"
        >
          {isRunning ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
        </button>
      </div>
    </div>
  );
};

export default TimerDisplay;