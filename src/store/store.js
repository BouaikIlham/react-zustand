import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let store = (set) => ({
  products: [],
  cart: [],
  cartTotal: 0,
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
    let sum = newCart.reduce((a, b) => a + (b.price * b.number), 0);
    sum = sum.toFixed(2)
    set({cart: newCart, cartTotal: sum})
  },
  updateCartTotal: () => {
    const { cart } = useStore.getState();
    const sum = cart.reduce((a, b) => a + b.price, 0);
    set({ cartTotal: sum })
  
  },
  incrementProductNumber: (product) => {
    const { cart } = useStore.getState();
    const number = product.number + 1
    const newProduct = {...product, number: number}
    const productIndex = cart.findIndex((p) => p.id === product.id)
    cart[productIndex] = newProduct
    let sum = cart.reduce((a, b) => a + (b.price * b.number), 0);
    sum = sum.toFixed(2)
    set({ cartTotal: sum, cart: cart })
  },
  decrementProductNumber: (product) => {
    const { cart } = useStore.getState();
    const number = product.number - 1
    if (number < 1) return alert("Stop")
    const newProduct = { ...product, number: number }
    const productIndex = cart.findIndex((p) => p.id === product.id)
    cart[productIndex] = newProduct
    let sum = cart.reduce((a, b) => a + (b.price * b.number), 0);
    sum = sum.toFixed(2)
    set({ cartTotal: sum, cart: cart })
  }
});

// store = persist(store); // for persisting the state
store = devtools(store); // using reduct extention in chrome

const useStore = create(store);

export default useStore;
