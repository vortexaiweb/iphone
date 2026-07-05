import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const ICloudInstructions = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft size={18} className="mr-2" /> Назад
      </Link>
      <h2 className="text-3xl font-bold mb-6">Инструкция по разблокировке iCloud</h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-700">
        <li>
          Скачайте и установите команду для извлечения <strong>MobileGestalt</strong>:
          <a 
            href="https://www.icloud.com/shortcuts/80fa632e478c4044aff01107fd478870" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 text-blue-600 hover:underline"
          >
            <Download size={18} /> Скачать Shortcut
          </a>
        </li>
        <li>Запустите команду на вашем устройстве.</li>
        <li>
          Полученный файл или текст отправьте нашему боту:
          <a 
            href="https://t.me/wr8rwbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block mt-2 font-bold text-blue-600 hover:underline"
          >
            @wr8rwbot
          </a>
        </li>
      </ol>
      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
        После отправки данных мы свяжемся с вами в ближайшее время для завершения разблокировки.
      </div>
    </div>
  );
};

export default ICloudInstructions;
