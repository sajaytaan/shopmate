import { useTitle } from '../hooks/useTitle';
import { ProductCard } from '../components';

export const Home = () => {
  useTitle('Home');

  const products = [
    { id: 1, name: 'Vintage Smart Television', price: 499, img: '/assets/images/product1.jpg' },
    { id: 2, name: 'Dumb Watch - White', price: 129, img: '/assets/images/product2.jpg' },
    { id: 3, name: 'Top of the World Headphones', price: 5, img: '/assets/images/product3.jpg' },
    { id: 4, name: 'X-Ray Glasses', price: 999, img: '/assets/images/product4.jpg' },
    { id: 5, name: 'Spy Plant', price: 49, img: '/assets/images/product5.jpg' },
    { id: 6, name: 'Minimum Pepsi Max', price: 249, img: '/assets/images/product6.jpg' },
    { id: 7, name: 'Good Condition Fruits', price: 99, img: '/assets/images/product7.jpg' },
    { id: 8, name: 'Defective Camera', price: 320, img: '/assets/images/product8.jpg' },
  ];

  return (
    <main>
      <section className="flex flex-wrap py-10 items-center justify-evenly">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
