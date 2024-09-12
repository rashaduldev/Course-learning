const DashProfile = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row">
        {/* Profile Picture Section */}
       <div className="lg:mr-20 rounded-[8px]">
       <h2 className="text-2xl font-semibold text-gray-800 mb-10">My Profile</h2> 
        <div className="p-7 border">
          <div className="relative w-[280px] h-[280px] overflow-hidden border-2 border-gray-200">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white cursor-pointer">
              <input type="file" className="hidden" />
              Upload Photo
            </label>
          </div>
          <p className="text-gray-500 mt-4 text-sm text-center">
            Image size should be under 1MB and image ratio needs to be 1:1
          </p>
        </div>
       </div>

        {/* User Details Form */}
        <div className="w-full px-5 lg:px-0 mt-10 lg:mt-0">
          
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="text-gray-600 mb-2">Full name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Abul Hasan"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="abulhasan@gmail.com"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+880123456789"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2">Profession</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Student"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2">Bio-graphy</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your title, profession, or small biography"
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-[#C8E031] text-black px-6 py-3 rounded-lg hover:bg-[#C8E031] transition-colors duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
