const BILLBOARD_URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<IBillboard> => {
  const response = await fetch(`${BILLBOARD_URL}/${id}`);
  const billboard = await response.json();
  return billboard;
};

export default getBillboard;
