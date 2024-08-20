import { HiOutlinePlusSmall } from "react-icons/hi2";

const Navber = () => {
    return (
        
        <div className="mt-3">
          <div className="flex justify-around bg-base-100">
            <div className="flex items-center">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Support</a></li>
                    <li><a>Login</a></li>
                </ul>
                </div>
                <a className="text-xl font-bold">Cource</a>
            </div>
            <div className="hidden lg:flex gap-5">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                <li>
                    <details>
                    <summary>Products</summary>
                    <ul className="p-2">
                        <li><a>product 1</a></li>
                        <li><a>product 2</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Support</a></li>
                <li><a>Login</a></li>
                </ul>

                <button className="px-4 py-1 btn bg-[#B6CD26]"> <p className="font-bold text-black"><HiOutlinePlusSmall /></p>Join Now</button>
            </div>
            </div>
        </div>
    );
};

export default Navber;