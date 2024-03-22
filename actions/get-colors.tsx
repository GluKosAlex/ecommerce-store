const COLORS_URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<IColor[]> => {
  const response = await fetch(COLORS_URL);

  return response.json();
};

export default getColors;
