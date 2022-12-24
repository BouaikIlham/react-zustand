import './App.css';
import useStore from './store/store';
import { useEffect } from 'react';
import Products from './components/Products';

function App() {
const store = useStore()

useEffect(() => {
  store.fetchProducts()
}, [])
  return (
    <div>
      <Products products={store.products} />
    </div>
);
}

export default App;
