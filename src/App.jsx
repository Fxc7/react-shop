import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './component/NavbarComponent.jsx';
import HomePages from './pages/HomePages.jsx';
import ProductPages from './pages/ProductPages.jsx';
import AboutPages from './pages/AboutPages.jsx';
import ContactPages from './pages/ContactPages.jsx';
import FooterComponent from './component/FooterComponent.jsx';

const App = () => {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/products" Component={ProductPages} />
        <Route path="/about" Component={AboutPages} />
        <Route path="/contact" Component={ContactPages} />
        <Route path="/products/:id" Component={ProductPages} />
        <Route path="*" Component={HomePages} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App;