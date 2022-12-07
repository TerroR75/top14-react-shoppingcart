import { useOutletContext } from 'react-router-dom';
import items from '../../database/shopItems';

export default function () {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  function addItemToShoppingCart(e) {
    // Checks "database" for particular item (from event)
    const foundItem = items.find((item) => String(item.itemid) === e.target.dataset.itemid);

    // Checks if item is already in cart - if so -> increment the quantity by 1, if not -> add it to the cart
    if (shoppingCart.some((item) => item.itemid === foundItem.itemid)) {
      setShoppingCart([...shoppingCart]);
    } else {
      setShoppingCart([...shoppingCart, foundItem]);
    }
  }
  return (
    <div className='sp-content'>
      {items.map((item) => {
        return (
          <div key={item.itemid} className='sp-c-item'>
            <img src={item.img}></img>
            <h1>{item.name}</h1>
            <div>{item.descr}</div>
            <div>{'$' + item.price}</div>
            <div className='sp-c-item-add-to-cart-btn'>
              <i data-itemid={item.itemid} onClick={addItemToShoppingCart} class='fa-solid fa-cart-plus'></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
