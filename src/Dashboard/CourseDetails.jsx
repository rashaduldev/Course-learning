import { CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiChecks } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

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

const quizQuestions = [
  {
    id: 1,
    question: "Which of the following terms is how a person interacts with or experiences a product?",
    options: ["Interaction Design", "Information Architecture", "Cognitive Load"],
  },
  {
    id: 2,
    question: "Which principle is crucial for creating an intuitive user interface?",
    options: ["Aesthetic Usability", "Fitts' Law", "User Flow"],
  },
  {
    id: 3,
    question: "What is the goal of usability testing?",
    options: [
      "Determine how easy the design is to use",
      "Measure aesthetic appeal",
      "Evaluate the brand's market presence",
    ],
  },
  {
    id: 4,
    question: "Which design element affects the speed at which users can access features?",
    options: ["Fitts' Law", "Color Theory", "Visual Hierarchy"],
  },
  {
    id: 5,
    question: "What does 'UX' stand for?",
    options: ["User Experience", "Universal Experience", "User Exposure"],
  },
  {
    id: 6,
    question: "Which of the following improves accessibility in design?",
    options: [
      "Using contrast for text and background",
      "Minimal spacing between elements",
      "Complex animations",
    ],
  },
  {
    id: 7,
    question: "What is the first step in the design thinking process?",
    options: ["Empathize", "Prototype", "Test"],
  },
  {
    id: 8,
    question: "Which tool is commonly used for creating wireframes?",
    options: ["Figma", "React", "Photoshop"],
  },
  {
    id: 9,
    question: "Which term describes the clarity and readability of text on a screen?",
    options: ["Typography", "Legibility", "Kerning"],
  },
  {
    id: 10,
    question: "Which of the following is a key principle of responsive design?",
    options: [
      "Design adapts to various screen sizes",
      "Using fixed-width layouts",
      "Avoiding mobile-friendly features",
    ],
  },
];

const CourseDetails = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
    setShowQuiz(false); // Close quiz if section is toggled
  };

  const handleQuizClick = () => {
    setShowQuiz(true); // Show quiz when quiz button is clicked
  };

  const closeQuiz = () => {
    setShowQuiz(false); // Close quiz when clicking the close button
  };

  return (
    <div className="flex flex-col lg:flex-row mx-5 md:mx-0">
      {/* Main Content */}
      <div className="lg:w-[70%] w-full mr-6">
        {showQuiz ? (
          <div className="relative bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Quiz: UX Design Principles</h2>
              <button onClick={closeQuiz} className="text-gray-500 hover:text-black">
                <IoMdClose size={24} />
              </button>
            </div>

            <ul className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <li key={q.id} className="text-left">
                  <h3 className="text-lg font-medium">
                    {idx + 1}. {q.question}
                  </h3>
                  <ul className="ml-5 space-y-2">
                    {q.options.map((option, optIdx) => (
                      <li key={optIdx} className="flex items-center gap-2">
                        <input type="radio" name={`question-${q.id}`} id={`question-${q.id}-option-${optIdx}`} />
                        <label htmlFor={`question-${q.id}-option-${optIdx}`} className="text-gray-800">
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="mt-5">
          <button className="button_colour rounded" type="submit">Submit</button>
          </div>
          </div>
        ) : (
          <>
            {/* Iframe and Course Info */}
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
            <div className="my-4">
              <h1 className="text-[24px] font-[700] leading-[36px] mb-2">Ultimate Digital Marketing</h1>
              <div className="flex items-center justify-between text-[16px] leading-[24px]">
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
            <div className="my-4">
              <h1 className="text-[15.14px] font-[700] leading-[15.14px] mb-[6px]">Description</h1>
              <div className="space-y-6 Secondery_Text_Colour text-3 font-[400] leading-[18px] font-sans">
                <p>Hi! I am Thomas Wayne, your React.js Instructor for this course...</p>
                <p>In this course, we will cover basic as well as advanced topics...</p>
                <p>Let’s dive in without any further delay.</p>
              </div>
            </div>
          </>
        )}
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
                  <div className="flex justify-around items-center gap-2 mt-3">
                    <div className="flex items-center gap-1">
                      <span>{section.lectures} lectures</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{section.duration}</span>
                    </div>
                  </div>

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
                    <button
                      onClick={handleQuizClick}
                      className="flex gap-4 items-center mt-3 ml-3"
                    >
                      <IoBagOutline />
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
