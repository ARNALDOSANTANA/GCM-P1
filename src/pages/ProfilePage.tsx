import React, { useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../constants/translations';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-white hover:text-gray-300 mr-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-white">Perfil</h1>
      </div>

      <div className="bg-white/10 rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/10 rounded-full">
            <User className="w-12 h-12 text-white" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/10 text-white rounded px-3 py-2 focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/10 text-white rounded px-3 py-2 focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Senha
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-white/10 text-white rounded px-3 py-2 focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-navy-900 rounded-lg py-2 font-semibold hover:bg-white/90"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;