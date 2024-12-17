export interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

export interface Task {
  id: string;
  name: string;
  completed: boolean;
  focusTime: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}