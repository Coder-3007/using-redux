import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Store/Slices/cart-slice";
import { MdDeleteOutline } from "react-icons/md";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div>
      <div className="flex truncate s  items-center p-4 justify-between bg-blue-400 mt-3 mb-2 rounded-xl">
        <div className="flex  p-2">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-xl font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className=" text-white border-3 rounded-lg font-bold p-10 hover:text-red-600"
          >
            <MdDeleteOutline className="h-10 w-10 " />
          </button>
        </div>
      </div>
    </div>
  );
}
