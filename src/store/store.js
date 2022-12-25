import create from "zustand";
// import { persist, devtools } from "zustand/middleware";

let store = (set) => ({
  products: [],
  cart: [],

  fetchProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => res);

    set({ products: res });
  },
  addToCart: (product) => {
    const { cart } = useStore.getState();
    const isFound = cart.some((p) => {
      if (p.id === product.id) {
        return true;
      }
      return false;
    });
    if (isFound) return alert("already in cart");

    set((state) => ({ cart: [...state.cart, { ...product, number: 1 }] }));
  },
  clearCart: () => {
    set({ cart: []})
  },
  removeProduct: (product) => {
    const { cart } = useStore.getState();
    const newCart = cart.filter((p) => p.id !== product.id)
    set({cart: newCart})
  }
});

// store = persist(store); // for persisting the state
// store = devtools(store); // using reduct extention in chrome

const useStore = create(store);

export default useStore;
