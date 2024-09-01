import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

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
    <div   className="">
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
        
        {/* Overview Section */}
        <div className="my-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            <div className="lg:px-5 py-6 rounded-lg text-center lg:text-left bg-[#F4F6F8] space-y-6">
              <p className="primary_color text-[42px] leading-[42px] font-bold">06</p>
              <h2 className="text-xl font-bold leading-[30px] Primary_Text_Colour">Course in Progress</h2>
            </div>
            <div className="px-5 py-6 rounded-lg text-center lg:text-left bg-[#F4F6F8] space-y-6">
              <p className="primary_color text-[42px] leading-[42px] font-bold">03</p>
              <h2 className="text-xl font-bold leading-[30px] Primary_Text_Colour">Course Completed</h2>
            </div>
            <div className="px-5 py-6 rounded-lg text-center lg:text-left bg-[#F4F6F8] space-y-6">
              <p className="primary_color text-[42px] leading-[42px] font-bold">09</p>
              <h2 className="text-xl font-bold leading-[30px] Primary_Text_Colour">Certificate Achieved</h2>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <div className="flex mx-5 lg:mx-0 items-center justify-between mb-4">
            <h2 className="title_description">Continue Reading</h2>
            <button onClick={() => setShowAll(!showAll)} className="title_description">
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 h-auto">
            {(showAll ? courses : courses.slice(0, 6)).map((course, index) => (
              <div key={index} className="bg-[#F9FAFB] border border-[#E0E4E8] rounded-lg flex gap-[20px] h-auto p-5">
                <img src={course.img} alt={course.title} className="w-[177.63px] h-[100px] rounded-md" />
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
