import React from 'react';
import { Shield } from 'lucide-react';
import EmergencyPanel from '../components/EmergencyPanel';
import ReportCategories from '../components/ReportCategories';
import { translations } from '../constants/translations';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Shield className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          {translations.app.title}
        </h1>
        <p className="text-gray-300">
          {translations.app.subtitle}
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <EmergencyPanel />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">
          {translations.categories.title}
        </h2>
        <ReportCategories />
      </div>
    </div>
  );
};

export default HomePage;