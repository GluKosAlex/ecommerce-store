'use client';

import Image from 'next/image';

import IconButton from '@/components/ui/icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };

  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          className='aspect-square object-cover rounded-md'
          src={product.images?.[0]?.url}
          fill
          alt='product image'
        />
        <div className='transition absolute w-full px-6 bottom-5 opacity-0 group-hover:opacity-100'>
          <div className='flex justify-center gap-x-6'>
            <IconButton className='text-gray-500' onClick={onPreview} icon={<Expand size={20} />} />
            <IconButton className='text-gray-500' onClick={() => {}} icon={<ShoppingCart size={20} />} />
          </div>
        </div>
      </div>

      <div className=''>
        <p className='font-semibold text-lg'>{product.name}</p>
        <p className='text-gray-500 text-sm'>{product.category?.name}</p>
      </div>

      <div className='flex items-center justify-between'>
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
