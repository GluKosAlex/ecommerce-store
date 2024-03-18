import Container from '@/components/ui/container';
import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('d7c0b2b8-ad01-4980-9e8b-b0efd912d6bd');
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
