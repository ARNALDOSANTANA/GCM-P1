import React from 'react';
import { Phone, Shield, MapPin } from 'lucide-react';
import EmergencyButton from './EmergencyButton';
import { translations } from '../constants/translations';

const EmergencyPanel = () => {
  const handleEmergencyCall = () => {
    // In a real app, this would integrate with phone APIs
    alert('Iniciando chamada de emergência...');
  };

  const handleMariaDaPenha = () => {
    // In a real app, this would open the reporting flow
    alert('Abrindo serviço Maria da Penha...');
  };

  return (
    <div className="space-y-4">
      <EmergencyButton
        onClick={handleEmergencyCall}
        icon={Phone}
        text={translations.emergency.call}
        endIcon={MapPin}
        color="bg-red-600"
        hoverColor="hover:bg-red-700"
      />
      <EmergencyButton
        onClick={handleMariaDaPenha}
        icon={Shield}
        text={translations.emergency.mariaDaPenha}
        color="bg-purple-600"
        hoverColor="hover:bg-purple-700"
      />
    </div>
  );
};

export default EmergencyPanel;