import Navbar from '../domelements/shoppingpage/Navbar';
import Content from '../domelements/shoppingpage/Content';
import '../styles/shoppingpage.scss';
export default function () {
  return (
    <div className='shopping-page'>
      <Navbar />
      <Content />
    </div>
  );
}
