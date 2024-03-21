import NoResults from './ui/no-results';

interface IProductListProps {
  title: string;
  products: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ title, products }) => {
  return (
    <div className='space-y-4'>
      <h3 className='text-3xl font-bold'>{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.id} className=''>
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
