import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
export default function (props) {
  const { shoppingCart, setShoppingCart } = props.shoppingCartProps;
  function consoleLogCart() {
    console.log(shoppingCart);
    const popup = document.querySelector('.shopping-cart-popup');
    popup.classList.toggle('popup-active');
  }

  function handleQuantityInput(e) {
    // Find particular bounded to this value input item inside shopping cart
    const foundItem = shoppingCart.find((item) => String(item.itemid) === e.target.dataset.itemid);
    const inputValue = parseInt(e.target.value);

    if (inputValue === 0 || inputValue < 0 || isNaN(inputValue)) {
      const newArray = shoppingCart.filter((item) => item.itemid !== parseInt(e.target.dataset.itemid));
      setShoppingCart(newArray);
    } else {
      foundItem.quantity = inputValue;
      setShoppingCart([...shoppingCart]);
    }
    console.log(foundItem);
    console.log(e.target.dataset.itemid);
  }
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to={'/'}>
            <div className='navbar-button'>Home</div>
          </Link>
        </li>
        <li>
          <Link to={'/products'}>
            <div className='navbar-button'>Shop</div>
          </Link>
        </li>
      </ul>
      <span className='nav-shopping-cart'>
        <div className='nav-shopping-cart-button navbar-button' onClick={consoleLogCart}>
          <span>Cart</span>
          {shoppingCart.length > 0 ? <div className='cart-item-quantity-notification'>{shoppingCart.length}</div> : <div></div>}
        </div>
        <div className='shopping-cart-popup'>
          <div className='shopping-cart-popup-items-container'>
            {shoppingCart.map((item) => {
              return (
                <div key={item.itemid} className='shopping-cart-popup-item'>
                  <div className='shopping-cart-popup-item-img-container'>
                    <img src={item.img}></img>
                  </div>
                  <div className='shopping-cart-popup-item-info-container'>
                    <div className='item-name'>{item.name}</div>
                    <input
                      data-itemid={item.itemid}
                      onChange={handleQuantityInput}
                      defaultValue={item.quantity}
                      type='number'
                      min='0'
                      max='100'
                    ></input>
                  </div>
                  <div className='item-price'>{'$' + item.price}</div>
                </div>
              );
            })}
          </div>
          <div className='shopping-cart-popup-summary'>
            <div className='shopping-cart-popup-summary-total'>
              <div>Total:</div>
              <div>
                $
                {shoppingCart.reduce((previous, current) => {
                  return previous + current.price * current.quantity;
                }, 0)}
              </div>
            </div>
            <div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </span>
    </nav>
  );
}
