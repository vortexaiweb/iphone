import { Outlet, Link } from 'react-router-dom';
import { MessageCircle, Smartphone, ShieldCheck, HelpCircle } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            wr8rw Unlock
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/icloud-instructions" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition hidden sm:block">
              Инструкция
            </Link>
            <a
              href="https://t.me/wr8rwunlock"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200"
            >
              <MessageCircle size={16} />
              Свяжитесь с нами
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>

      <footer className="bg-gray-950 text-gray-400 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">wr8rw Unlock</h3>
              <p className="text-sm leading-relaxed">Профессиональный сервис разблокировки устройств Apple. Быстро, безопасно, с гарантией.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition">Активация без сети</Link></li>
                <li><Link to="/" className="hover:text-white transition">Активация 6-15 Pro Max</Link></li>
                <li><Link to="/" className="hover:text-white transition">Отвязка iCloud</Link></li>
                <li><Link to="/icloud-instructions" className="hover:text-white transition">Разблокировка iCloud</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="https://t.me/wr8rwunlock" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <MessageCircle size={16} /> @wr8rwunlock
                </a>
                <a href="https://t.me/wr8rwbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <MessageCircle size={16} /> @wr8rwbot
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} wr8rw Unlock. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
