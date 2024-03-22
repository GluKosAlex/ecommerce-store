import { create } from 'zustand';

interface IPreviewModalStore {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}

const usePreviewModal = create<IPreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: IProduct) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));

export default usePreviewModal;
