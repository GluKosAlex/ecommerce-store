'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '../lib/util';

interface MainNavProps {
  data: ICategory[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className='flex items-center gap-4 mx-6 space-x-4 lg:space-x-6'>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.label}
          className={cn(
            'text-sm font-medium transition-colors',
            route.active ? 'text-black' : 'text-neutral-500 hover:text-black'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
