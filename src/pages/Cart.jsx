

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {cart.length > 0 ? (
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row">
          {/* Left Section: Cart Items */}
          <div className="md:w-2/3 pr-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <CartItem  key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-medium">Total Items:</span> {cart.length}
              </p>
              <p>
                <span className="font-medium">Total Amount:</span> ${" "}
                {totalAmount.toFixed(2)}
              </p>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">
            Your Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;





