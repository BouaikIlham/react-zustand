import "./App.css";
import useStore from "./store/store";
import { useEffect } from "react";
import Products from "./components/Products";
import CartShop from "./components/CartShop";

function App() {
  const store = useStore();

  useEffect(() => {
    store.fetchProducts();
  }, []);
  return (
    <div>
      <CartShop />
      <Products products={store.products} />
    </div>
  );
}

export default App;
