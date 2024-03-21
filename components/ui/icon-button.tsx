import { cn } from '@/lib/util';
import { MouseEventHandler } from 'react';

interface IIconButtonProps {
  className?: string;
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: React.FC<IIconButtonProps> = ({ className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center bg-white border rounded-full shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
