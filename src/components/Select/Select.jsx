import styles from './Select.module.css';

function Select({ label, id, value, onChange, options, placeholder = '', required = false }) {
  return (
    <div className={styles.selectGroup}>
      {label && <label htmlFor={id} className={styles.selectGroup__label}>{label}</label>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.selectGroup__field}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
export default Select;