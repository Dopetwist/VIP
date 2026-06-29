import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router';
import products from './data/products';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import BookingPage from './pages/BookingPage';
import ShopPage from './pages/ShopPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';

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

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<Layout />}>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/shop" element={<ShopPage filteredProducts={filteredProducts} />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App;