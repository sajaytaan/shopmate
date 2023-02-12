import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from '../assets/logo.png';

export const Header = () => {
  const { cartList } = useCart();

  const activeClass = 'block bg-gray-200 text-gray-700 py-2 px-3 rounded';
  const inActiveClass = 'block text-gray-700 py-2 px-3';

  return (
    <header>
      <nav className="px-3 pt-2">
        <div className="flex flex-wrap justify-between items-center border-b border-gray-200 py-3 px-3">
          <Link to="/">
            <div className="flex items-center">
              <img className="h-6 sm:h-9" src={Logo} alt="logo" />
              <span className="px-2 self-center text-lg">Shopping Cart</span>
            </div>
          </Link>
          <ul className="flex space-x-0 text-lg items-center">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
                Cart
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <div className="font-medium">
              <span>Cart: {cartList.length}</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
