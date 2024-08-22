import { HiOutlinePlusSmall } from "react-icons/hi2";


const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#CBE33366] via-white to-[#14AE8980] py-20 px-4">
            <div className="container mx-auto text-center px-4 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Unlock the potential of the internet to <br /> 
                    realize your <span className="text-[#8cc63f]">financial dreams</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-4">
                    One payment, get unlimited course & lifetime access
                </p>

                {/* Email Input and Join Now Button */}
                <div className="mt-6 flex justify-center">
                <div className="flex items-center relative">
                    <input type="text" className="w-96 h-14 p-3 rounded-lg border-[1px] border-gray-400" placeholder="Email address" />
                    {/* <button className="p-[6px] rounded-lg bg-black text-white absolute right-[1px] px-5">Sibscribe</button> */}
                    <button className="px-4 py-1 btn bg-[#B6CD26] flex items-center gap-2 absolute right-[5px]">
                        <HiOutlinePlusSmall className="text-black" />
                        <p className="font-bold text-black">Join Now</p>
                    </button>
                </div>
                </div>

                {/* YouTube Embed */}
                <div className="mt-10 flex justify-center">
                    <iframe
                        width="560"
                        height="450"
                        src="https://www.youtube.com/embed/dCr6bBq9S4Y?si=NXE_hBsDLODvKCzL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full max-w-4xl mx-auto shadow-lg rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
