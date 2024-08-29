import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import LoginModal from "../Pages/LoginModal/LoginModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      style={{ boxShadow: "0px 1px 36px 0px rgba(0, 0, 0, 0.10)" }}
      className="py-3 shadow-5xl bg-[#FFFFFF] shadow-2xl fixed w-full z-50"
    >
      <div className="flex justify-between flex-row-reverse lg:flex-row items-center px-4 lg:px-[200px] bg-base-100 z-50">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <div className="dropdown flex flex-row-reverse">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-[60px]"
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
              <li><a onClick={toggleModal}>Login</a></li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <a className="text-xl font-bold w-[136px] h-[33px] lg:order-none order-1" href="/">
          <img src="https://i.ibb.co/w4Zrp1K/Logo.png" alt="logo" />
        </a>

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
            <li><a onClick={toggleModal}>Login</a></li>
          </ul>

          <button className="px-4 py-1 btn button_colour flex items-center gap-2">
            <HiOutlinePlusSmall className="" />
            <p className="">Join Now</p>
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <LoginModal onClose={toggleModal} />
      )}
    </div>
  );
};

export default Navbar;
