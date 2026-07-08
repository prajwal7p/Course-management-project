import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { CartContext } from "../../context/CartContext";

const NavLinks = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const navClass = ({ isActive }) =>
    `relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
    }`;

  return (
    <div className="flex items-center gap-4">
      {/* Courses */}
      <NavLink to="/" className={navClass}>
        Courses
      </NavLink>

      {/* Admin */}
      {user?.role === "admin" && (
        <NavLink to="/add-course" className={navClass}>
          Add Course
        </NavLink>
      )}

      {/* User Cart */}
      {user?.role === "user" && (
        <NavLink to="/cart" className={navClass}>
          🛒 Cart

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cart.length}
            </span>
          )}
        </NavLink>
      )}

      {/* Login / Logout */}
      {user ? (
        <>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-sm"
          >
            Logout
          </button>

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
            {user.username.charAt(0).toUpperCase()}
          </div>
        </>
      ) : (
        <>
          <NavLink to="/login" className={navClass}>
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md"
          >
            Signup
          </NavLink>
        </>
      )}
    </div>
  );
};

export default NavLinks;