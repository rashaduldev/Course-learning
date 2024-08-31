import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-10 py-20  rounded-lg w-[448px]  relative">
        <button onClick={onClose} className="Secondery_Text_Colour absolute top-5 flex items-center text-[12px] font-[400] leading-[18px] right-10">Close <span className="text-[12px]"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M13.4097 11.9991L17.7062 7.71268C18.0979 7.32088 18.0979 6.68565 17.7062 6.29385C17.3144 5.90205 16.6791 5.90205 16.2873 6.29385L12.0009 10.5903L7.71439 6.29385C7.32259 5.90205 6.68735 5.90205 6.29555 6.29385C5.90376 6.68565 5.90376 7.32088 6.29555 7.71268L10.592 11.9991L6.29555 16.2856C6.1064 16.4732 6 16.7286 6 16.995C6 17.2614 6.1064 17.5168 6.29555 17.7044C6.48317 17.8936 6.73855 18 7.00497 18C7.27139 18 7.52677 17.8936 7.71439 17.7044L12.0009 13.408L16.2873 17.7044C16.4749 17.8936 16.7303 18 16.9967 18C17.2632 18 17.5185 17.8936 17.7062 17.7044C17.8953 17.5168 18.0017 17.2614 18.0017 16.995C18.0017 16.7286 17.8953 16.4732 17.7062 16.2856L13.4097 11.9991Z" fill="#3C3C3C"/>
        </svg></span></button>

        <div className="flex items-center font-[800] justify-center mb-10">
                <svg xmlns="http://www.w3.org/2000/svg"  width="74" height="46" viewBox="0 0 75 47" fill="none">
                <path d="M14.9935 46.5147L0.151367 0L30.3304 17.8903L74.8568 0L14.9935 46.5147Z" fill="#A9BF1C"/>
                </svg>
            <p className="text-[33.829px] Primary_Text_Colour">Course</p>
        </div>
        <h2 className="text-center text-[24px] font-[700] leading-[36px] mb-[53px]">User login</h2>

        <form>
            <div className="mb-4">
                <input
                type="text"
                placeholder="User Name/ Email"
                className="w-full p-2 border border-[#637381] rounded focus:border-[#C8E031] focus:outline-none focus:ring-2 focus:ring-[#C8E031]"
                />
            </div>
            <div className="mb-4">
                <input
                type="password"
                placeholder="Password*"
                className="w-full p-2 border border-[#637381] rounded focus:border-[#C8E031] focus:outline-none focus:ring-2 focus:ring-[#C8E031]"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <a href="#" className="text-sm text-gray-500">Forgot password?</a>
                <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-500">Remember me</label>
                </div>
            </div>
           <Link to={'/dashboard'}>
              <button type="submit" className="w-full p-2 bg-[#CBE333] rounded text-black">
                    Login
                </button>
            </Link>
            </form>
      </div>
    </div>
  );
};

export default LoginModal;
