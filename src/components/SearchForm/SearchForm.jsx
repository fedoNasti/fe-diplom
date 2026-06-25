import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import styles from './HomePage.module.css';

// Примерные данные для выбора городов (позже будут из API)
const CITY_OPTIONS = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'kazan', label: 'Казань' },
  { value: 'ekb', label: 'Екатеринбург' },
];

function HomePage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь позже будем отправлять запрос на поиск
    console.log({ from, to, departDate, returnDate, passengers });
    // Переход на страницу результатов
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage__title}>Найдите свой билет</h1>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.searchForm__row}>
          <Select
            label="Откуда"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            options={CITY_OPTIONS}
            placeholder="Выберите город"
            required
          />
          <Select
            label="Куда"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            options={CITY_OPTIONS}
            placeholder="Выберите город"
            required
          />
        </div>
        <div className={styles.searchForm__row}>
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
          <Input
            label="Пассажиры"
            id="passengers"
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div className={styles.searchForm__actions}>
          <Button type="submit" variant="primary">Найти билеты</Button>
        </div>
      </form>
    </div>
  );
}
export default HomePage;