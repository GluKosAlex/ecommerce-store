const CATEGORIES_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(CATEGORIES_URL);
  const categories = await response.json();
  return categories;
};

export default getCategories;
