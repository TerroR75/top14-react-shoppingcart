import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
export default function (props) {
  function consoleLogCart() {
    console.log(props.shoppingCartProps.shoppingCart);
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
      <span onClick={consoleLogCart} className='nav-shopping-cart'>
        Cart
      </span>
    </nav>
  );
}
