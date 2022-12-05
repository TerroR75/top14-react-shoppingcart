import { Outlet } from 'react-router-dom';
export default function (props) {
  const { shoppingCart, setShoppingCart } = props.shoppingCartProps;
  return (
    <div className='main-content'>
      <Outlet context={[shoppingCart, setShoppingCart]} />
    </div>
  );
}
