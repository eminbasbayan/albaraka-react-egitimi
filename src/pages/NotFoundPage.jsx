
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md w-full">
        {/* Hata Kodu */}
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">404</h1>
        
        {/* Başlık ve Açıklama */}
        <div className="bg-white px-2 py-1 rounded rotate-12 absolute hidden"></div>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mt-4 mb-8">
          Üzgünüz, aradığınız sayfa taşınmış veya silinmiş olabilir. Lütfen ana sayfaya geri dönün.
        </p>

        {/* Aksiyon Butonu */}
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;