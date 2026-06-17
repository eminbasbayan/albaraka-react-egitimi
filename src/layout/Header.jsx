import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  // Mobil menünün açık/kapalı durumunu kontrol eden state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Sol Kısım: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                S
              </span>
              <span className="font-bold text-xl text-gray-900 tracking-tight">SaaSify</span>
            </a>
          </div>

          {/* Orta Kısım: Masaüstü Linkleri */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base">
              Ana Sayfa
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base">
              Ürünler
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base">
              Hakkımızda
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base">
              İletişim
            </Link>
          </nav>

          {/* Sağ Kısım: Masaüstü Giriş & Kayıt Butonları */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 text-sm lg:text-base">
              Giriş Yap
            </a>
            <a
              href="#signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base shadow-sm hover:shadow"
            >
              Ücretsiz Başla
            </a>
          </div>

          {/* Sağ Kısım: Mobil Menü Butonu (Burger Icon) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only font-sans">Ana menüyü aç</span>
              {isOpen ? (
                // Menü açıkken gösterilecek "X" (Kapat) ikonu
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menü kapalıyken gösterilecek Hamburger ikonu
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobil Açılır Menü Alanı */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-100`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
            Özellikler
          </a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
            Fiyatlandırma
          </a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
            Hakkımızda
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
            İletişim
          </a>
          <div className="pt-4 pb-2 border-t border-gray-100">
            <a href="#login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
              Giriş Yap
            </a>
            <div className="px-3 mt-3">
              <a
                href="#signup"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Ücretsiz Başla
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;