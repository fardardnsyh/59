import { create } from "zustand";

interface ResponseState {
  response: string;
  loading: boolean;
  question: string;
  updateResponse: (newResponse: string) => void;
  updateLoading: (newLoading: boolean) => void;
  updateQuestion: (newQuestion: string) => void;
}

const useStore = create<ResponseState>((set) => ({
  response: "",
  loading: true,
  question: "",
  updateResponse: (newResponse: string) => set({ response: newResponse }),
  updateLoading: (newLoading: boolean) => set({ loading: newLoading }),
  updateQuestion: (newQuestion: string) => set({ question: newQuestion }),
}));

export default useStore;
