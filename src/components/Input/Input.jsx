import styles from './Input.module.css';

function Input({ 
  label, 
  id, 
  value, 
  onChange, 
  type = 'text', 
  placeholder = '', 
  required = false,
  className = '' 
}) {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      {label && <label htmlFor={id} className={styles.inputGroup__label}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={styles.inputGroup__field}
      />
    </div>
  );
}
export default Input;