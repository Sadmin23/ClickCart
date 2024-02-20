import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import Cart from './Cart';

export default function Header() {

  const [cartOpen, setCartOpen] = useState(false);

  const handleClose = () => {
    setCartOpen(false);
  }

  const handleCart = (prev) => {
    setCartOpen(!prev);
  }

  const totalQuantity = 0;

  return (
    <div className="flex flex-col w-full ">
      <div className="flex items-center justify-between sticky top-0 z-30 left-0 bg-white px-5 h-16 shadow-sm border-b border-gray-300">
        <div className="flex items-center">
          <Link to="/">
            <h1 className='md:pl-10'>ShopIT</h1>
          </Link>
        </div>
        <div className="flex w-2/3 items-center gap-6 justify-end relative">
          <SearchBar/>
          <FiShoppingCart
            className="h-5 w-5 mr-6 hover:cursor-pointer"
            onClick={() => handleCart(cartOpen)}
          />
          <p className="absolute top-1 right-1 -mt-2 bg-orange-500 rounded-full text-xs text-white px-1 py-0.5">
            {totalQuantity}
          </p>
        </div>
        {cartOpen && <Cart handleClose={handleClose}/>}
      </div>
    </div>
  )
}
