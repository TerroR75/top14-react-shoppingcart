import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
export default function (props) {
  const { shoppingCart } = props.shoppingCartProps;
  function consoleLogCart() {
    console.log(shoppingCart);
    const popup = document.querySelector('.shopping-cart-popup');
    popup.classList.toggle('popup-active');
  }
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/products'}>Shop</Link>
        </li>
      </ul>
      <span className='nav-shopping-cart'>
        <div onClick={consoleLogCart}>Cart</div>
        <div className='shopping-cart-popup'>
          {shoppingCart.map((item) => {
            return (
              <div className='shopping-cart-popup-item'>
                <div>{item.name}</div>
                <div>{'$' + item.price}</div>
                <div>{'Q' + item.quantity}</div>
              </div>
            );
          })}
        </div>
      </span>
    </nav>
  );
}
