import './Button.css';

function Button({ size, color = 'primary', children, full, onClick }) {
  return (
    <button
      className={`btn btn-${size} btn-${color} ${full && 'full-size'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
