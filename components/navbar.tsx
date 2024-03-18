import Link from 'next/link';
import Container from '@/components/ui/container';
import MainNav from '@/components/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/navbar-actions';

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className='border-b'>
      <Container>
        <div className='flex items-center relative min-h-16 px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='flex ml-4 lg:ml-0 gap-x-2'>
            <p className='text-xl font-bold'>Jou-B-Jou</p>
          </Link>
          <MainNav data={categories}></MainNav>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
