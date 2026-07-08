import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as randomId } from "uuid";
const AddCourse = () => {
  let navigate = useNavigate();
  let [courseData, setCourseData] = useState({
    c_name: "",
    c_duration: "",
    c_fee: 0,
    c_trainer: "",
    c_desc: "",
    c_image: "",
  });

  let { c_name, c_desc, c_duration, c_trainer, c_image, c_fee } = courseData;

  let handleChange = e => {
    let { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    let allData = { ...courseData, id: randomId() };
    console.log(allData);
    let res = await axios.post("http://localhost:5000/courses", allData);
    console.log(res);
    if (res.status == 201) {
      toast.success("Course Created Successfully");
      navigate("/");
    } else {
      toast.error("Not able to add the course");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Name
            </label>
            <input
              onChange={handleChange}
              value={c_name}
              name="c_name"
              type="text"
              placeholder="Enter course name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Duration
            </label>
            <input
              onChange={handleChange}
              value={c_duration}
              name="c_duration"
              type="text"
              placeholder="e.g. 3 Months"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Fee
            </label>
            <input
              onChange={handleChange}
              type="text"
              value={c_fee}
              name="c_fee"
              placeholder="Enter fee"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Image URL
            </label>
            <input
              onChange={handleChange}
              value={c_image}
              name="c_image"
              type="text"
              placeholder="Paste image URL"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Description
            </label>
            <textarea
              rows="4"
              onChange={handleChange}
              value={c_desc}
              name="c_desc"
              placeholder="Enter course description"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Trainer
            </label>
            <input
              onChange={handleChange}
              value={c_trainer}
              name="c_trainer"
              type="text"
              placeholder="Trainer name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
