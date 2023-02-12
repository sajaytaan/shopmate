import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, img } = product;

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="py-2">
      <div className="border max-w-sm rounded font-medium">
        <div>
          <img className="object-fill h-96 w-96 px-2 py-4" src={img} alt={name} />
          <p className="px-2">{name}</p>
        </div>
        <div className="flex justify-between items-center py-4 px-2">
          <span>${price}</span>
          {isInCart ? (
            <button
              onClick={() => removeFromCart(product)}
              className="px-2 rounded-lg bg-red-800 text-white h-8 hover:bg-red-900"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-button py-1 px-3 rounded font-normal text-white hover:bg-blue-900"
              name="button"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
