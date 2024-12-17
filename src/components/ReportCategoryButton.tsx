import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ReportCategoryButtonProps {
  id: number;
  name: string;
  icon: LucideIcon;
  color: string;
}

const ReportCategoryButton: React.FC<ReportCategoryButtonProps> = ({
  name,
  icon: Icon,
  color,
}) => {
  return (
    <button className="flex flex-col items-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="mt-2 text-sm text-white text-center">{name}</span>
    </button>
  );
};

export default ReportCategoryButton;