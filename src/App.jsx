import { Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  HomePage,
  RegisterPage,
  ProductIdPage,
  ProductsPage,
  AdminPage,
  CartPage,
  AboutPage,
  ContactPage,
  PaymentPage,
  ProfilePage,
} from './pages';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { AllProductsProvider } from './context/ProductsContext';
import { UserProvider } from './context/UserContext';

import './css/App.css';

function App() {
  return (
    <>
      <UserProvider>
        <AllProductsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/Product/:productId" element={<ProductIdPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </AllProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
