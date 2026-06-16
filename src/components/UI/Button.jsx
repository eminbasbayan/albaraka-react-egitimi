import './Button.css';

function Button({ size, color = 'primary', children }) {
  return <button className={`btn btn-${size} btn-${color}`}>{children}</button>;
}

export default Button;
