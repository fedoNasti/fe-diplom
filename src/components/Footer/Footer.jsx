// src/components/Footer/Footer.jsx
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Левая колонка: Контакты */}
          <div className={styles.columnLeft}>
            <h3 className={styles.columnTitle}>Свяжитесь с нами</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:88000000000">8 (800) 000 00 00</a>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
              </li>
              <li>
                <span className={styles.contactIcon}>🌐</span>
                <span>tu.train.tickets</span>
              </li>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>г. Москва, ул. Московская 27-35, 555 555</span>
              </li>
            </ul>
          </div>

          {/* Правая колонка: Подписка + Соцсети */}
          <div className={styles.columnRight}>
            {/* Блок подписки */}
            <div className={styles.subscribeBlock}>
              <h3 className={styles.columnTitle}>Подписка</h3>
              <p className={styles.subscribeText}>Будьте в курсе событий</p>
              <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  className={styles.subscribeInput}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  Отправить
                </button>
              </form>
            </div>

            {/* Блок соцсетей */}
            <div className={styles.socialBlock}>
              <h3 className={styles.columnTitle}>Подписывайтесь на нас</h3>
              <ul className={styles.socialList}>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="Google+">G+</a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="Facebook">f</a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="Instagram">Instagram</a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="YouTube">y</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className={styles.bottom}>
          <span className={styles.logo}>Лого</span>
          <span className={styles.copyright}>2018 WEB</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;