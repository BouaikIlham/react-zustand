import "./App.css";
import useStore from "./store/store";
import { useEffect } from "react";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { Route, Routes } from 'react-router-dom';


function App() {
  const store = useStore();

  useEffect(() => {
    store.fetchProducts();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Products products={store.products} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
