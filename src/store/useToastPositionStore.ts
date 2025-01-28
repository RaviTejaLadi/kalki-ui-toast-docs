import { ToastPosition } from "@/components/common/toast";
import { create } from "zustand";

interface ToastStore {
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  position: "top-center",
  setPosition: (position) => set({ position }),
}));
