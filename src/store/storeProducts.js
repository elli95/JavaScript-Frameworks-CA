import { create } from "zustand";
import { API_PRODUCTS } from "../shared/apis";

const useStoreProducts = create((set, get) => ({
  products: [],
  cart: [],
  fetchProducts: async () => {
    const response = await fetch(API_PRODUCTS);
    const json = await response.json();
    set((state) => ({ ...state, products: json.data }));
  },
  addToCart: (id) => {
    set((state) => {
      const product = state.products.find((currentProduct) => id === currentProduct.id);

      const productInCartIndex = state.cart.findIndex((currentProduct) => id === currentProduct.id);

      if (productInCartIndex === -1) {
        product.quantity = 1;
        return { ...state, cart: [...state.cart, product] };
      }
      state.cart[productInCartIndex].quantity += 1;
      return { ...state };
    });
  },

  clearCart: () => set(() => ({ cart: [] })),
  deleteItemFromCart: (id) =>
    set((state) => {
      const updatedShoppingCart = state.cart.filter((product) => {
        if (product.id === id) {
          return false;
        }
        return true;
      });
      return { ...state, cart: updatedShoppingCart };
    }),
  getShoppingCartTotalValue: () =>
    get().cart.reduce((total, product) => {
      const currentPrice = product.quantity * product.price;
      total += currentPrice;
      return total;
    }, 0),
  getTotalNumberOfItemsInCart: () =>
    get.call().cart.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0),
}));

export default useStoreProducts;
