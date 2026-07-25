import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api, { getApiErrorMessage } from "../api/client";
import { AuthContext } from "../context/Auth";
const Login = () => {
  let { login } = useContext(AuthContext)
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
     role:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.get("/users", { params: { email, password } });

      if (res.data.length > 0) {
        login(res.data[0]);
        toast.success("Login Successfull");
        navigate("/");
      } else {
        toast.error("User Not found");
      }
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
    

    // Reset form
    setFormData({
      email: "",
      password: "",
      role:''
    });
  };

  const { email, password } = formData;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>


        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
          />
        </div>

         <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Role
          </label>
          Admin
          <input
            type="radio"
            name="role"
            value="admin"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
          />
          User
           <input
            type="radio"
            name="role"
            value="user"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
          />
        </div>



        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
