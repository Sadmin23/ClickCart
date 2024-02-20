import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { itemCount } from '../redux/cart/cartSlice';
import { logout, signedIn } from '../redux/user/userSlice';

export default function Header() {

  const [cartOpen, setCartOpen] = useState(false);
  const loggedIn = useSelector(signedIn)
  const dispatch = useDispatch();

  const handleClose = () => {
    setCartOpen(false);
  }

  const handleCart = (prev) => {
    setCartOpen(!prev);
  }

  const handleLogOut = () => {
    dispatch(logout());
  }

  const totalQuantity = useSelector(itemCount);

  return (
    <div className="flex flex-col w-full ">
      <div className="flex items-center justify-between sticky top-0 z-30 left-0 bg-white px-5 h-16 shadow-sm border-b border-gray-300">
        <div className="flex items-center">
          <Link to="/">
            <h1 className='md:pl-10 text-xl tracking-wide font-bold'>ShopIT</h1>
          </Link>
        </div>
        {loggedIn && <SearchBar/>}
        {loggedIn && <div className="flex items-center gap-2 relative">
          <FiShoppingCart
            className="h-5 w-5 mr-6 hover:cursor-pointer"
            onClick={() => handleCart(cartOpen)}
          />
          <p className="absolute top-1 right-16 -mt-2 bg-orange-500 rounded-full text-xs text-white px-1 py-0.5">
            {totalQuantity}
          </p>
          <button onClick={handleLogOut}>
            <p className='font-semibold'>Logout</p>
          </button>
        </div>}
        {cartOpen && <Cart handleClose={handleClose}/>}
      </div>
    </div>
  )
}
