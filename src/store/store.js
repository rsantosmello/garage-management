import { create } from "zustand";

export const useStore = create((set) => ({
    showCustomerModal: false,
    showOrderModal: false,
    setShowCustomerModal: (value) => set({ showCustomerModal: value }),
    setShowOrderModal: (value) => set({ showOrderModal: value }),
}));
export default useStore;
