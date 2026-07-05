import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const IPhoneCalculator = () => {
  const [model, setModel] = useState('6');
  const [ios, setIos] = useState('15');

  const models = ['6', '7', '8', 'X', '11', '12', '13', '14', '15'];
  
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Калькулятор стоимости активации</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Модель iPhone</label>
          <div className="relative">
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              className="w-full appearance-none bg-gray-100 border-none rounded-2xl py-3 px-4 text-gray-900 focus:ring-2 focus:ring-gray-400"
            >
              {models.map(m => <option key={m} value={m}>iPhone {m}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={20} />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Версия iOS</label>
          <input 
            type="text" 
            value={ios} 
            onChange={(e) => setIos(e.target.value)}
            className="w-full bg-gray-100 border-none rounded-2xl py-3 px-4 text-gray-900 focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="text-sm text-gray-600">Ориентировочная стоимость</div>
        <div className="text-4xl font-extrabold text-gray-900 mt-1">от 150 BYN</div>
        <p className="text-xs text-gray-500 mt-2">Точная цена зависит от состояния устройства.</p>
        
        <a 
          href="https://t.me/wr8rwunlock" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mt-6 w-full bg-gray-900 text-white text-center font-bold py-3 rounded-2xl hover:bg-gray-800 transition"
        >
          Заказать активацию
        </a>
      </div>
    </div>
  );
};

export default IPhoneCalculator;
