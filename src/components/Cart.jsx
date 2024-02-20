import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { itemCount, itemList, totalPrice } from "../redux/cart/cartSlice";

export default function Cart(props) {

    const { handleClose } = props;

    const totalQuantity = useSelector(itemCount);
    const total = useSelector(totalPrice);
    const Items = useSelector(itemList);

    console.log(Items);

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-xs z-40" />
      <div className="fixed inset-y-0 right-0 h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col z-50">
        <div className="flex flex-col h-12">
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-300">
            <p className="text-lg font-semibold">Cart</p>
            <FiX className="h-5 w-5 hover:cursor-pointer" onClick={handleClose}/>
          </div>
        </div>
        <div className="flex p-5 gap-2 flex-col items-center justify-start overflow-y-scroll flex-grow">
        </div>
        <div className="flex flex-col items-end justify-end p-4 border-t border-gray-400 ">
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
      </div>
    </>
  )
}
