import { useState } from 'react';

const models = [
  { id: '6', label: 'iPhone 6' },
  { id: '7', label: 'iPhone 7' },
  { id: '8', label: 'iPhone 8' },
  { id: 'X', label: 'iPhone X' },
  { id: '11', label: 'iPhone 11' },
  { id: '12', label: 'iPhone 12' },
  { id: '13', label: 'iPhone 13' },
  { id: '14', label: 'iPhone 14' },
  { id: '15', label: 'iPhone 15' }
];

const priceMap: Record<string, { min: number; max: number }> = {
  '6': { min: 80, max: 120 },
  '7': { min: 80, max: 120 },
  '8': { min: 100, max: 150 },
  'X': { min: 120, max: 180 },
  '11': { min: 150, max: 250 },
  '12': { min: 180, max: 300 },
  '13': { min: 200, max: 350 },
  '14': { min: 250, max: 400 },
  '15': { min: 300, max: 500 }
};

const IPhoneCalculator = () => {
  const [model, setModel] = useState('6');
  const [ios, setIos] = useState('15');

  const price = priceMap[model] || { min: 150, max: 300 };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold mb-2 text-gray-900">Калькулятор стоимости активации</h3>
      <p className="text-sm text-gray-500 mb-8">Выберите модель и версию iOS для расчёта</p>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">Модель iPhone</label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {models.map((m) => (
            <button
              key={m.id}
              onClick={() => setModel(m.id)}
              className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                model === m.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Версия iOS</label>
        <input
          type="text"
          value={ios}
          onChange={(e) => setIos(e.target.value)}
          placeholder="Например: 16.5"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
        <div className="text-sm text-gray-600 mb-1">Ориентировочная стоимость</div>
        <div className="text-4xl font-extrabold text-gray-900">
          {price.min}–{price.max} BYN
        </div>
        <p className="text-xs text-gray-500 mt-2">Точная цена зависит от состояния устройства и версии iOS.</p>
      </div>

      <a
        href="https://t.me/wr8rwunlock"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200"
      >
        Заказать активацию
      </a>
    </div>
  );
};

export default IPhoneCalculator;