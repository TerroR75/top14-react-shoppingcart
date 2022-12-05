import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContent from '../domelements/MainContent';
import Navbar from '../domelements/Navbar';

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartValue, setShoppingCartValue] = useState(0);

  useEffect(() => {
    if (shoppingCart.length !== 0) {
      setShoppingCartValue(
        shoppingCart.reduce((previous, current) => {
          return previous + current.price;
        }, 0)
      );
    }
  }, [shoppingCart]);

  return (
    <div className='App'>
      <div id='background'></div>
      <Navbar
        shoppingCartProps={{ shoppingCart: shoppingCart, setShoppingCart: setShoppingCart }}
        shoppingCartValue={shoppingCartValue}
      />
      <MainContent shoppingCartProps={{ shoppingCart: shoppingCart, setShoppingCart: setShoppingCart }} />
    </div>
  );
}

export default App;
