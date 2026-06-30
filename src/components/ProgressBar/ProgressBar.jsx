import styles from './ProgressBar.module.css'

function ProgressBar() {
  return (
    <ul className={styles.ProgressBar}>
      <li className={styles.ProgressBarItem}>Билеты</li>
      <li className={styles.ProgressBarItem}>Пассажиры</li>
      <li className={styles.ProgressBarItem}>Оплата</li>
      <li className={styles.ProgressBarItem}>Проверка</li>
    </ul>
  )
}

export default ProgressBar;