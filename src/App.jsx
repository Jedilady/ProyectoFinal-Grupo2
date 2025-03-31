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
  ProfilePage,
} from './pages';
import Navbar from './components/navbar/Navbar';
import CustomFooter from './components/customFooter/CustomFooter';
import { AllProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import CheckoutPage from './components/shoppingCart/CheckoutPage';
/*import shoppingCart from "./components/shoppingCart/Cart";*/
import { UserProvider } from './context/UserContext';
import './App.css';
import ProductsDetail from './components/ProductsDetail/ProductsDetail';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AllProductsProvider>
          {/*<ProductsDetail/>*/}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/products/:novedades" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductsDetail />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <CustomFooter />
        </AllProductsProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
