const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo ve Hakkında */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tight">SaaSify</span>
            <p className="text-gray-400 text-base max-w-xs">
              Modern iş dünyası için çözümler üretiyoruz. Güvenilir, hızlı ve ölçeklenebilir platformlar oluşturun.
            </p>
          </div>

          {/* Link Grupları */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Ürün</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="hover:text-white transition">Özellikler</a></li>
                  <li><a href="#" className="hover:text-white transition">Entegrasyonlar</a></li>
                  <li><a href="#" className="hover:text-white transition">Fiyatlandırma</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Şirket</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="hover:text-white transition">Hakkımızda</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Kariyer</a></li>
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Yasal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="hover:text-white transition">Gizlilik</a></li>
                  <li><a href="#" className="hover:text-white transition">Şartlar</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Çizgi ve Telif Hakları */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} SaaSify, Inc. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Sosyal Medya Placeholder */}
            <span className="text-gray-400 hover:text-white cursor-pointer">Twitter</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">GitHub</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;