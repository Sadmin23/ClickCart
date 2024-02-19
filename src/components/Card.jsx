const Card = (product) => {

    product = product.product;
  

  return (
    <div className="flex w-80 border border-gray-400 rounded-md hover:shadow-md cursor-pointer">
      <div className="w-full relative bg-white rounded-md p-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-44 rounded-t-md object-contain"
        />
      </div>
      <div className="w-full rounded-b-md flex flex-col bg-[#EFEFEF]">
        <p className="w-full font-bold  py-1 text-left px-2 overflow-hidden">
            <p className="line-clamp-3">$ {product.price}</p>
        </p>
        <div className="flex flex-col flex-grow items-center justify-between pb-4">
          <div className="w-full pt-1 px-2">
            <p className="text-sm font-semibold line-clamp-3">
              {product.title}
            </p>
            <p className="w-full text-xs font-semibold  py-1  text-[#8A8888] text-justify overflow-hidden">
              <p className="line-clamp-3">{product.description}</p>
            </p>
          </div>
          <div className="flex flex-row items-center justify-center h-8 p-4 bg-orange-500 rounded-full">
            <p className="text-sm font-semibold text-white">Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
