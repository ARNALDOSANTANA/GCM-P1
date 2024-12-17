import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmergencyButtonProps {
  onClick: () => void;
  icon: LucideIcon;
  text: string;
  endIcon?: LucideIcon;
  color: string;
  hoverColor: string;
}

const EmergencyButton: React.FC<EmergencyButtonProps> = ({
  onClick,
  icon: Icon,
  text,
  endIcon: EndIcon,
  color,
  hoverColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${color} ${hoverColor} text-white rounded-lg p-4 flex items-center justify-center space-x-2 transition-colors shadow-lg`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-lg font-semibold">{text}</span>
      {EndIcon && <EndIcon className="w-5 h-5 ml-2" />}
    </button>
  );
};

export default EmergencyButton;