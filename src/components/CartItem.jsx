import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

import { addItem, deleteItem, removeItems } from "../redux/cart/cartSlice";
import Minus from "../SVG/Minus";
import Plus from "../SVG/Plus";

export default function CartItem(product) {

  
    const dispatch = useDispatch();

    product = product.item;

    const addtoCart = () => {
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
          totalPrice: product.totalPrice
        };
  
        dispatch(addItem(cartItem))
      }

      const removefromCart = () => {
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: product.quantity,
          totalPrice: product.totalPrice
        };
        dispatch(removeItems(cartItem))
      }

      const deletefromCart = () => {
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: product.quantity,
          totalPrice: product.totalPrice
        };
        toast.success('Item removed from cart');
        dispatch(deleteItem(cartItem))
      }

  return (
    <div className="flex flex-row items-start justify-center shadow-md w-full py-4 rounded-md bg-[#EFEFEF] border border-gray-400">
        <div className="flex flex-col items-center justify-center w-2/5 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 object-contain border bg-white border-gray-500 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col items-start gap-3 justify-between h-16 w-3/4">
          <p className="font-semibold">{product.title}</p>
          <div className="flex items-center justify-between w-full pr-4">
            <p className="text-sm font-semibold">$ {product.price}</p>
            <div className="py-2 flex items-center h-6 bg-white border border-gray-500 w-24  justify-between rounded-md">
              <button onClick={removefromCart}>
                <Minus/>
              </button>
              {product.quantity}
              <button onClick={addtoCart}>
                <Plus/>
              </button>
            </div>
            <button onClick={deletefromCart}>
                <img
                    src="delete.png"
                    alt="delete"
                    width={18}
                    height={18}
                />
            </button>
          </div>
        </div>
    </div>
  )
}
