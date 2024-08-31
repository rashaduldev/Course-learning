import { BsBell } from "react-icons/bs";
import { CiSearch, CiSettings } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { PiBookOpenTextThin } from "react-icons/pi";
import { RiSlideshowView } from "react-icons/ri";
import { NavLink } from "react-router-dom"; // Import NavLink

const Dashboard = () => {
  const courses = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Marketing Course',
      category: 'Digital Marketing',
      author: 'Esther Howard',
      time: '5hr',
    }, {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Marketing Course',
      category: 'Digital Marketing',
      author: 'Esther Howard',
      time: '5hr',
    }, {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Marketing Course',
      category: 'Digital Marketing',
      author: 'Esther Howard',
      time: '5hr',
    }, {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Marketing Course',
      category: 'Digital Marketing',
      author: 'Esther Howard',
      time: '5hr',
    }, {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Marketing Course',
      category: 'Digital Marketing',
      author: 'Esther Howard',
      time: '5hr',
    }, {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Marketing Course',
      category: 'Digital Marketing',
      author: 'Esther Howard',
      time: '5hr',
    },
    // Add more course objects here
  ];

  return (
    <div className="flex h-screen lg:mx-[200px] pt-[74px] py-12">
      {/* Sidebar */}
      <aside className="w-[306px] bg-[#F4F6F8] py-12">
        <nav className="">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? 'bg-[#EAEEE1] text-black border-r-2 border-[#B6CD26]'
                  : 'hover:bg-[#EAEEE1] text-gray-600'
              }`
            }
          >
            <div className={`mr-3 ${isActive => isActive ? 'bg-blue-600' : 'bg-white'}`}>
            <GrHomeRounded className={`mr-3 ${isActive => isActive ? 'bg-blue-600' : 'bg-white'}`} />
            </div>
            <span>Dashboard</span>
          </NavLink>
          {/*  */}
          {/* <NavLink to="/das hboard">
            {({ isActive }) => (
                <div className={`mr-3 ${isActive ? '' : 'bg-white'}`}>
                <GrHomeRounded className={`mr-3 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>
            )}
            </NavLink> */}

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? 'bg-[#EAEEE1] text-black border-r-2 border-yellow-500'
                  : 'hover:bg-[#EAEEE1] text-gray-600'
              }`
            }
          >
            <PiBookOpenTextThin className={`mr-3 ${isActive => isActive ? 'text-blue-500' : ''}`} />
            <span>Courses</span>
          </NavLink>
          <NavLink
            to="/slides"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? 'bg-[#EAEEE1] text-black border-r-2 border-yellow-500'
                  : 'hover:bg-[#EAEEE1] text-gray-600'
              }`
            }
          >
            <RiSlideshowView className={`mr-3 ${isActive => isActive ? 'text-blue-500' : ''}`} />
            <span>Slides</span>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? 'bg-[#EAEEE1] text-black border-r-2 border-yellow-500'
                  : 'hover:bg-[#EAEEE1] text-gray-600'
              }`
            }
          >
            <CiSearch className={`mr-3 ${isActive => isActive ? 'text-blue-500' : ''}`} />
            <span>Search</span>
          </NavLink>
          <NavLink
            to="/reminders"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? 'bg-[#EAEEE1] text-black border-r-2 border-yellow-500'
                  : 'hover:bg-[#EAEEE1] text-gray-600'
              }`
            }
          >
            <BsBell className={`mr-3 ${isActive => isActive ? 'text-blue-500' : ''}`} />
            <span>Reminders</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] rounded-lg w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? 'bg-[#EAEEE1] text-black border-r-2 border-yellow-500'
                  : 'hover:bg-[#EAEEE1] text-gray-600'
              }`
            }
          >
            <CiSettings className={`mr-3 ${isActive => isActive ? 'text-blue-500' : ''}`} />
            <span>Settings</span>
          </NavLink>
        </nav>

        {/* Sidebar footer */}
        <div className="mt-10 px-6 py-10 mx-6 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold">Get Mobile Apps</h3>
          <p className="text-gray-600">Explore 100+ curated courses prepared for you.</p>
          <div className="space-y-2 mt-2">
            <img src="https://via.placeholder.com/50x20" alt="Google Play" className="h-10 w-full" />
            <img src="https://via.placeholder.com/50x20" alt="App Store" className="h-10 w-full" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-4 pl-6 my-10">
        <h1 className="text-[24px] font-bold Primary_Text_Colour mb-6">Dashboard</h1>
        
        {/* Overview Section */}
       <div className="my-6">
        <h3 className="mb-4 title_description">Overview</h3>
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
            <button className="title_description">View all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <span className="text-sm text-gray-600">{course.category}</span>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.author} • {course.time}</p>
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
