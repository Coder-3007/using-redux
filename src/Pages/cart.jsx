import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../Components/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  // it will give us the updated state

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((account, current) => account + current.price, 0));
  }, [cart]);
  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>

          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-blue-400">
                Your Cart Summary
              </h1>

              <p>
                <span className="text-gray-500 font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-500 font-bold">Total Amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className=" min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your Cart Is Empty
          </h1>
          <Link to="/">
            <button className="bg-blue-400 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
