export const ProductCard = ({ product }) => {
  const { name, price, img } = product;

  const handleClick = () => {
    console.log('-');
  };

  return (
    <div className="py-2">
      <div className="border max-w-sm rounded font-medium">
        <div>
          <img className="object-fill h-96 w-96 px-2 py-4" src={img} alt={name} />
          <p className="px-2">{name}</p>
        </div>
        <div className="flex justify-between items-center py-4 px-2">
          <span>${price}</span>
          <button
            onClick={handleClick}
            className="bg-button py-1 px-3 rounded font-normal text-white hover:bg-blue-900"
            name="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
