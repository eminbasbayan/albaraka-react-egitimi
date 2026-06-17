import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
      <div>LOGO</div>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/products">Ürünler</Link>
    </div>
  );
};

export default Header;
