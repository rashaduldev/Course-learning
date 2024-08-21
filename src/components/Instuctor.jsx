const Instuctor = () => {
    return (
        <div className="lg:mx-52  lg:my-20">
           <div className=" bg-[#C8FACD] rounded-lg">
                <div className="flex flex-col md:flex-col lg:flex-row justify-center p-20 gap-20">
                        <div className="flex flex-col lg:py-10 lg:px-10">
                            <p className="text-3xl lg:text-7xl font-bold lg:leading-[70px] lg:text-left text-center">Our <br /> Instructor</p>
                            <p className="lg:py-6 pt-5 lg:pt-10">
                            Our expert instructors bring real-world  experience to diverse subjects, offering practical  insights for all skill levels. Embark on your learning journey today and unlock your full potential with our dynamic online courses.
                                </p>
                        </div>
                        <div className="flex p-10">
                        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
                            <div className="mt-4">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl bg-white p-3" />
                            <p className="font-bold mt-3">John Smith</p>
                            <p>Mentor: Digital Merketer</p>
                            </div>
                            <div className="">
                                <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-lg rounded-lg shadow-2xl bg-white p-3" />
                                <p className="font-bold mt-3">Richard Rio</p>
                                <p>Mentor: Digital Merketer</p>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
        </div>
    );
};

export default Instuctor;