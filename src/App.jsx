import { Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  HomePage,
  RegisterPage,
  ProductsPage,
  AdminPage,
  CartPage,
  AboutPage,
  ContactPage,
  PaymentPage,
} from './pages';
import Navbar from './components/navbar/Navbar';
import CustomFooter from './components/customFooter/CustomFooter';
import { AllProductsProvider } from './context/ProductsContext';
import "./App.css";
import ProductsDetail from './components/ProductsDetail/ProductsDetail';

function App() {
  return (
    <>
      <AllProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/products/:novedades" element={<ProductsPage />} />
          <Route path="/Product/:productId" element={<ProductsDetail />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <CustomFooter />
      </AllProductsProvider>
    </>
  );
}

export default App;
