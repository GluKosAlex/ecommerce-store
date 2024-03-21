'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
}); // Intl.NumberFormat is used to format the price as a currency string. Intl is a built-in JavaScript module that provides support for internationalization and localization.

interface ICurrencyProps {
  value?: string | number;
}

const Currency: React.FC<ICurrencyProps> = ({ value }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
};

export default Currency;
