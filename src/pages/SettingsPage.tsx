import React, { useState } from 'react';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../constants/translations';
import { TimerSettings } from '../types';

interface SettingsPageProps {
  settings: TimerSettings;
  onSave: (settings: TimerSettings) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ settings, onSave }) => {
  const navigate = useNavigate();
  const [localSettings, setLocalSettings] = useState(settings);
  const [isDark, setIsDark] = useState(true);

  const handleSave = () => {
    onSave(localSettings);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-white hover:text-gray-300 mr-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-white">{translations.settings.title}</h1>
      </div>

      <div className="space-y-6 bg-white/10 rounded-lg p-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {translations.settings.pomodoroDuration}
          </label>
          <input
            type="number"
            value={localSettings.pomodoro}
            onChange={(e) => setLocalSettings({
              ...localSettings,
              pomodoro: parseInt(e.target.value)
            })}
            className="w-full bg-white/10 text-white rounded px-3 py-2 focus:ring-2 focus:ring-white/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {translations.settings.shortBreakDuration}
          </label>
          <input
            type="number"
            value={localSettings.shortBreak}
            onChange={(e) => setLocalSettings({
              ...localSettings,
              shortBreak: parseInt(e.target.value)
            })}
            className="w-full bg-white/10 text-white rounded px-3 py-2 focus:ring-2 focus:ring-white/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            {translations.settings.longBreakDuration}
          </label>
          <input
            type="number"
            value={localSettings.longBreak}
            onChange={(e) => setLocalSettings({
              ...localSettings,
              longBreak: parseInt(e.target.value)
            })}
            className="w-full bg-white/10 text-white rounded px-3 py-2 focus:ring-2 focus:ring-white/20"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-sm font-medium text-white">{translations.settings.theme}</span>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-white text-navy-900 rounded-lg py-2 font-semibold hover:bg-white/90"
        >
          {translations.settings.save}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;