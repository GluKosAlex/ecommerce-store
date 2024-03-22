'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { Dialog } from '@headlessui/react';
import Filter from './filter';

interface IMobileFiltersProps {
  sizes: ISize[];
  colors: IColor[];
}

const MobileFilters: React.FC<IMobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className='flex items-center gap-x-2 lg:hidden' onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>

      <Dialog className='relative z-40 lg:hidden' open={open} as='div' onClose={onClose}>
        {/* Backgroung */}
        <div className='fixed inset-0 bg-black/30' />

        {/* Dialog */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* Close button */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            {/* Render the filters */}
            <div className='p-4'>
              <Filter data={sizes} name='Sizes' valueKey='sizeId' />
              <Filter data={colors} name='Colors' valueKey='colorId' />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
