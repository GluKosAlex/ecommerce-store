const SIZES_URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<ISize[]> => {
  const response = await fetch(SIZES_URL);

  return response.json();
};

export default getSizes;
