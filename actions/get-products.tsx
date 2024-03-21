import qs from 'query-string';

const CATEGORIES_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  szeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<IProduct[]> => {
  const url = qs.stringifyUrl({
    url: CATEGORIES_URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      szeId: query.szeId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(CATEGORIES_URL);
  const categories = await response.json();
  return categories;
};

export default getProducts;
