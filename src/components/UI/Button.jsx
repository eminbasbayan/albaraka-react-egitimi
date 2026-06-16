import './Button.css';

function Button({ size, color = 'primary', children, full }) {
  return <button className={`btn btn-${size} btn-${color} ${full && "full-size"}`}>{children}</button>;
}

export default Button;
