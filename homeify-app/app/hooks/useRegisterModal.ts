import { create } from 'zustand';

interface RegisterModalSrore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOPen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));

export dafault useRegisterModal;
