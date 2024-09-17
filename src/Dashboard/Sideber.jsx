import { CiSearch, CiSettings } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { PiBookOpenTextThin } from "react-icons/pi";
import { RiSlideshowView } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="lg:w-[306px] bg-[#F4F6F8] py-10 my-10 h-screen">
      <nav>
        {[
          { to: "/dashboard", icon: <GrHomeRounded />, label: "Dashboard" },
          { to: "/dashboard/courses", icon: <PiBookOpenTextThin />, label: "Courses" },
          { to: "/dashboard/my-level", icon: <RiSlideshowView />, label: "My Level" },
          { to: "/dashboard/profile", icon: <CiSearch />, label: "Profile" },
          { to: "/dashboard/settings", icon: <CiSettings />, label: "Settings" },
          { to: "/login", icon: <IoIosLogOut />, label: "Log Out" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center text-[16px] leading-[24px] p-2 font-[400] w-full pl-10 transition-colors duration-200 py-5 ${
                isActive
                  ? "bg-[#EAEEE1] text-black border-r-2 border-[#B6CD26]"
                  : "hover:bg-[#EAEEE1] text-gray-600"  
              }`
            }
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Sidebar footer */}
      <div className="mt-10 px-6 py-10 mx-6 bg-green-50 rounded-lg text-center">
        <h3 className="text-[22px] font-[700] leading-[22px] mb-3">Get Mobile Apps</h3>
        <p className="Secondery_Text_Colour mb-6 text-[16px] font-[400] leading-[24px]">
          Explore 100+ curated courses prepared for you.
        </p>
        <div className="space-y-2 mt-2">
          <img src="https://i.ibb.co/CM1C9Kt/google-play.png" alt="Google Play" className="h-10 w-full mb-[21px]" />
          <img src="https://i.ibb.co/cFW91Qc/app-store.png" alt="App Store" className="h-10 w-full" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
