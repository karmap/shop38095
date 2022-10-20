import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detail/:id' element={<ItemDetail/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
