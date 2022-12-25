import React, { useState } from "react";
import useStore from "../store/store";
import CartIcon from "./CartIcon";

const CartShop = () => {
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  const store = useStore();
  const [modalOpen, setModelOpen] = useState(false);
  return (
    <div className="fixed right-5 top-5 w-96 z-10">
      <CartIcon setModelOpen={setModelOpen} modalOpen={modalOpen} />
      <div
        className={`border border-2 p-2 bg-white ${modalOpen ? "" : "hidden"}`}
      >
        <h4 className="text-center font-bold text-blue-700 text-lg">
          Your Cart
        </h4>

        {store.cart.length === 0 && (
          <h3 className="text-center">Cart is empty, add some products</h3>
        )}
        {store.cart.map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-between items-center border border-black my-2 p-2"
            >
              <h3>{truncateString(product.title, 15)}</h3>
              <div>
                <img src={product.image} className="w-10 h-10" alt="product" />
              </div>
            </div>
          );
        })}
        {store.cart.length !== 0 && (
          <div className="mt-4">
            <button
              onClick={() => console.log("Clear cart")}
              className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 "
            >
              Clear Cart
            </button>
            <button
              onClick={() => console.log("checkout")}
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 "
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartShop;
