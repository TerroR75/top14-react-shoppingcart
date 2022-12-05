import { useOutletContext } from 'react-router-dom';

const items = [
  {
    name: 'FirstItem',
    descr: 'First item description',
    price: 59,
    id: 0,
  },
  {
    name: 'SecondItem',
    descr: 'Second item description',
    price: 199,
    id: 1,
  },
  {
    name: 'ThirdItem',
    descr: 'Third item description',
    price: 19,
    id: 2,
  },
  {
    name: 'FourthItem',
    descr: 'Fourth item description',
    price: 599,
    id: 3,
  },
];

export default function () {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  function addItemToShoppingCart(e) {
    // Checks "database" for particular item (from event)
    const foundItem = items.find((item) => String(item.id) === e.target.dataset.itemid);

    // Add item to shopping cart
    setShoppingCart([...shoppingCart, foundItem]);
  }
  return (
    <div className='sp-content'>
      {items.map((item) => {
        return (
          <div className='sp-c-item'>
            <h1>{item.name}</h1>
            <div>{item.descr}</div>
            <div>{'$' + item.price}</div>
            <button data-itemid={item.id} onClick={addItemToShoppingCart}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
