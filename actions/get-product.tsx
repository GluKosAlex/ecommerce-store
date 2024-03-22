const PRODUCT_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(`${PRODUCT_URL}/${id}`);

  return response.json();
};

export default getProduct;
