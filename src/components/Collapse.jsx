import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const sections = [
    {
      title: 'Getting Started',
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
        { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
      ],
    },

  ];
const Collapse = () => {
    const [activeSection, setActiveSection] = useState(null);
    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
      };
    return (
        <div className="mx-auto border rounded-md">
           {sections.map((section, index) => (
            <div key={index} className="">
            <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50"
            >
                <div className="text-left">
                <h2 className={activeSection === index ? 'text-red-500' : 'text-[16px] text-[#212B36]'}>
                <div className='flex items-center gap-2'>
                <p className='text-[16px]'>
                    {activeSection === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </p>
                <p >
                    {section.title}
                </p>
                </div>
                </h2>
                </div>
                <span className='flex items-center gap-2'>
                    {/* {activeSection === index ? '-' : '+'} */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#564FFD" strokeWidth="1.3" strokeMiterlimit="10"/>
                    <path d="M12.5 10L8.75 7.5V12.5L12.5 10Z" stroke="#564FFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {section.lectures} 
                    <span>lectures</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#FD8E1F" strokeWidth="1.3" strokeMiterlimit="10"/>
                    <path d="M10 5.625V10H14.375" stroke="#FD8E1F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{section.duration}</span>
                </span>
            </button>
            {activeSection === index && (
                <ul className="bg-white border-t border-gray-200">
                {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="p-4 flex justify-between">
                    <span>{item.title}</span>
                    {item.type === 'video' && <span>{item.duration}</span>}
                    {item.type === 'doc' && <span>{item.size}</span>}
                    </li>
                ))}
                </ul>
            )}
            </div>
            ))}
        </div>
    );
};

export default Collapse;