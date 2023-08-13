import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './component/NavbarComponent.jsx';
import HomePages from './pages/HomePages.jsx';
import ProductPages from './pages/ProductPages.jsx';
import FaqPages from './pages/FaqPages.jsx';
import AboutPages from './pages/AboutPages.jsx';
import ContactPages from './pages/ContactPages.jsx';
import FooterComponent from './component/FooterComponent.jsx';

import ProductIdPages from './pages/ProductIdPages.jsx';

const App = () => {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/products" Component={ProductPages} />
        <Route path="/about" Component={AboutPages} />
        <Route path="/faq" Component={FaqPages} />
        <Route path="/contact" Component={ContactPages} />
        <Route path="/products/:category/:id" Component={ProductIdPages} />
        <Route path="*" Component={HomePages} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App;