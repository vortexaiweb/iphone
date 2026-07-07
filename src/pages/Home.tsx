import { useState } from 'react';
import { ShieldCheck, Zap, Smartphone, AlertTriangle, CheckCircle, MessageCircle, Clock, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import IPhoneCalculator from '../components/IPhoneCalculator';

const FAQ = [
  {
    q: 'Какие устройства вы разблокируете?',
    a: 'Мы работаем с iPhone и iPad всех моделей от 6 до 15 Pro Max, включая iPad Pro, Air и Mini.'
  },
  {
    q: 'Это безопасно?',
    a: 'Да. Мы используем только официальные методы активации. Ваши данные не передаются третьим лицам.'
  },
  {
    q: 'Сколько времени занимает разблокировка?',
    a: 'Активация без сети — от 10 минут. Отвязка iCloud — от 1 до 24 часов в зависимости от сложности.'
  },
  {
    q: 'Какие гарантии вы даёте?',
    a: 'Даём гарантию на все виды работ. Если устройство не активируется — вернём деньги.'
  },
  {
    q: 'Как оплатить?',
    a: 'Принимаем оплату на карты BYN / USD. Предоплата 50% для сложных случаев.'
  }
];

const Home = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: 'Активация без сети',
      price: '50 BYN',
      description: 'Устройство активируется: звонки, связь и SMS работать не будут. Подходит для Wi-Fi использования.',
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      action: () => window.open('https://t.me/wr8rwunlock', '_blank'),
      buttonText: 'Заказать'
    },
    {
      title: 'Активация iPhone 6-15 Pro Max',
      price: 'от 150 BYN',
      description: 'Полноценная активация с поддержкой сотовой связи. Цена зависит от модели и версии iOS.',
      icon: Smartphone,
      gradient: 'from-blue-500 to-cyan-500',
      action: () => setShowCalculator(true),
      buttonText: 'Рассчитать стоимость'
    },
    {
      title: 'Полная отвязка iCloud',
      price: 'от 350 BYN',
      description: 'Навсегда убираем привязку к чужому Apple ID. Устройство становится полностью вашим.',
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-teal-500',
      action: () => window.open('https://t.me/wr8rwunlock', '_blank'),
      buttonText: 'Заказать'
    },
    {
      title: 'Разблокировка iCloud',
      price: '250 BYN',
      description: 'Если есть доступ к настройкам — разблокируем удалённо. Нужен только файл MobileGestalt.',
      icon: AlertTriangle,
      gradient: 'from-violet-500 to-purple-500',
      isLink: true,
      to: '/icloud-instructions',
      buttonText: 'Инструкция'
    }
  ];

  return (
    <>
      <section className="text-center mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <CheckCircle size={14} /> Работаем с 2024 года
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Сервис разблокировки
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">устройств Apple</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Профессиональная активация iPhone и iPad, отвязка iCloud, снятие блокировок. 
          Быстро, безопасно, с гарантией результата.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/wr8rwunlock"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200"
          >
            <MessageCircle size={20} />
            Связаться в Telegram
          </a>
          <Link
            to="/icloud-instructions"
            className="flex items-center gap-2 bg-white text-gray-700 text-lg font-semibold px-8 py-4 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
          >
            Инструкция по разблокировке
          </Link>
        </div>
      </section>

      <section className="mb-24">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Наши услуги</h2>
          <p className="text-gray-500">Выберите подходящий вариант для вашего устройства</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4 flex-grow leading-relaxed">{service.description}</p>
              <div className="text-2xl font-extrabold text-gray-900 mb-5">{service.price}</div>
              {service.isLink ? (
                <Link
                  to={service.to || '#'}
                  className="w-full bg-gray-900 text-white text-center text-sm font-bold py-3.5 px-4 rounded-2xl hover:bg-gray-800 transition"
                >
                  {service.buttonText}
                </Link>
              ) : (
                <button
                  onClick={service.action}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-bold py-3.5 px-4 rounded-2xl transition"
                >
                  {service.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {showCalculator && (
        <section className="max-w-xl mx-auto mb-24 animate-scale-in">
          <IPhoneCalculator />
        </section>
      )}

      <section className="mb-24 animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Как мы работаем</h2>
          <p className="text-gray-500">Процесс занимает всего несколько шагов</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Оставьте заявку', desc: 'Напишите нам в Telegram с моделью устройства и версией iOS', icon: MessageCircle },
            { step: '02', title: 'Консультация', desc: 'Мы уточняем детали, рассчитываем стоимость и сроки', icon: Smartphone },
            { step: '03', title: 'Оплата', desc: 'Вы оплачиваете удобным способом. Для сложных случаев — предоплата 50%', icon: ShieldCheck },
            { step: '04', title: 'Активация', desc: 'Получаете разблокированное устройство. Мы на связи для поддержки', icon: Star }
          ].map((item, i) => (
            <div key={i} className="relative bg-white p-6 rounded-3xl border border-gray-100 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">{item.step}</div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <item.icon size={18} className="text-gray-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24 animate-slide-up">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, label: 'Безопасно', desc: 'Ваши данные под защитой' },
            { icon: Clock, label: 'Быстро', desc: 'Активация от 10 минут' },
            { icon: Star, label: 'Опыт', desc: 'Более 100 успешных активаций' },
            { icon: CheckCircle, label: 'Гарантия', desc: 'Гарантируем результат или возврат' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24 max-w-2xl mx-auto animate-slide-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Часто задаваемые вопросы</h2>
          <p className="text-gray-500">Ответы на самые популярные вопросы</p>
        </div>
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                {item.q}
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed animate-scale-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 sm:p-16 animate-slide-up">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Готовы разблокировать устройство?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">Напишите нам — мы подберём оптимальное решение для вашей ситуации</p>
        <a
          href="https://t.me/wr8rwunlock"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-black/20 transition-all duration-200"
        >
          <MessageCircle size={20} />
          Написать в Telegram
        </a>
      </section>
    </>
  );
};

export default Home;