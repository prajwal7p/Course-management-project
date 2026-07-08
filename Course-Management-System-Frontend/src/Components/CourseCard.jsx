import React, { useContext } from "react";
import { AuthContext } from "./../context/Auth";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";


const CourseCard = ({ course }) => {
  let { user } = useContext(AuthContext);
const { addToCart } = useContext(CartContext);

  return (
    <div className="w-[24%] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={course?.c_image}
        alt={course?.c_name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {course?.c_name}
        </h3>

        <div className="flex justify-between items-center mb-3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            ₹{course?.c_fee}
          </span>

          <span className="text-yellow-500 font-semibold">
            ⭐ {course?.c_rating}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course?.c_desc}
        </p>

        <div className="border-t pt-3">
          <p className="font-medium text-gray-700">👨‍🏫 {course?.c_trainer}</p>
        </div>

        {user?.role == "admin" ? (
         <div className="flex gap-3 mt-4">
  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-white font-semibold shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300">
    <FaEdit />
    Update
  </button>

  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-500 py-2 text-white font-semibold shadow hover:bg-red-600 hover:scale-105 transition-all duration-300">
    <FaTrash />
    Delete
  </button>
</div>
        ) : (
          <button
    onClick={() => addToCart(course)}
    className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
>
    Add To Cart
</button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
