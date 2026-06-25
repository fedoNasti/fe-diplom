import styles from './Button.module.css';

function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false,
  className = '' 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
    >
      {children}
    </button>
  );
}
export default Button;