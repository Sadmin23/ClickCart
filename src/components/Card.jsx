import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, itemList } from "../redux/cart/cartSlice";
import toast, { Toaster } from 'react-hot-toast';

const Card = (product) => {

  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  product = product.product;
  
  const Items = useSelector(itemList);

  useEffect(() => {
    const isProductPresent = Items.find(item => item.id === product.id);
    setAdded(isProductPresent);
  },[Items]);

  const quantity = 1;
  
  const addtoCart = () => {
    added
      ? toast.error('Item already added to cart')
      : (() => {
          const totalPrice = product.price * quantity;
          const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            totalPrice: totalPrice
          };
          setAdded(true);
          toast.success('Item added to cart');
          dispatch(addItem(cartItem));
        })();
  };

  return (
    <div className="flex w-80 border border-gray-400 rounded-md hover:shadow-md cursor-pointer">
      <Toaster />
      <div className="w-full relative bg-white rounded-md p-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-44 rounded-t-md object-contain"
        />
      </div>
      <div className="w-full rounded-b-md flex flex-col bg-[#EFEFEF]">
        <p className="w-full font-bold line-clamp-3 py-1 text-left px-2 overflow-hidden">
            $ {product.price}
        </p>
        <div className="flex flex-col flex-grow items-center justify-between pb-4">
          <div className="w-full pt-1 px-2">
            <p className="text-sm font-semibold line-clamp-3">
              {product.title}
            </p>
            <p className="w-full text-xs font-semibold line-clamp-3 py-1 text-[#8A8888] text-justify overflow-hidden">
              {product.description}
            </p>
          </div>
          <button className={`flex flex-row items-center justify-center h-8 p-4 ${added ? 'bg-orange-300' :`bg-orange-500`} rounded-full`} onClick={addtoCart}>
            <p className="text-sm font-semibold text-white">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
