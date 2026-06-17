import './Button.css';

function Button({
  size,
  color = 'primary',
  children,
  full,
  onClick,
  disabled,
}) {
  return (
    <button
      className={`btn btn-${size} btn-${color} ${full && 'full-size'} disabled:opacity-25`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
