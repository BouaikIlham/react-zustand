import "./App.css";
import useStore from "./store/store";
import { useEffect } from "react";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {
  const store = useStore();

  useEffect(() => {
    store.fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products products={store.products} />} />
        <Route path="/checkout" element={<Checkout product={store.cart} removeProduct={store.removeProduct} updateCartTotal={store.updateCartTotal} cartTotal={store.cartTotal} incrementProductNumber={store.incrementProductNumber} decrementProductNumber={store.decrementProductNumber} />} />
      </Routes>
    </div>
  );
}

export default App;
