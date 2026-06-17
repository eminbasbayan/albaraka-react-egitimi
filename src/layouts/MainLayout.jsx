import Header from '../components/layout/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <section>
        <Outlet />
      </section>
      <footer className='text-6xl'>
        Footer Alanı
      </footer>
    </div>
  );
};

export default MainLayout;
