import React from 'react';
import { UserCircle, Settings, Shield } from 'lucide-react';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        <Shield className="w-8 h-8 text-white" />
        <h1 className="text-xl font-bold text-white">GCM</h1>
      </div>
      <div className="flex items-center space-x-4">
        <HeaderButton icon={Settings} />
        <HeaderButton icon={UserCircle} />
      </div>
    </header>
  );
};

export default Header;