import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(6);
useEffect(() => {
  // Fetch data when the component mounts
  const fetchCourses = async () => {
      try {
          const response = await fetch('/courcedata.json'); // Replace with your API URL
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setCourses(data);
      } catch (error) {
          console.error('Fetch error:', error);
      }
  };

  fetchCourses();
}, []);
console.log(courses.length);
  return (
    <div className="">
    {/* Main Content */}
    <main className="">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="text-[24px] font-bold Primary_Text_Colour mb-6">Dashboard</h1>
        <div className="relative">
            <input className="w-full p-1 pl-8 border border-[#637381] rounded focus:border-[#C8E031] focus:outline-none focus:ring-2 focus:ring-[#C8E031]" 
            placeholder="Search"
            type="text" />
            <CiSearch className="absolute top-[5px] left-1 w-[24px] h-[24px]" />
        </div>
      </div>

      {/* Button group */}
      <div className="flex flex-col lg:flex-row mt-10 md:mt-0 space-y-3 md:space-y-0 items-center mb-10">
          <button className="px-4 py-2 bg-[#A9BF1C] text-white mr-4">Enrolled Course (24)</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Active Course (05)</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Completed Course (04)</button>
      </div>

      {/* Courses Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mx-5 lg:mx-0">
          {courses.slice(0, visibleCourses).map((course, index) => (
           <NavLink to={`/dashboard/courses/${course.id}`}  key={index}>
             <div key={course.id}
                        // onClick={() => handleCardClick(course.id)}
                        className="rounded-[8px] bg-base-100 shadow cursor-pointer mt-10">
                            <figure>
                                <img src={course.img} alt={course.title} className="h-48 w-full object-cover rounded-t-[8px]" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.title}</h2>
                                <p className="font-bold Secondery_Text_Colour">Mentor: {course.mentor}</p>
                            </div>
                        </div>
           </NavLink>
          ))}
        </div>
      </div>
    </main>
  </div>
  );
};

export default Courses;