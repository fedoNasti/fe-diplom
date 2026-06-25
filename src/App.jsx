import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import TrainsPage from './pages/TrainsPage/TrainsPage';
import SeatsPage from './pages/SeatsPage/SeatsPage';
import PassengersPage from './pages/PassengersPage/PassengersPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains" element={<TrainsPage />} />
          <Route path="seats" element={<SeatsPage />} />
          <Route path="passengers" element={<PassengersPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;