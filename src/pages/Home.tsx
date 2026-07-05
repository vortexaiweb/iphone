import { useState } from 'react';
import { ShieldCheck, Zap, AlertTriangle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import IPhoneCalculator from '../components/IPhoneCalculator';

const Home = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const services = [
    {
      title: 'Активация без сети',
      price: '50 BYN',
      description: 'Активация устройства. Звонки, мобильная связь и SMS работать не будут.',
      icon: Zap,
      action: () => window.open('https://t.me/wr8rwunlock', '_blank'),
      buttonText: 'Заказать'
    },
    {
      title: 'Активация 6-15 Pro Max',
      price: 'Узнать цену',
      description: 'Профессиональная активация вашего устройства.',
      icon: Smartphone,
      action: () => setShowCalculator(true),
      buttonText: 'Рассчитать стоимость'
    },
    {
      title: 'Полная отвязка iCloud',
      price: 'от 350 BYN',
      description: 'Полное снятие блокировки iCloud с любого устройства.',
      icon: ShieldCheck,
      action: () => window.open('https://t.me/wr8rwunlock', '_blank'),
      buttonText: 'Заказать'
    },
    {
      title: 'Разблокировка iCloud',
      price: '250 BYN',
      description: 'Разблокировка при наличии доступа к настройкам устройства.',
      icon: AlertTriangle,
      isLink: true,
      to: '/icloud-instructions',
      buttonText: 'Инструкция'
    }
  ];

  return (
    <>
      <section className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">Сервис разблокировки Apple</h2>
        <p className="text-xl text-gray-600">Профессиональные решения для вашего iPhone и iPad.</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center mb-6 text-gray-900">
              <div className="p-3 bg-gray-100 rounded-2xl mr-4"><service.icon size={28} /></div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
            <div className="text-2xl font-extrabold text-gray-900 mb-6">{service.price}</div>
            {service.isLink ? (
              <Link to={service.to || '#'} className="w-full bg-gray-900 text-white text-center font-bold py-3 px-4 rounded-2xl hover:bg-gray-800 transition">
                {service.buttonText}
              </Link>
            ) : (
              <button onClick={service.action} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-4 rounded-2xl transition">
                {service.buttonText}
              </button>
            )}
          </div>
        ))}
      </section>

      {showCalculator && (
        <section className="max-w-xl mx-auto">
          <IPhoneCalculator />
        </section>
      )}
    </>
  );
};

export default Home;
