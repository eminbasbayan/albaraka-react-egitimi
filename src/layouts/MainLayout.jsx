import Header from '../components/Layout/Header.jsx';
import Footer from '../components/Layout/Footer.jsx';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <Outlet />
      </section>
     <Footer />
    </div>
  );
};

export default MainLayout;
