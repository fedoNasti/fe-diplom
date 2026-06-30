import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>О нас</li>
        <li className={styles.navListItem}>Как это работает</li>
        <li className={styles.navListItem}>Отзывы</li>
        <li className={styles.navListItem}>Контакты</li>
      </ul>
    </div>
    
  )
}

export default NavBar;