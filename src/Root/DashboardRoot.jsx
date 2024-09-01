import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber";
import Sideber from "../Dashboard/Sideber";

const DashboardRoot = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col lg:flex-row lg:mx-[200px] pt-[74px]">
                <Sideber/>
                <div style={{ width: 'calc(100% - 306px)' }} className="my-10 lg:ml-4 lg:pl-6 ">
                 <Outlet/>
                </div>
            </div>
            
        </div>
    );
};

export default DashboardRoot;