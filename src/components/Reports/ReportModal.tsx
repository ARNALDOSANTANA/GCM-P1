import React from 'react';
import { X } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Focus Time Report</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Daily Focus Time</h3>
            <div className="h-40 bg-gray-200 rounded">
              {/* Chart would be implemented here */}
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Focus Distribution</h3>
            <div className="h-40 bg-gray-200 rounded">
              {/* Pie chart would be implemented here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;