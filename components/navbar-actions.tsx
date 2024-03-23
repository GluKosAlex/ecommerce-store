'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

const NavbarActions = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className='flex items-center gap-x-4 ml-auto'>
      <Button onClick={() => router.push('/cart')} className='flex items-center px-4 py-2'>
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-white text-sm font-medium'> {cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
