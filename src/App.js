import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
//Components
import ResponsiveNavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import DetailProducts from './Pages/DetailProducts';
import Cart from './Pages/Cart';
import Stores from './Pages/Stores';
import Help from './Pages/Help';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer/Footer';
//Style
import './app.scss'

function App() {
  return (
    
    <div>
      <CartProvider>
        <BrowserRouter>
          <ResponsiveNavBar/> 
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Products/:category' element={<Products />}></Route>
            <Route path='/Product/:id' element={<DetailProducts />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
            <Route path='/Store' element={<Stores />}></Route>
            <Route path='/Help' element={<Help />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
          <Footer/> 
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
