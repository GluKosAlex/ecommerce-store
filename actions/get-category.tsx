const CATEGORY_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<ICategory> => {
  const response = await fetch(`${CATEGORY_URL}/${id}`);

  return response.json();
};

export default getCategory;
