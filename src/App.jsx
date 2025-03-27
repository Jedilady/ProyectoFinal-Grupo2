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
} from './pages';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CustomFooter from './components/customFooter/CustomFooter';
import { AllProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import CheckoutPage from './components/shoppingCart/CheckoutPage';
/*import shoppingCart from "./components/shoppingCart/Cart";*/
import "./App.css";

function App() {
  return (
    <CartProvider>
      <AllProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/products/:novedades" element={<ProductsPage />} />
          <Route path="/Product/:productId" element={<ProductIdPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
        <CustomFooter />
      </AllProductsProvider>
      </CartProvider>
  );
}

export default App;
