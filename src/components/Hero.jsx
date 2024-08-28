import { HiOutlinePlusSmall } from "react-icons/hi2";

const HeroSection = () => {
    return (
        <div>
            {/* Section with background image */}
            <div className="py-20 px-4 pt-32 bg-cover bg-center z-10" style={{ backgroundImage: `url('https://i.ibb.co/gtvDkk7/Hero-BG.png')` }}>
            <div className="container mx-auto text-center px-4 py-12">
                <div>
                    <h1 className="header_text">
                        Unlock the potential of the internet to <br />
                        realize your <span className="text-[#8cc63f]">financial dreams</span>
                    </h1>
                    <p className="text-lg md:text-xl Secondery_Text_Colour mt-4">
                        One payment, get unlimited course & lifetime access
                    </p>

                    {/* Email Input and Join Now Button */}
                    <div className="mt-6 flex justify-center z-10">
                        <div className="flex items-center relative">
                            <input type="text" className="w-96 h-14 p-3 rounded-lg border-[1px] border-gray-400" placeholder="Email address" />
                            <button className="px-4 py-1 btn button_colour flex items-center gap-2 absolute right-[5px]">
                                <HiOutlinePlusSmall className="" />
                                <p className="font-bold">Join Now</p>
                            </button>
                        </div>
                    </div>
                </div>
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
                />
            </div>
        </div>
    );
};

export default HeroSection;
