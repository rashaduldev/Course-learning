import { CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiChecks } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import Modal from "./Modal";


const sections = [
  {
    title: 'Getting Started',
    duration: '51m',
    lectures: 4,
    quiz:'Quiz question 1',
    items: [
      { type: 'video', title: "What's is Webflow?", duration: '07:31' },
      { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
      { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
      { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
      { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
      // { type: 'quiz', title: 'Quiz question 1', size: '5.3 MB' },
    ],
  },{
    title: 'Secret of Good Design',
    duration: '51m',
    lectures: 4,
    items: [
      { type: 'video', title: "What's is Webflow?", duration: '07:31' },
      { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
      { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
      { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
      { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
    ],
  },{
    title: 'Practice Design Like an Artist',
    duration: '51m',
    lectures: 4,
    items: [
      { type: 'video', title: "What's is Webflow?", duration: '07:31' },
      { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
      { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
      { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
      { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
    ],
  },{
    title: 'Web Development (webflow)',
    duration: '51m',
    lectures: 4,
    items: [
      { type: 'video', title: "What's is Webflow?", duration: '07:31' },
      { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
      { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
      { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
      { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
    ],
  },{
    title: 'Secrets of Making Money Freelancing',
    duration: '51m',
    lectures: 4,
    items: [
      { type: 'video', title: "What's is Webflow?", duration: '07:31' },
      { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
      { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
      { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
      { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
    ],
  },{
    title: 'Advanced',
    duration: '51m',
    lectures: 4,
    items: [
      { type: 'video', title: "What's is Webflow?", duration: '07:31' },
      { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
      { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
      { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
      { type: 'doc', title: 'Practice Project' },
    ],
  },

];

const CourseDetails = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row mx-5 md:mx-0">
      <div className="lg:w-[70%] w-full mr-6">
        {/* Iframe */}
        <iframe
          width="100%"
          height="322"
          src="https://www.youtube.com/embed/jVgYgN0zcWs?si=kczrPOhtf_cvl0zL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full"
        />
        {/* Course Info */}
        <div className="my-4">
          <h1 className="text-[24px] font-[700] leading-[36px] mb-2">
            Ultimate Digital Marketing
          </h1>
          <div className="flex items-center justify-between text-[16px] leading-[24px] w-[400]">
            <div className="flex items-center gap-2">
              <GoPeople />
              <h2 className="Secondery_Text_Colour">Tawheed Ahsan Romi</h2>
            </div>
            <div className="flex items-center gap-2 Secondery_Text_Colour">
              <h3>Share</h3>
              <p>
                <CiShare2 />
              </p>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="my-4">
          <h1 className="text-[15.14px] font-[700] leading-[15.14px] mb-[6px]">
            Description
          </h1>
          <div className="space-y-6 Secondery_Text_Colour text-3 font-[400] leading-[18px] font-sans">
            <p>
              Hi! I am Thomas Wayne, your React.js Instructor for this course. I
              am super happy to help you understand the core basics and advance
              topics of React.
            </p>
            <p>
              In this course, we will cover basic as well as advance topics, a
              full-one guide, that will help you understand React in-depth. This
              will be a 4 hour course divided in 8 chapters and 36 lessons that
              include articles, video lessons, and assignments to help you test
              yourself.
            </p>
            <p>Let’s dive in without any further delay.</p>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button className="btn hover:text-[#2563EB] hover:bg-[#EFF4FF] text-[#2563EB] bg-[#EFF4FF]">
              Prev
            </button>
            <button className="btn hover:text-[#2563EB] hover:bg-[#EFF4FF] text-[#2563EB] bg-[#EFF4FF]">
              Next
            </button>
          </div>
          <div>
            <button className="btn text-[#158036] bg-[#F0FDF4] hover:text-[#158036] hover:bg-[#F0FDF4]">
              Mark as Complete
            </button>
          </div>
        </div>
      </div>
      {/* Course Content */}
      <div className="lg:w-[30%] mt-10 lg:mt-0 w-full">
        <h1 className="mb-2">Courses Content</h1>
        <div className="mx-auto border rounded-md">
          {sections.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => toggleSection(index)}
                className="w-full items-center p-4 bg-white hover:bg-gray-50"
              >
                <div className="text-left">
                  <h2
                    className={
                      activeSection === index
                        ? "text-red-500"
                        : "text-[16px] text-[#212B36]"
                    }
                  >
                    <div className="flex items-center justify-between">
                      <p>{section.title}</p>
                      <p className="text-[16px]">
                        {activeSection === index ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </p>
                    </div>
                  </h2>
                </div>
              </button>
              {activeSection === index && (
                <ul className="bg-white border-t border-gray-200">
                  <span className="flex justify-around items-center gap-2 mt-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                          stroke="#564FFD"
                          strokeWidth="1.3"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M12.5 10L8.75 7.5V12.5L12.5 10Z"
                          stroke="#564FFD"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {section.lectures}
                      <span>lectures</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                          stroke="#FD8E1F"
                          strokeWidth="1.3"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M10 5.625V10H14.375"
                          stroke="#FD8E1F"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{section.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.83334 15.8333V13.3333M14.1667 15.8333V13.3333M2.5 10H17.5M6.66667 5.83333H13.3333C14.9792 5.83333 16.25 7.10416 16.25 8.75V10C16.25 10.1142 16.2396 10.2272 16.2194 10.3387L15.4722 14.325C15.3222 15.1062 14.6217 15.6667 13.8267 15.6667H6.17333C5.37833 15.6667 4.67778 15.1062 4.52778 14.325L3.78056 10.3387C3.76039 10.2272 3.75 10.1142 3.75 10V8.75C3.75 7.10416 5.02084 5.83333 6.66667 5.83333Z"
                          stroke="#00837F"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{section.quiz}</span>
                    </div>
                  </span>
                  <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
                  {/* List Items */}
                <div className="border-b pb-2">
                {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-between p-4 text-[#000]">
                      <div className="flex items-center gap-2">
                        <PiChecks />
                        <p className="text-[12px]">{item.title}</p>
                      </div>
                      <div className="text-[#667085] text-[12px]">
                        {item.type === "video" ? item.duration : item.size}
                      </div>
                    </li>
                  ))}
               
                    {/* Quiz Link */}
                    <button onClick={toggleModal} className="flex gap-4 items-center mt-3 ml-3">
                      <IoBagOutline/>
                    Quiz Question 01
                    </button>
                    </div>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
//   {
//     title: 'Getting Started',
//     duration: '51m',
//     lectures: 4,
//     quiz:'Quiz question 1',
//     items: [
//       { type: 'video', title: "What's is Webflow?", duration: '07:31' },
//       { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
//       { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
//       // { type: 'quiz', title: 'Quiz question 1', size: '5.3 MB' },
//     ],
//   },{
//     title: 'Secret of Good Design',
//     duration: '51m',
//     lectures: 4,
//     items: [
//       { type: 'video', title: "What's is Webflow?", duration: '07:31' },
//       { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
//       { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
//     ],
//   },{
//     title: 'Practice Design Like an Artist',
//     duration: '51m',
//     lectures: 4,
//     items: [
//       { type: 'video', title: "What's is Webflow?", duration: '07:31' },
//       { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
//       { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
//     ],
//   },{
//     title: 'Web Development (webflow)',
//     duration: '51m',
//     lectures: 4,
//     items: [
//       { type: 'video', title: "What's is Webflow?", duration: '07:31' },
//       { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
//       { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
//     ],
//   },{
//     title: 'Secrets of Making Money Freelancing',
//     duration: '51m',
//     lectures: 4,
//     items: [
//       { type: 'video', title: "What's is Webflow?", duration: '07:31' },
//       { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
//       { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
//     ],
//   },{
//     title: 'Advanced',
//     duration: '51m',
//     lectures: 4,
//     items: [
//       { type: 'video', title: "What's is Webflow?", duration: '07:31' },
//       { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
//       { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
//       { type: 'doc', title: 'Practice Project' },
//     ],
//   },

// ];