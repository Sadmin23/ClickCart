import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, itemCount, itemList, totalPrice } from "../redux/cart/cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import toast from 'react-hot-toast';

export default function Cart(props) {
  const dispatch = useDispatch();
  const { handleClose } = props;
  const totalQuantity = useSelector(itemCount);
  const total = useSelector(totalPrice);
  const Items = useSelector(itemList);

  const handleClearCart = () => {
    toast.success('Cart cleared');
    dispatch(clearCart());
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-xs z-40" />
      <div className="fixed inset-y-0 right-0 h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col z-50">
        <div className="flex flex-col h-12">
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-300">
            <p className="text-lg font-semibold">Cart</p>
            <FiX className="h-5 w-5 hover:cursor-pointer" onClick={handleClose} />
          </div>
        </div>
        {totalQuantity > 0 ? (
          <div className="flex p-5 gap-2 flex-col items-center justify-start overflow-y-scroll flex-grow">
            {Items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyCart/>
        )}
        {totalQuantity > 0 && (
          <button
            className="bg-[#f34235] flex items-center justify-center m-4 h-10 rounded-md text-white text-lg gap-1 font-bold border-red-700 border-2"
            onClick={handleClearCart}
          >
            <img src="bin.png" alt="cart" className="w-8 h-8" />
            Clear Cart
          </button>
        )}
        {totalQuantity > 0 && (
          <div className="flex flex-col items-end justify-end p-4 border-t border-gray-400">
            <div className="flex flex-col items-start justify-start w-full gap-3">
              <div className="flex flex-row items-start justify-between w-full">
                <p className="font-semibold">Items</p>
                <p className="font-semibold">{totalQuantity}</p>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">$ {total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}