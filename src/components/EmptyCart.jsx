export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
        <img src="empty-cart.png" alt="empty-cart" width={150} />
        <p className="text-xl font-bold ml-6 mt-6">Cart Empty</p>
    </div>
  )
}
