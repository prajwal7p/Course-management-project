import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../Components/CourseCard";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  const getAllCourses = async () => {
    const res = await axios.get("http://localhost:5000/courses");
    setAllCourses(res.data);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Our Courses
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {allCourses?.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
