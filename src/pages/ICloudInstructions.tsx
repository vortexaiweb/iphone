import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Send, Smartphone, MessageCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Скачайте Shortcut',
    description: 'Установите команду для извлечения MobileGestalt с вашего устройства.',
    action: {
      href: 'https://www.icloud.com/shortcuts/80fa632e478c4044aff01107fd478870',
      label: 'Скачать Shortcut',
      icon: Download
    }
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Запустите команду',
    description: 'Откройте приложение «Команды» и запустите установленный Shortcut на вашем iPhone или iPad.',
    action: null
  },
  {
    number: '03',
    icon: Send,
    title: 'Отправьте файл боту',
    description: 'Полученный файл или текст отправьте нашему Telegram-боту.',
    action: {
      href: 'https://t.me/wr8rwbot',
      label: '@wr8rwbot',
      icon: MessageCircle
    }
  }
];

const ICloudInstructions = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition mb-8">
        <ArrowLeft size={16} /> На главную
      </Link>

      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Разблокировка iCloud</h1>
        <p className="text-gray-500 max-w-lg mx-auto">Выполните три простых шага, чтобы мы могли разблокировать ваше устройство</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 text-white text-lg font-black shadow-md">
                {step.number}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{step.description}</p>
                {step.action && (
                  <a
                    href={step.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200"
                  >
                    <step.action.icon size={16} />
                    {step.action.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 animate-fade-in">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
            <MessageCircle size={18} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">После отправки данных</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Мы свяжемся с вами в Telegram в ближайшее время для завершения разблокировки. 
              Обычно обработка занимает от 1 до 24 часов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICloudInstructions;