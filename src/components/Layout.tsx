import { Outlet, Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">wr8rw Unlock</Link>
          <a 
            href="https://t.me/wr8rwunlock" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            <MessageCircle size={18} />
            Свяжитесь с нами
          </a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 AppleUnlock Service. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
