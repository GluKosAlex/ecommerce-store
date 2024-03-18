interface BillboardProps {
  data: IBillboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] bg-cover bg-center bg-no-repeat'
      >
        <div className='flex flex-col justify-center items-center text-center w-full h-full gap-y-8'>
          <p className='font-bold text-3xl md:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>{data.label}</p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
