import styles from './Footer.module.css';

import PhoneIcon from '../../assets/icons/contacts/phone.svg'
import EmailIcon from '../../assets/icons/contacts/email.svg'
import SkypeIcon from '../../assets/icons/contacts/skype.svg'
import LocationIcon from '../../assets/icons/contacts/location.svg'

import YouTubeIcon from '../../assets/icons/socials/YouTube.svg'
import LinkedInIcon from '../../assets/icons/socials/LinkedIn.svg'
import GoogleIcon from '../../assets/icons/socials/Google.svg'
import FacebookIcon from '../../assets/icons/socials/Facebook.svg'
import TwitterIcon from '../../assets/icons/socials/Twitter.svg'



function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Левая колонка: Контакты */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Свяжитесь с нами</h3>
            <ul className={styles.contactList}>
              <li>
                <PhoneIcon className={styles.contactIcon} />
                <a href="tel:88000000000">8 (800) 000 00 00</a>
              </li>
              <li>
                <EmailIcon className={styles.contactIcon}></EmailIcon>
                <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
              </li>
              <li>
                <SkypeIcon className={styles.contactIcon}></SkypeIcon>
                <span>tu.train.tickets</span>
              </li>
              <li>
                <LocationIcon className={styles.contactIcon}></LocationIcon>
                <span>г. Москва, ул. Московская 27-35, 555 555</span>
              </li>
            </ul>
          </div>

          {/* Правая колонка: Подписка + Соцсети */}
          <div className={styles.column}>
            {/* Блок подписки */}
            <div className={styles.subscribeBlock}>
              <h3 className={styles.columnTitle}>Подписка</h3>
              <p className={styles.subscribeText}>Будьте в курсе событий</p>
              <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="e-mail"
                  className={styles.subscribeInput}
                  required
                />
                <button type="submit" className={styles.subscribeButton}>
                  ОТПРАВИТЬ
                </button>
              </form>
            </div>

            {/* Блок соцсетей */}
            <div className={styles.socialBlock}>
              <h3 className={styles.columnTitle}>Подписывайтесь на нас</h3>
              <ul className={styles.socialList}>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="YouTube">
                    <YouTubeIcon className={styles.socialIcon} />
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                    <LinkedInIcon className={styles.socialIcon} />
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="Google+">
                    <GoogleIcon className={styles.socialIcon} />
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="Facebook">
                    <FacebookIcon className={styles.socialIcon} />
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink} aria-label="Twitter">
                    <TwitterIcon className={styles.socialIcon} />
                  </a>
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