import { useContext } from 'react';
import './Button.css';
import { CartContext } from '../../context/CartContext';

function Button({ size, color = 'primary', children, full, onClick }) {
  const { fullName: tumIsim, adres } = useContext(CartContext);

  const fullName = 'Emre Demir';


  return (
    <button
      className={`btn btn-${size} btn-${color} ${full && 'full-size'}`}
      onClick={onClick}
    >
      {tumIsim}
    </button>
  );
}

export default Button;
