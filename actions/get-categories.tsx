const CATEGORIES_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(CATEGORIES_URL);

  return response.json();
};

export default getCategories;
