import { useLocation } from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar';
import ProgressBar from '../ProgressBar/ProgressBar'

import styles from './Header.module.css'

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header 
    className={`${styles.header} 
    ${isHome ? styles.headerHome : styles.headerDefault}`}
    
    >
        <Logo />
        <NavBar />
        <div className={styles.container}>
          <SearchForm type={isHome ? 'home' : 'content'} />
        </div>
        {!isHome && <ProgressBar />}
    </header>
  );
}

export default Header;