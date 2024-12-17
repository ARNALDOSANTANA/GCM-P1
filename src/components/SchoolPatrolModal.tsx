import React from 'react';
import { X, School, Clock, Shield, MapPin } from 'lucide-react';

interface SchoolPatrolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchoolPatrolModal: React.FC<SchoolPatrolModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <School className="w-6 h-6 text-navy-900 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Ronda Escolar</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-navy-900 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Horários de Patrulha</h3>
              <p className="text-sm text-gray-600">Entrada: 07:00 - 08:00</p>
              <p className="text-sm text-gray-600">Saída: 11:30 - 12:30</p>
              <p className="text-sm text-gray-600">Retorno: 13:00 - 14:00</p>
              <p className="text-sm text-gray-600">Saída Final: 17:30 - 18:30</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <Shield className="w-5 h-5 text-navy-900 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Serviços</h3>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Monitoramento do entorno escolar</li>
                <li>Prevenção ao tráfico de drogas</li>
                <li>Controle de tráfego nos horários de pico</li>
                <li>Mediação de conflitos</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-navy-900 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Área de Cobertura</h3>
              <p className="text-sm text-gray-600">
                Raio de 200 metros ao redor das escolas municipais
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-navy-900 text-white rounded-lg py-2 hover:bg-navy-800"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolPatrolModal;