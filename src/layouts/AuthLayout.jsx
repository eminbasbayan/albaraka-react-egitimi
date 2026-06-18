import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
