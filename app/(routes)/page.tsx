import Container from '@/components/ui/container';
import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true }); // get featured products for home page
  const billboard = await getBillboard('d7c0b2b8-ad01-4980-9e8b-b0efd912d6bd'); // get billboard for home page
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
