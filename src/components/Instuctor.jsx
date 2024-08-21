const Instuctor = () => {
    return (
        <div className="lg:mx-36 lg:my-20">
           <div className=" bg-[#C8FACD] rounded-lg">
                <div className="flex justify-center p-20 gap-20">
                        <div className="flex flex-col py-10 px-10">
                            <p className="text-7xl font-bold leading-[70px]">Our <br /> Instructor</p>
                            <p className="py-6">
                            Our expert instructors bring real-world <br /> experience to diverse subjects, offering practical <br /> insights for all skill levels. Embark on your <br /> learning journey today and unlock your full <br /> potential with our dynamic online courses.
                                </p>
                        </div>
                        <div className="flex p-10">
                        <div className="flex flex-col lg:flex-row gap-10">
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