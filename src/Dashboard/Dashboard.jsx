import { useState, useEffect } from "react";
import { BsBell } from "react-icons/bs";
import { CiSearch, CiSettings } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { PiBookOpenTextThin } from "react-icons/pi";
import { RiSlideshowView } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [courses, setCourses] = useState([]); 
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchCourses = async () => {
      try {
        const response = await fetch("courcedata.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex h-screen lg:mx-[200px] pt-[74px]">
      {/* Sidebar */}
      <aside className="w-[306px] bg-[#F4F6F8] py-10 my-10">
        <nav>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-[#B6CD26]"
                  : "hover:bg-[#EAEEE1] text-gray-600"
              }`
            }
          >
            <GrHomeRounded className="mr-3" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-yellow-500"
                  : "hover:bg-[#EAEEE1] text-gray-600"
              }`
            }
          >
            <PiBookOpenTextThin className="mr-3" />
            <span>Courses</span>
          </NavLink>

          <NavLink
            to="/slides"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-yellow-500"
                  : "hover:bg-[#EAEEE1] text-gray-600"
              }`
            }
          >
            <RiSlideshowView className="mr-3" />
            <span>Slides</span>
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-yellow-500"
                  : "hover:bg-[#EAEEE1] text-gray-600"
              }`
            }
          >
            <CiSearch className="mr-3" />
            <span>Search</span>
          </NavLink>

          <NavLink
            to="/reminders"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-yellow-500"
                  : "hover:bg-[#EAEEE1] text-gray-600"
              }`
            }
          >
            <BsBell className="mr-3" />
            <span>Reminders</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-yellow-500"
                  : "hover:bg-[#EAEEE1] text-gray-600"
              }`
            }
          >
            <CiSettings className="mr-3" />
            <span>Settings</span>
          </NavLink>
        </nav>

        {/* Sidebar footer */}
        <div className="mt-10 px-6 py-10 mx-6 bg-green-50 rounded-lg text-center">
          <h3 className="text-[22px] font-[700] leading-[22px] mb-3">Get Mobile Apps</h3>
          <p className="Secondery_Text_Colour mb-6 text-[16px] font-[400] leading-[24px]">Explore 100+ curated courses prepared for you.</p>
          <div className="space-y-2 mt-2">
            <img src="https://i.ibb.co/CM1C9Kt/google-play.png" alt="Google Play" className="h-10 w-full mb-[21px]" />
            <img src="https://i.ibb.co/cFW91Qc/app-store.png" alt="App Store" className="h-10 w-full" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-4 pl-6 my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-bold Primary_Text_Colour mb-6">Dashboard</h1>
          <div className="relative">
              <input className="w-full p-1 pl-8 border border-[#637381] rounded focus:border-[#C8E031] focus:outline-none focus:ring-2 focus:ring-[#C8E031]" 
              placeholder="Search"
              type="text" />
              <CiSearch className="absolute top-[5px] left-1 w-[24px] h-[24px]" />
          </div>
        </div>
        
        {/* Overview Section */}
        <div className="my-6">
          <div className="grid grid-cols-3 gap-5 mb-6">
            <div className="px-5 py-6 rounded-lg text-center lg:text-left bg-[#F4F6F8] space-y-6">
              <p className="primary_color text-[42px] leading-[42px] font-bold">06</p>
              <h2 className="text-xl font-bold leading-[30px] Secondery_Text_Colour">Course in Progress</h2>
            </div>
            <div className="px-5 py-6 rounded-lg text-center lg:text-left bg-[#F4F6F8] space-y-6">
              <p className="primary_color text-[42px] leading-[42px] font-bold">03</p>
              <h2 className="text-xl font-bold leading-[30px] Secondery_Text_Colour">Course Completed</h2>
            </div>
            <div className="px-5 py-6 rounded-lg text-center lg:text-left bg-[#F4F6F8] space-y-6">
              <p className="primary_color text-[42px] leading-[42px] font-bold">09</p>
              <h2 className="text-xl font-bold leading-[30px] Secondery_Text_Colour">Certificate Achieved</h2>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="title_description">Continue Reading</h2>
            <button onClick={() => setShowAll(!showAll)} className="title_description">
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 h-auto">
            {(showAll ? courses : courses.slice(0, 6)).map((course, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-lg flex gap-[20px] h-auto p-5">
                <img src={course.img} alt={course.title} className="w-[177.63px] h-[100px] rounded-md bg-red-500" />
                <div className="">
                
                  <button className="text-[12px] w-[400] leading-[18px] bg-[#DFE3E8] rounded py-1 px-2">{course.title}</button>
                  <h1 className="mt-3 mb-2 text-[16px] w-[600] leading-[24px] text-[#3D3D3D]">{course.category}</h1>
                  <div className="flex items-center gap-5 Secondery_Text_Colour">
                    <p className="text-sm">{course.mentor}</p>
                    <p>{course.time}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
