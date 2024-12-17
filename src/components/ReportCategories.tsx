import React from 'react';
import { Volume2, AlertTriangle, Car, Leaf, ShieldAlert } from 'lucide-react';
import ReportCategoryButton from './ReportCategoryButton';
import { translations } from '../constants/translations';

const categories = [
  { id: 1, name: translations.categories.noise, icon: Volume2, color: 'bg-yellow-500' },
  { id: 2, name: translations.categories.theft, icon: ShieldAlert, color: 'bg-red-500' },
  { id: 3, name: translations.categories.vandalism, icon: AlertTriangle, color: 'bg-orange-500' },
  { id: 4, name: translations.categories.traffic, icon: Car, color: 'bg-blue-500' },
  { id: 5, name: translations.categories.environmental, icon: Leaf, color: 'bg-green-500' },
];

const ReportCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {categories.map((category) => (
        <ReportCategoryButton key={category.id} {...category} />
      ))}
    </div>
  );
};

export default ReportCategories;