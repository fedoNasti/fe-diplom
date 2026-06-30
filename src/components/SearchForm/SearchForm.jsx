import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import styles from './SearchForm.module.css';

// Примерные данные для выбора городов (позже будут из API)
const CITY_OPTIONS = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'kazan', label: 'Казань' },
  { value: 'ekb', label: 'Екатеринбург' },
];

function SearchForm({ type = 'content' }) {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь позже будем отправлять запрос на поиск
    console.log({ from, to, departDate, returnDate, passengers });
    navigate('/trains');
  };

  const isHome = type === 'home';
  console.log(isHome);

  return (
    <div className={`${styles.wrapper} ${isHome ? styles.wrapperHome : styles.wrapperContent}`}>
      {isHome && (
        <div className={styles.columnLeft}>
          <h1 className={styles.title}>Вся жизнь - путешествие!</h1>
        </div>
      )}
      <div className={`${styles.columnRight} ${isHome ? styles.columnRightHome : styles.columnRightContent}`}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <div className={`${styles.row} ${isHome ? styles.rowHome : styles.rowContent}`}>
            <Select
              label={isHome ? 'Откуда' : ''}
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              options={CITY_OPTIONS}
              placeholder="Откуда"
              required
            />
            <Select
              label={isHome ? 'Куда' : ''}
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              options={CITY_OPTIONS}
              placeholder="Куда"
              required
            />
            {!isHome && (
              <>
                <Input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  placeholder="Дата туда"
                  required
                />
                <Input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  placeholder="Дата обратно"
                />
              </>
            )}
          </div>
          {isHome && (
            <div className={`${styles.row} ${styles.rowHome}`}>
              <Input
                label="Дата туда"
                id="departDate"
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                required
              />
              <Input
                label="Дата обратно (опционально)"
                id="returnDate"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          )}
          <div className={`${styles.actions} ${isHome ? styles.actionsHome : styles.actionsContent}`}>
            <Button type="submit" variant="primary">Найти билеты</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;