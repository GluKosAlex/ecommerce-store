import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ICartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: IProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Item already in cart');
        }

        set({ items: [...currentItems, data] });
        toast.success('Item added to cart');
      },

      removeItem: (id: string) => {
        const currentItems = get().items;
        const filteredItems = currentItems.filter((item) => item.id !== id);

        set({ items: filteredItems });
        toast.success('Item removed from cart');
      },

      removeAll: () => {
        set({ items: [] });
        toast.success('Cart cleared');
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage), // defaults to localStorage if no storage argument is passed
    }
  )
);

export default useCart;
