import { useCart } from '../context/CartContext';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  const { total, cartList } = useCart();
  console.log(cartList);
  const { removeFromCart } = useCart();
  useTitle('Cart');

  return (
    <main>
      <div className="flex flex-col">
        <p className="font-extrabold text-2xl text-center py-5">
          Cart Items: {cartList.length} / ${total}
        </p>
        {cartList.map((cart) => (
          <div className="py-3" key={cart.id}>
            <div className="shadow-sm  flex justify-between border px-3 rounded-md py-2 items-center">
              <img className=" h-28 px-2 py-2" src={cart.img} alt={cart.name} />
              <span>{cart.name}</span>
              <span>${cart.price}</span>
              <button
                onClick={() => removeFromCart(cart)}
                className="px-2 rounded-lg bg-red-800 text-white h-8 hover:bg-red-900"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
