import React from 'react';
import { ArrowLeft, BarChart2, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../constants/translations';

const ReportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-white hover:text-gray-300 mr-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-white">{translations.reports.title}</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white/10 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <BarChart2 className="w-5 h-5 text-white mr-2" />
            <h2 className="text-xl font-semibold text-white">
              {translations.reports.dailyFocus}
            </h2>
          </div>
          <div className="h-64 bg-white/5 rounded-lg"></div>
        </div>

        <div className="bg-white/10 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <PieChart className="w-5 h-5 text-white mr-2" />
            <h2 className="text-xl font-semibold text-white">
              {translations.reports.distribution}
            </h2>
          </div>
          <div className="h-64 bg-white/5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;