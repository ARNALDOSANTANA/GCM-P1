import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TimerSettings } from './types';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import SchoolPatrolModal from './components/SchoolPatrolModal';

const defaultSettings: TimerSettings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

function App() {
  const [settings, setSettings] = useState<TimerSettings>(defaultSettings);
  const [showSchoolPatrol, setShowSchoolPatrol] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-navy-900 bg-gradient-to-b from-navy-800 to-navy-900">
        <Header onSchoolPatrol={() => setShowSchoolPatrol(true)} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route 
            path="/settings" 
            element={<SettingsPage settings={settings} onSave={setSettings} />} 
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <SchoolPatrolModal
          isOpen={showSchoolPatrol}
          onClose={() => setShowSchoolPatrol(false)}
        />
      </div>
    </Router>
  );
}

export default App;