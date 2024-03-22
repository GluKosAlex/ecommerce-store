import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/gallery';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

interface IProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<IProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId); // get product details that user clicked on
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  }); // get suggested products for product page from same category

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 ig:items-start lg:gap-x-8'>
            <Gallery images={product.images} />

            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>Info</div>
          </div>
          <hr className='my-10' />
          <ProductList title='Related Items' products={suggestedProducts}></ProductList>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
