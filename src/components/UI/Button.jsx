import './Button.css';

function Button({ size, color = 'primary', title }) {
  return <button className={`btn btn-${size} btn-${color}`}>{title}</button>;
}

export default Button;
