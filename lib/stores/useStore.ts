import { create } from "zustand";

// Define the shape of the store
interface UseStore {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

// Create the zustand store
export const useUseStore = create<UseStore>((set) => ({
  activeTab: "About",
  setActiveTab: (value: string) => set({ activeTab: value }),

  
}));
