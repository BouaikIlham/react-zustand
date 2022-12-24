import create from 'zustand'

const useStore = create((set) => ({
   count: 0,
   products: [],
   cart: [],
   incrementCount: () => {
    set((state) => ({count: state.count + 1}))
   },
    decrementCount: () => {
        set((state) => ({ count: state.count - 1 }))
    },
    fetchProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => res )

        set({ products: res })

    },
    addToCart: (product) => {
        set((state) =>({cart: [...state.cart, product]}))
        const {cart} = useStore.getState()
        
    }
}))

export default useStore;