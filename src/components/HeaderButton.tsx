import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeaderButtonProps {
  icon: LucideIcon;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ icon: Icon }) => {
  return (
    <button className="text-white hover:text-gray-300 transition-colors">
      <Icon className="w-6 h-6" />
    </button>
  );
};

export default HeaderButton;