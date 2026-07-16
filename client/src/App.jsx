import { useState, useEffect, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router';
import products from './data/products';
import { CartProvider } from './hooks/useCart';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import BookingPage from './pages/BookingPage';
import ShopPage from './pages/ShopPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import CartItem from './components/cart/CartItem';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

function App() {

  const [ filters, setFilters ] = useState({
    categories: []
  });

  const allProducts = products;

  // FILTER PRODUCTS
  const filteredProducts = useMemo(
    () =>
      allProducts.filter((product) => {
        const categoryMatch =
          filters.categories.length === 0 ||
          filters.categories.includes(product.category);

        return categoryMatch;
      }),
    [allProducts, filters]
  );

  const initialBookingData = {
      category: "",
      service: "",
      price: "",
      date: "",
      time: "",
      info: {
          fullName: "",
          email: "",
          phone: "",
          address: ""
      }
  };

  const [ bookingData, setBookingData ] = useState(initialBookingData);

  useEffect(() => {
      const savedBooking = localStorage.getItem('vip-bookings');
      if (savedBooking) {
          try {
              setBookingData(JSON.parse(savedBooking));
          } catch (error) {
              console.error('Error loading booking data from localStorage:', error);
          }
      }
  }, []);

  // Clear entire bookings
  const clearBooking = useCallback(() => {
    localStorage.setItem("vip-bookings", JSON.stringify(initialBookingData)); // Remove saved booking
    setBookingData(initialBookingData);      // Reset state
  }, []);

  console.log("Booking Data in App.jsx:", bookingData);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage bookingData={bookingData} clearBooking={clearBooking} />} />

        <Route element={<Layout />}>
          <Route path="/services" element={<ServicePage />} />
          <Route path="/book" element={<BookingPage bookingData={bookingData} setBookingData={setBookingData} />} />
          <Route path="/shop" element={<ShopPage filteredProducts={filteredProducts} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<Dashboard bookingData={bookingData} />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App;