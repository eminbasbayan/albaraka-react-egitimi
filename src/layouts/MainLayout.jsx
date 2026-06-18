import Footer from '../components/Layout/Footer';
import Header from '../components/layout/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <section>
        <Outlet />
      </section>
     <Footer />
    </div>
  );
};

export default MainLayout;
