import { useState, useEffect } from 'react';
import { TimerMode, TimerSettings } from '../types';
import { translations } from '../constants/translations';

export const useTimer = (settings: TimerSettings) => {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(settings.pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);

  const getNotificationMessage = (mode: TimerMode) => {
    switch (mode) {
      case 'shortBreak':
        return translations.notifications.shortBreakEnded;
      case 'longBreak':
        return translations.notifications.longBreakEnded;
      default:
        return translations.notifications.pomodoroEnded;
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(translations.notifications.timerComplete, {
          body: getNotificationMessage(mode),
        });
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const changeMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    switch (newMode) {
      case 'shortBreak':
        setTimeLeft(settings.shortBreak * 60);
        break;
      case 'longBreak':
        setTimeLeft(settings.longBreak * 60);
        break;
      default:
        setTimeLeft(settings.pomodoro * 60);
    }
  };

  return {
    mode,
    timeLeft,
    isRunning,
    toggleTimer,
    changeMode,
  };
};

export default useTimer;