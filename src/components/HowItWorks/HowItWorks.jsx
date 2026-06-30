import { Link } from 'react-router-dom';
import styles from './HowItWorks.module.css';

function HowItWorks() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>как это работает</h2>
        <Link to="/" className={styles.moreInfo}>Узнать больше</Link>
      </div>
      <ul className={styles.contantList}>
        <li className={styles.contantItem}>Удобный заказ на сайте</li>
        <li className={styles.contantItem}>Нет необходимости ехать в офис</li>
        <li className={styles.contantItem}> Огромный выбор направлений</li>
      </ul>
    </div>
  )
}

export default HowItWorks;