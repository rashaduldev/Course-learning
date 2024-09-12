import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber";
import Sideber from "../Dashboard/Sideber";

const DashboardRoot = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col lg:flex-row lg:mx-[200px] pt-[74px]">
                <Sideber />
                <div className="my-10 lg:ml-4 lg:pl-6 w-full lg:w-[calc(100%-306px)]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;
