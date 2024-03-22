'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';
import GalleryTab from './gallery-tab';

interface IGalleryProps {
  images: IImage[];
}

const Gallery: React.FC<IGalleryProps> = ({ images }) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 max-w-2xl w-full sm:block lg:max-w-none hidden '>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image}></GalleryTab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='aspect-square relative h-full w-full am:rounded-lg overflow-hidden'>
              <Image fill src={image.url} alt='Product image.' className='object-cover object-center' />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
