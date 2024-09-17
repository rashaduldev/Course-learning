import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  const questions = [
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

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded shadow-lg w-full max-w-[842px] max-h-[90%] overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-100 px-6 py-4 border-gray-300 border-b-2 fixed top-0 w-full max-w-[842px] z-10 my-10 rounded">
          <div>
            <h2 className="text-xl font-bold leading-[30px] mb-1">
              Module 1 Challenge: The basics of user experience design
            </h2>
            <h3 className="text-[16px] font-[600] leading-[24px]">Graded Quiz. • 1h 15m</h3>
          </div>
          <button onClick={toggleModal} className="flex items-center gap-2">
            Close
            <IoMdClose />
          </button>
        </div>

        {/* Add padding to account for fixed header */}
        <div className="px-6 py-20 mt-5"> {/* mt-5 added for margin-top */}
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center text-[16px] justify-between">
                <p>{index + 1}. {question.question}</p>
                <p className="p-3 bg-[#D6F2E4] rounded-full">1 point</p>
              </div>
              <ul className="space-y-2 mt-2">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <label className="flex items-center">
                      <input type="radio" name={`q${index + 1}`} className="mr-2" />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex justify-end">
          <button className="button_colour rounded" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;