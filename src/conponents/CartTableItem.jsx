
import { GrClose } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getImage } from "../helper/getImage";

function CartTableItem({ onClose, cartItems, onDelete, onIncrement }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-900 w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-8/12 p-6 flex flex-col shadow-lg rounded-lg overflow-hidden relative">
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl sm:text-xl"
          onClick={onClose}
        >
          <GrClose />
        </button>

        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-2xl sm:text-3xl text-white">Your Cart</h3>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/3">
            <div className="flex justify-between text-gray-400 border-b border-gray-700 pb-3">
              <span className="w-3/6 text-left pl-5 text-sm sm:text-base">
                Product
              </span>
              <span className="w-1/6 text-center text-sm sm:text-base">
                Price
              </span>
              <span className="w-1/6 text-center text-sm sm:text-base">
                Quantity
              </span>
              <span className="w-1/6 text-center text-sm sm:text-base">
                Total
              </span>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-white border-b border-gray-700 py-4 transform transition-all duration-300 ease-in-out hover:-translate-y-2"
                >
                  <div className="flex items-center w-3/6 pl-5">
                    <img
                      className="w-16 h-20 mr-4"
                      src={getImage(`../assets/image/${item.image}`)}
                      alt={item.name}
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {item.name}
                      </p>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {item.author}
                      </span>
                    </div>
                  </div>

                  <div className="w-1/6 text-center text-sm sm:text-base">
                    ${item.price}
                  </div>
                  <div className="w-1/6 text-center flex justify-center items-center">
                    <button
                      className="bg-gray-700 text-white px-2 py-1 rounded-l text-sm sm:text-base"
                      onClick={() => onIncrement(item.id, "decrement")}
                    >
                      -
                    </button>
                    <span className="px-4 text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    <button
                      className="bg-gray-700 text-white px-2 py-1 rounded-r text-sm sm:text-base"
                      onClick={() => onIncrement(item.id, "increment")}
                    >
                      +
                    </button>
                  </div>

                  <div className="w-1/6 text-center text-sm sm:text-base">
                    ${item.price * item.quantity}
                  </div>
                  <div>
                    <RiDeleteBin6Line
                      className="text-xl sm:text-2xl cursor-pointer"
                      onClick={() => onDelete(item.id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-8">
                Your cart is empty.
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full sm:w-1/3 flex flex-col items-center mt-8 sm:mt-0 ml-5">
            <div className="bg-gray-800 p-4 rounded-lg text-white w-full h-60 mb-4">
              <h4 className="font-semibold py-4 text-center text-xl sm:text-2xl border-b">
                Order Summary
              </h4>
              <div className="flex justify-between text-gray-400 mb-2 mt-4 text-sm sm:text-base">
                <span className="text-xl">Subtotal</span>
                <span className="text-xl">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="flex justify-between text-gray-400 mb-2 text-sm sm:text-base">
                <span className="text-xl">Shipping</span>
                <span className="text-green-500 text-xl">Free</span>
              </div>
              <div className="flex justify-between text-gray-400 font-semibold border-t border-gray-700 pt-2 text-sm sm:text-base">
                <span className="text-xl">Total</span>
                <span className="text-xl">
                  $
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
            </div>
            <button className="w-full bg-green-500 py-3 mt-2 rounded text-white font-semibold text-sm sm:text-base">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTableItem;














// import { GrClose } from "react-icons/gr";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { getImage } from '../helper/getImage';

// function CartTableItem({ onClose, data,cartItems }) {
  
  


 

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="bg-gray-900 w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-8/12 p-6 flex flex-col shadow-lg rounded-lg overflow-hidden relative">
//         <button className="absolute top-4 right-4 text-gray-400 text-2xl sm:text-xl" onClick={onClose}>
//           <GrClose />
//         </button>

//         <div className="text-center mb-4 sm:mb-6">
//           <h3 className="text-2xl sm:text-3xl text-white">Your Cart</h3>
//         </div>
        

//         <div className="flex flex-col sm:flex-row">
          
//           <div className="w-full sm:w-2/3">
//             <div className="flex justify-between text-gray-400 border-b border-gray-700 pb-3">
//               <span className="w-3/6 text-left pl-5 text-sm sm:text-base">Product</span>
//               <span className="w-1/6 text-center text-sm sm:text-base">Price</span>
//               <span className="w-1/6 text-center text-sm sm:text-base">Quantity</span>
//               <span className="w-1/6 text-center text-sm sm:text-base">Total</span>
//             </div>

//             {[1, 2, 3].map((item, index) => (
//               <div key={index} className=" flex justify-between items-center text-white border-b border-gray-700 py-4">
//                 <div className="flex items-center w-3/6 pl-5">
//                   <img className="w-16 h-20 mr-4" src={getImage('../assets/image/3.jpg')} alt="Product" />
//                   <div>
//                     <p className="font-semibold text-sm sm:text-base">{data.name}</p>
//                     <span className="text-gray-400 text-xs sm:text-sm">{data.author}</span>
//                   </div>
//                 </div>

//                 <div className="w-1/6 text-center text-sm sm:text-base">$50</div>
//                 <div className="w-1/6 text-center flex justify-center items-center">
//                   <button className="bg-gray-700 text-white px-2 py-1 rounded-l text-sm sm:text-base">-</button>
//                   <span className="px-4 text-sm sm:text-base">2</span>
//                   <button className="bg-gray-700 text-white px-2 py-1 rounded-r text-sm sm:text-base">+</button>
//                 </div>

//                 <div className="w-1/6 text-center text-sm sm:text-base">$100</div>
//                 <div>
//                   <RiDeleteBin6Line className="text-xl sm:text-2xl" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="w-full sm:w-1/3 flex flex-col items-center mt-8 sm:mt-0 ml-5 ">
//             <div className="bg-gray-800 p-4 rounded-lg text-white w-full h-60 mb-4">
//               <h4 className="font-semibold py-4 text-center text-xl sm:text-2xl border-b">Order Summary</h4>
//               <div className="flex justify-between text-gray-400 mb-2 mt-4 text-sm sm:text-base">
//                 <span className="text-xl">Subtotal</span>
//                 <span className="text-xl">$300</span>
//               </div>
//               <div className="flex justify-between text-gray-400 mb-2 text-sm sm:text-base">
//                 <span className="text-xl">Shipping</span>
//                 <span className="text-green-500 text-xl">Free</span>
//               </div>
//               <div className="flex justify-between text-gray-400 font-semibold border-t border-gray-700 pt-2 text-sm sm:text-base">
//                 <span className="text-xl">Total</span>
//                 <span className="text-xl">$300</span>
//               </div>
//             </div>
//             <button className="w-full bg-green-500 py-3 mt-2 rounded text-white font-semibold text-sm sm:text-base">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartTableItem;



















// import { GrClose } from "react-icons/gr";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { getImage } from '../helper/getImage';

// function CartTableItem({ onClose, data }) {
//   console.log(data);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="bg-gray-900 w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 p-6 flex flex-col shadow-lg rounded-lg overflow-hidden relative">
//         <button className="absolute top-4 right-4 text-gray-400 text-2xl sm:text-xl" onClick={onClose}>
//           <GrClose />
//         </button>

//         <div className="text-center mb-4 sm:mb-6">
//           <h3 className="text-2xl sm:text-3xl text-white">Your Cart</h3>
//         </div>

//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-2/3">
//             <div className="flex justify-between text-gray-400 border-b border-gray-700 pb-3">
//               <span className="w-3/6 text-left pl-5 text-sm sm:text-base">Product</span>
//               <span className="w-1/6 text-center text-sm sm:text-base">Price</span>
//               <span className="w-1/6 text-center text-sm sm:text-base">Quantity</span>
//               <span className="w-1/6 text-center text-sm sm:text-base">Total</span>
//             </div>

//             {[1, 2, 3].map((item, index) => (
//               <div key={index} className="flex justify-between items-center text-white border-b border-gray-700 py-4">
//                 <div className="flex items-center w-3/6 pl-5">
//                   <img className="w-16 h-20 mr-4" src={getImage(`../assets/image/${data.image}`)} alt="Product" />
//                   <div>
//                     <p className="font-semibold text-sm sm:text-base">Once Upon a Time...</p>
//                     <span className="text-gray-400 text-xs sm:text-sm">Comedy/Drama</span>
//                   </div>
//                 </div>

//                 <div className="w-1/6 text-center text-sm sm:text-base">$50</div>
//                 <div className="w-1/6 text-center flex justify-center items-center">
//                   <button className="bg-gray-700 text-white px-2 py-1 rounded-l text-sm sm:text-base">-</button>
//                   <span className="px-4 text-sm sm:text-base">2</span>
//                   <button className="bg-gray-700 text-white px-2 py-1 rounded-r text-sm sm:text-base">+</button>
//                 </div>

//                 <div className="w-1/6 text-center text-sm sm:text-base">$100</div>
//                 <div>
//                   <RiDeleteBin6Line className="text-xl sm:text-2xl" />
//                 </div>
//               </div>
//             ))}
//           </div>

          
//           <div className="md:w-1/3 flex flex-col items-center mt-8 md:mt-0">
//             <div className="bg-gray-800 p-4 rounded-lg text-white w-full h-60 mb-4">
//               <h4 className="font-semibold py-4 text-center text-xl sm:text-2xl border-b">Order Summary</h4>
//               <div className="flex justify-between text-gray-400 mb-2 mt-4 text-sm sm:text-base">
//                 <span className="text-xl">Subtotal</span>
//                 <span className="text-xl">$300</span>
//               </div>
//               <div className="flex justify-between text-gray-400 mb-2 text-sm sm:text-base">
//                 <span className="text-xl">Shipping</span>
//                 <span className="text-green-500 text-xl">Free</span>
//               </div>
//               <div className="flex justify-between text-gray-400 font-semibold border-t border-gray-700 pt-2 text-sm sm:text-base">
//                 <span className="text-xl">Total</span>
//                 <span className="text-xl">$300</span>
//               </div>
//             </div>
//             <button className="w-full bg-green-500 py-3 mt-2 rounded text-white font-semibold text-sm sm:text-base">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartTableItem;









































// import { useState } from "react";
// import imageOne from '../assets/image/1.jpg'

// function CartTableItem() {
//   const [isOpen, setIsOpen] = useState(true);
//   const closePopup = () => setIsOpen(false);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white w-8/12 h-2/4 flex flex-col  shadow-lg rounded-lg overflow-hidden relative">
//         <div className="text-center my-6">
//           <h3 className="text-3xl">Your Task</h3>
//         </div>
//         <div className="flex w-7/12 justify-between items-center ml-5 border-b py-5">
//             <span className="text-xl">Product</span>
//             <ul className="flex px-5">
//                 <li className="ml-5 text-xl">Price</li>
//                 <li className="ml-5 text-xl">Quantity</li>
//                 <li className="ml-5 text-xl">Total</li>
//             </ul>
//         </div>
//         <div className="flex">
//         <div className="mt-5 p-3 flex w-7/12">
//             <img className="w-16 h-20" src={imageOne} alt="" />
//             <div><p>Once Upon a Time...</p>
//             <span>Comedy/Drama</span>
//             </div>
//             </div>
//             <div>
//             <ul className="flex">
//                 <li>-</li>
//                 <li>2</li>
//                 <li>+</li>
//             </ul>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartTableItem;





























