import Container from '@/components/ui/container';
import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true }); // get featured products for home page
  const billboard = await getBillboard('06934523-1c20-457f-9cf5-ad02a219fedf'); // get billboard for home page
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
