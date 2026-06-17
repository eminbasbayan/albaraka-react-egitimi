import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Header = () => {
  // Mobil menünün açık/kapalı durumunu kontrol eden state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Sol Kısım: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                S
              </span>
              <span className="font-bold text-xl text-gray-900 tracking-tight">
                SaaSify
              </span>
            </Link>
          </div>

          {/* Orta Kısım: Masaüstü Linkleri */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base ${isActive ? 'text-indigo-600' : 'text-gray-600'} `
              }
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                ` hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base ${isActive ? 'text-indigo-600' : 'text-gray-600'} `
              }
            >
              Ürünler
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base ${isActive ? 'text-indigo-600' : 'text-gray-600'} `
              }
            >
              Hakkımızda
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base ${isActive ? 'text-indigo-600' : 'text-gray-600'} `
              }
            >
              İletişim
            </NavLink>
          </nav>

          {/* Sağ Kısım: Masaüstü Giriş & Kayıt Butonları */}
          <div className="hidden md:flex items-center space-x-4">
            <button className='flex items-center'>
              <BsFillCartPlusFill size={28} className='cursor-pointer' />
              <b>0</b>
            </button>
            <a
              href="#login"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base"
            >
              Giriş Yap
            </a>
            <a
              href="#signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base shadow-sm hover:shadow"
            >
              Ücretsiz Başla
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
