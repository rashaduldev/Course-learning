import { HiOutlinePlusSmall } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div 
    style={{ boxShadow: "0px 1px 36px 0px rgba(0, 0, 0, 0.10)" }}
    className="py-3 shadow-5xl bg-[#FFFFFF] shadow-2xl fixed w-full">
      <div className="flex justify-between items-center px-4 lg:px-[200px] bg-base-100">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
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
          </div>
        </div>

        {/* Logo */}
        <a className="text-xl font-bold w-[136px] h-[33px] lg:order-none order-1" href="/">
          <img src="/src/assets/Logo.png" alt="logo" />
        </a>
        {/* <a className="text-xl font-bold lg:order-none order-1">Cource</a> */}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5">
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

          <button className="px-4 py-1 btn bg-[#B6CD26] flex items-center gap-2">
            <HiOutlinePlusSmall className="text-black" />
            <p className="font-bold text-black">Join Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
