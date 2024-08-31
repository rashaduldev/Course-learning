import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber";

const DashboardRoot = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default DashboardRoot;