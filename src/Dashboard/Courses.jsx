import { CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

const Courses = () => {
    return (
        <div className="flex">
        <div className="lg:w-[70%] w-full mr-6">
            {/* Iframe */}
            <iframe 
                width="100%" 
                height="322" 
                src="https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full"
            ></iframe>
            {/*  */}
          <div className="my-4">
          <h1 className="text-[24px] font-[700] leading-[36px] mb-2">Ultimate Digital Marketing</h1>
          <div className="flex items-center justify-between text-[16px] leading-[24px] w-[400]">
            <div className="flex items-center gap-2">
            <GoPeople />
            <h2 className="Secondery_Text_Colour">Tawheed Ahsan Romi</h2>
            </div>
            <div className="flex items-center gap-2 Secondery_Text_Colour">
                <h3>Share</h3>
                <p><CiShare2 /></p>
            </div>
          </div>
          </div>
          {/* description */}
          <div className="my-4">
                <h1 className="text-[15.14px] font-[700] leading-[15.14px] mb-[6px]">Description</h1>
                <div className="space-y-6 Secondery_Text_Colour text-3 font-[400] leading-[18px] font-sans">
              <p>
              Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React.
              </p>
                <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.</p>
                <p>Lets start now with out getting any further late. lets dive in.</p>     
                </div><div className="space-y-6 Secondery_Text_Colour text-3 font-[400] leading-[18px] font-sans">
              <p>
              Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React.
              </p>
                <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.</p>
                <p>Lets start now with out getting any further late. lets dive in.</p>     
                </div>
          </div>
          {/* footer */}
          <div className="flex items-center justify-between">
               <div className="flex items-center gap-5">
                    <button className="btn hover:text-[#2563EB] hover:bg-[#EFF4FF] text-[#2563EB] bg-[#EFF4FF]">Prev</button>
                    <button className="btn hover:text-[#2563EB] hover:bg-[#EFF4FF] text-[#2563EB] bg-[#EFF4FF]">Next</button>
               </div>
               <div>
                    <button className="btn text-[#158036] bg-[#F0FDF4] hover:text-[#158036] hover:bg-[#F0FDF4]">Mark as Complete</button>
               </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full">
            <h1>Courses Content</h1>
        </div>
    </div>
    );
};

export default Courses;