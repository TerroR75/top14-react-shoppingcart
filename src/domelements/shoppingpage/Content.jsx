import { useOutletContext } from 'react-router-dom';

const items = [
  {
    name: 'FirstItem',
    descr: 'First item description',
    price: 59,
    quantity: 1,
    itemid: 0,
  },
  {
    name: 'SecondItem',
    descr: 'Second item description',
    price: 199,
    quantity: 1,
    itemid: 1,
  },
  {
    name: 'ThirdItem',
    descr: 'Third item description',
    price: 19,
    quantity: 1,
    itemid: 2,
  },
  {
    name: 'FourthItem',
    descr: 'Fourth item description',
    price: 599,
    quantity: 1,
    itemid: 3,
  },
];

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
            <h1>{item.name}</h1>
            <div>{item.descr}</div>
            <div>{'$' + item.price}</div>
            <button data-itemid={item.itemid} onClick={addItemToShoppingCart}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
