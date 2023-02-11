import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  useTitle('Cart');

  const products = [
    { id: 1, name: 'Vintage Smart Television', price: 499, img: '/assets/images/product1.jpg' },
    { id: 2, name: 'Dumb Watch - White', price: 129, img: '/assets/images/product2.jpg' },
  ];

  return (
    <main>
      <div className="flex flex-col">
        <p className="font-extrabold text-2xl text-center py-5">Cart Items: 2</p>
        {products.map((product) => (
          <div className="py-3">
            <div className="shadow-sm  flex justify-between border px-3 rounded-md py-2 items-center">
              <img className=" h-28 px-2 py-2" src={product.img} alt={product.name} />
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button className="px-2 rounded-lg bg-red-800 text-white h-8 hover:bg-red-900">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
