import { create } from "zustand";

const useActiveSectionStore = create((set) => ({
  activeSection: "",
  setActiveSection: (section = "") => set(() => ({ activeSection: section })),
}));

export default useActiveSectionStore;
