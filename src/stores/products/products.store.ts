import {create} from "zustand"
import { ProductsState } from "./products.store.interface"

export const useProductStore = create<ProductsState>(() => ({
    products: [],
}))


