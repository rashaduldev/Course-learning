import React from 'react';

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
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="input input-bordered w-full max-w-xs"
                    />
                    <button className="btn btn-success ml-2">Join Now</button>
                </div>

                {/* YouTube Embed */}
                <div className="mt-10 flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dCr6bBq9S4Y?si=NXE_hBsDLODvKCzL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full max-w-3xl mx-auto shadow-lg"
                    ></iframe>
                </div>

                <p className="text-gray-500 mt-3">IMAGE NOT INCLUDED</p>
            </div>
        </div>
    );
};

export default HeroSection;
