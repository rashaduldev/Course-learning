

const Setting = () => {
    return (
        <div>
               {/* Button group */}
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 items-center mb-10">
          <button className="px-4 py-2 bg-[#A9BF1C] text-white mr-4">Password Setting</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Social Media</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Linked Accounts</button> 
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Notification</button>
      </div>
      {/* input */}
            <div>
            <div className="w-full">
          
          <form>
            <div className="grid grid-cols-1 gap-6 mx-5 lg:mx-0">
              <div>
                <label className="text-gray-600 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Confirm new Password"
                />
              </div>
             {/* Button */}
             {/*  <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-[#C8E031] text-black px-6 py-3 rounded-lg hover:bg-[#C8E031] transition-colors duration-300"
                >
                  Save Changes
                </button>
              </div> */}
            </div>
          </form>
        </div>
            </div>
        </div>
    );
};

export default Setting;