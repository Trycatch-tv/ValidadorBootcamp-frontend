import { create } from "zustand";
import type { ProductsState } from "./products.store.interface";

export const useProductStore = create<ProductsState>(() => ({
  products: [],
}));
