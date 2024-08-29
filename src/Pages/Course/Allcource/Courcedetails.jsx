/* eslint-disable react/no-unescaped-entities */
// CourseDetail.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { ImWhatsapp } from 'react-icons/im';
import { HiOutlinePlusSmall } from 'react-icons/hi2';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaStar } from 'react-icons/fa';

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

  const ratings = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 21 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: '<1' },
  ];

  const reviews = [
    {
      name: 'Guy Hawkins',
      time: '1 week ago',
      comment:
        'I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.',
    },
    {
      name: 'Dianne Russell',
      time: '51 mins ago',
      comment:
        'This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako!! Highly recommend this course! Take the next step.',
    },
    {
      name: 'Bessie Cooper',
      time: '6 hours ago',
      comment:
        'Webflow course was good, it coves design secrets, and to build responsive web pages, blog, and some more tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako.',
    },
  ];

const Courcedetails = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        // Fetch specific course details based on courseId
        const fetchCourseDetail = async () => {
            try {
                const response = await fetch('/courcedata.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json(); // Correctly parse the JSON data
                const foundCourse = data.find((c) => c.id === parseInt(courseId, 10)); // Correctly find the course by ID
                setCourse(foundCourse);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchCourseDetail();
    }, [courseId]);

   

    const toggleSection = (index) => {
      setActiveSection(activeSection === index ? null : index);
    };
    

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <div 
            className=' pt-32 lg:mx-[200px] flex flex-col lg:flex-row gap-10'>
                <div className='lg:w-[70%]'>
                         {/* Title and Description Section */}
                        <div className="flex flex-col lg:flex-row justify-between items-start">
                                <div className="lg:flex-1 w-full">
                                    <h1 className="text-center lg:text-left md:text-center lg:text-[32px] lg:leading-[48px] font-bold mb-2 Primary_Text_Colour">
                                        Complete Website Responsive Design: from Figma to Webflow to Website Design
                                    </h1>
                                    <p className="text-center lg:text-left md:text-center text-[16px] leading-[24px] mb-4 Secondery_Text_Colour">
                                        3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.
                                    </p>
                                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center lg:space-x-3 mb-4 mx-6 lg:mx-0">
                                    <div className='flex items-center gap-3 my-5 '>
                                    <img
                                            src="https://via.placeholder.com/40"
                                            alt="Creator"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                        <p>Created by:</p>
                                        <span className="text-gray-800 font-medium">Dianne Russell</span>
                                        <span className="text-gray-800 font-medium">+ Kristin Watson</span>
                                        </div>
                                    </div>
                                    <div className='lg:pr-7 flex items-center gap-2'>
                                        <span className="text-yellow-500 font-bold text-xl">★★★★ <span className='font-bold Primary_Text_Colour'>4.8</span></span>
                                        <span className="text-gray-600">(4,444 Ratings)</span>
                                    </div>
                                    </div>
                                </div>
                        </div>

                         {/* Image and Course Info Section */}
                         <div className="flex flex-col lg:flex-row mt-6">
                            <div className="lg:w-full pr-6">
                                {/* <img
                                    src="https://via.placeholder.com/600x300"
                                    alt="Course"
                                    className="rounded-lg w-full h-auto"
                                /> */}
                             <iframe className='w-full h-[492px]' width="0" height="0" src="https://www.youtube.com/embed/MkcfB7S4fq0?si=_W6yMmRzvGVc3WPx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
                            </div>
                        </div>

                        {/*  tab part  */}
                        <div className=" mx-auto p-4">
                            {/* Tabs Section */}
                            <div className="flex justify-around border-b mb-4">
                                <button className="px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600">Overview</button>
                                <button className="px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600">Curriculum</button>
                                <button className="px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600">Instructor</button>
                                <button className="px-4 py-2 text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600">Review</button>
                            </div>

                            {/* Description Section */}
                            <div className="mb-6">
                                <h2 className="text-[24px] font-[600] leading-[32px] mb-2">Description</h2>
                               <p className='description'>
                               It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.

                                <p className='mt-5 description'>
                                I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated. Like most subjects taught in the universities. But I don't like complicated. I like easy. I like life hacks. I like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. I'm an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional. That's how I'm going to teach you Web Design. So you're not demotivated on your way with needless complexity. So you enjoy the process because it's simple and fun. So you can become a Freelance Web Designer in no time.
                                </p>
                               </p>
                            </div>

                            {/* Learning Outcomes Section */}
                            <div className="bg-green-50 p-6 rounded-md mb-6">
                                <h3 className="text-[24px] font-[700] leading-[36px] mb-4">What you will learn in this course</h3>
                                <ul className="list-none grid grid-cols-2 gap-3 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-white bg-green-500 rounded-full p-[1px]"><IoCheckmarkOutline /></span>
                                    <p className="ml-2 Secondery_Text_Colour text-[14px] font-[400] leading-[22px]">You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb, and Microsoft.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white bg-green-500 rounded-full p-[1px]"><IoCheckmarkOutline /></span>
                                    <p className="ml-2 Secondery_Text_Colour text-[14px] font-[400] leading-[22px]">You will learn how to take your designs and build them into powerful websites using Webflow, a state-of-the-art site builder used by teams.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white bg-green-500 rounded-full p-[1px]"><IoCheckmarkOutline /></span>
                                    <p className="ml-2 Secondery_Text_Colour text-[14px] font-[400] leading-[22px]">You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white bg-green-500 rounded-full p-[1px]"><IoCheckmarkOutline /></span>
                                    <p className="ml-2 Secondery_Text_Colour text-[14px] font-[400] leading-[22px]">Learn to use Python professionally, learning both Python 2 and Python 3!</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white bg-green-500 rounded-full p-[1px]"><IoCheckmarkOutline /></span>
                                    <p className="ml-2 Secondery_Text_Colour text-[14px] font-[400] leading-[22px]">Understand how to use both the Jupyter Notebook and create .py files.</p>
                                </li><li className="flex items-start">
                                    <span className="text-white bg-green-500 rounded-full p-[1px]"><IoCheckmarkOutline /></span>
                                    <p className="ml-2 Secondery_Text_Colour text-[14px] font-[400] leading-[22px]">Understand how to use both the Jupyter Notebook and create .py files.</p>
                                </li>
                                </ul>
                            </div>

                            {/* Curriculum Section */}
                            <div className='flex items-center justify-between mb-5 mt-10'>
                                <h1 className='text-[24px] font-[700] leading-[36px] Primary_Text_Colour'>Curriculum</h1>
                                <div className='flex items-center gap-5'>
                                    <p className='flex items-center gap-2'>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 16.25V5C2.5 4.83424 2.56585 4.67527 2.68306 4.55806C2.80027 4.44085 2.95924 4.375 3.125 4.375H7.29167C7.4269 4.375 7.55848 4.41886 7.66667 4.5L9.83333 6.125C9.94152 6.20614 10.0731 6.25 10.2083 6.25H15.625C15.7908 6.25 15.9497 6.31585 16.0669 6.43306C16.1842 6.55027 16.25 6.70924 16.25 6.875V8.75" stroke="#FF6636" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2.5 16.25L4.84285 10.3929C4.88924 10.2769 4.96932 10.1775 5.07275 10.1075C5.17619 10.0374 5.29823 10 5.42315 10H9.18576C9.30916 10 9.42979 9.96348 9.53245 9.89503L11.0925 8.85497C11.1952 8.78652 11.3158 8.75 11.4392 8.75H17.8829C17.9819 8.75 18.0795 8.77353 18.1677 8.81866C18.2558 8.86379 18.332 8.92922 18.3899 9.00956C18.4478 9.0899 18.4858 9.18284 18.5007 9.28074C18.5156 9.37864 18.5071 9.47869 18.4758 9.57264L16.25 16.25H2.5Z" stroke="#FF6636" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg></span>
                                        Section</p>   
                                        <p className='flex items-center gap-2'>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#564FFD" strokeWidth="1.3" strokeMiterlimit="10"/>
                                            <path d="M12.5 10L8.75 7.5V12.5L12.5 10Z" stroke="#564FFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </span>
                                        Lecture</p>   
                                        <p className='flex items-center gap-2'>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#FD8E1F" strokeWidth="1.3" strokeMiterlimit="10"/>
                                        <path d="M10 5.625V10H14.375" stroke="#FD8E1F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        </span>
                                        Time</p>
                                </div>
                            </div>
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
                         </div>

                         {/* Cource instector and reating */}

                         <div className="mx-auto p-4 space-y-6">
                        {/* Instructor Profile Section */}
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Course Instructor (02)</h2>
                        <div
                         style={{ border: '1px solid var(--Gray-100, #E9EAF0)' }}
                        className="bg-white p-6 px-8  rounded-md">
                            <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <img
                                src="https://i.ibb.co/wsRj1WR/course-instector.jpg"
                                alt="Instructor"
                                className="w-24 h-24 rounded-full"
                            />
                            <div>
                                <h3 className="text-xl mb-[6px] Primary_Text_Colour font-semibold text-center md:text-left mt-5 md:mt-0">Vako Shvili</h3>
                                <p className="Secondery_Text_Colour text-center md:text-left">Web Designer & Best-Selling Instructor</p>
                                <div className="flex items-center space-x-6 my-4 text-sm text-gray-500">
                                <span className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.3446 14.901L14.2849 17.3974C14.7886 17.7165 15.4139 17.2419 15.2644 16.654L14.126 12.1756C14.0939 12.0509 14.0977 11.9197 14.137 11.797C14.1762 11.6743 14.2492 11.5652 14.3477 11.4822L17.8811 8.54132C18.3453 8.1549 18.1057 7.38439 17.5092 7.34568L12.8949 7.0462C12.7706 7.03732 12.6514 6.99332 12.5511 6.91931C12.4509 6.84531 12.3737 6.74435 12.3286 6.62819L10.6076 2.29436C10.5609 2.17106 10.4777 2.06492 10.3692 1.99002C10.2606 1.91511 10.1319 1.875 10 1.875C9.86813 1.875 9.73938 1.91511 9.63085 1.99002C9.52232 2.06492 9.43914 2.17106 9.39236 2.29436L7.6714 6.62819C7.62631 6.74435 7.54914 6.84531 7.4489 6.91931C7.34865 6.99332 7.22944 7.03732 7.10515 7.0462L2.49078 7.34568C1.89429 7.38439 1.65466 8.1549 2.11894 8.54132L5.65232 11.4822C5.75079 11.5652 5.82383 11.6743 5.86305 11.797C5.90226 11.9197 5.90606 12.0509 5.874 12.1756L4.81824 16.3288C4.63889 17.0343 5.38929 17.6038 5.99369 17.2209L9.65539 14.901C9.75837 14.8354 9.87792 14.8006 10 14.8006C10.1221 14.8006 10.2416 14.8354 10.3446 14.901V14.901Z" fill="#FD8E1F"/>
                                </svg>
                                    <span className='font-bold Primary_Text_Colour'>4.9</span> <span className='description'>Course rating</span></span>
                                
                                    <span className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.87503 12.5C9.11869 12.5 10.9375 10.6812 10.9375 8.4375C10.9375 6.19384 9.11869 4.375 6.87503 4.375C4.63137 4.375 2.81253 6.19384 2.81253 8.4375C2.81253 10.6812 4.63137 12.5 6.87503 12.5Z" stroke="#564FFD" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    <path d="M12.1416 4.52628C12.7003 4.36885 13.2864 4.33299 13.8601 4.4211C14.4339 4.50922 14.9822 4.71928 15.468 5.03713C15.9537 5.35497 16.3658 5.77323 16.6763 6.26372C16.9868 6.75421 17.1886 7.30555 17.2681 7.8806C17.3476 8.45565 17.3029 9.04106 17.1371 9.5974C16.9713 10.1537 16.6882 10.6681 16.3069 11.1058C15.9256 11.5435 15.4549 11.8944 14.9265 12.1349C14.3982 12.3754 13.8244 12.4999 13.2439 12.5" stroke="#564FFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.24969 15.4216C1.88417 14.5191 2.72649 13.7825 3.70552 13.274C4.68455 12.7655 5.77155 12.5 6.87476 12.5C7.97797 12.5 9.065 12.7654 10.0441 13.2738C11.0231 13.7822 11.8655 14.5187 12.5 15.4212" stroke="#564FFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M13.2439 12.5C14.3472 12.4992 15.4344 12.7643 16.4136 13.2728C17.3927 13.7813 18.2349 14.5182 18.8689 15.4212" stroke="#564FFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className='font-bold Primary_Text_Colour'>236,568</span> <span className='description'>Students</span></span>

                                    <span className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#FF6636" stroke="#FF6636" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    <path d="M12.5 10L8.75 7.5V12.5L12.5 10Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className='font-bold Primary_Text_Colour'>09</span> <span className='description'>Courses</span></span>
                                </div>
                                <p className="mt-4 description">
                                One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup...
                                <button className="text-blue-600">READ MORE</button>
                                </p>
                            </div>
                            </div>
                        </div>
                        {/* Rating */}
                        <div className="mx-auto p-6 bg-white rounded-lg border">
                        <div className="flex items-center">
                            <div className="text-4xl font-bold">4.8</div>
                            <div className="ml-4 text-yellow-500 flex">
                            <FaStar size={28} />
                            <FaStar size={28} />
                            <FaStar size={28} />
                            <FaStar size={28} />
                            <FaStar size={28} />
                            </div>
                        </div>

                        <div className="mt-4">
                            {ratings.map((rating) => (
                            <div key={rating.stars} className="flex items-center">
                                <div className="text-gray-700 flex">
                                {[...Array(rating.stars)].map((_, index) => (
                                    <FaStar key={index} size={20} className="text-yellow-500" />
                                ))}
                                {[...Array(5 - rating.stars)].map((_, index) => (
                                    <FaStar key={index} size={20} className="text-gray-300" />
                                ))}
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
                                <div
                                    className="bg-yellow-500 h-2.5 rounded-full"
                                    style={{ width: `${rating.percentage}%` }}
                                ></div>
                                </div>
                                <div className="ml-4 text-gray-600">
                                {rating.percentage}
                                {rating.percentage === '<1' ? '' : '%'}
                                </div>
                            </div>
                            ))}
                        </div>
                                {/* Students Feedback */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Students Feedback</h3>
                            {reviews.map((review, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex items-center">
                                <img
                                    src={`https://i.pravatar.cc/40?img=${index + 1}`}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">{review.name}</h4>
                                    <div className="text-sm text-gray-500">{review.time}</div>
                                </div>
                                </div>
                                <div className="mt-2 text-gray-700">{review.comment}</div>
                            </div>
                            ))}
                        </div>
                        </div>
                        
                        </div>


                </div>
                <div className='lg:w-[30%]'>   
                <div className="border border-gray-200 rounded-md p-4 font-sans">
                    {/* Course Info */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-2 text-sm">
                        <span>📅 Course Duration</span>
                        <span>6 Months</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                        <span>📊 Course Level</span>
                        <span>Beginner and Intermediate</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                        <span>👥 Students Enrolled</span>
                        <span>69,419,618</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                        <span>🗣️ Language</span>
                        <span>Mandarin</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                        <span>📜 Subtitle Language</span>
                        <span>English</span>
                        </div>
                    </div>
                    <hr />

                    {/* Start Course Button */}
                    <button className="w-full py-2 mb-4 mt-4 btn button_colour rounded-md">
                    <HiOutlinePlusSmall />
                     Start Course
                    </button>
                    <hr />

                    {/* Course Includes */}
                    <div className="mb-4 mt-5">
                        <h3 className="text-base mb-2">This course includes:</h3>
                        <ul className="list-none p-0 space-y-2 text-sm">
                        <li>⏳ Lifetime access</li>
                        <li>💸 30-days money-back guarantee</li>
                        <li>📄 Free exercises file & downloadable resources</li>
                        <li>📜 Shareable certificate of completion</li>
                        <li>📱 Access on mobile, tablet, and TV</li>
                        <li>📝 English subtitles</li>
                        <li>🌐 100% online course</li>
                        </ul>
                    </div>
                    <hr />

                    {/* Share Course */}
                    <div className='mt-2'>
                        <h3 className="text-base mb-2">Share this course:</h3>
                        <div className="flex justify-center flex-wrap gap-4 mt-3 w-full">
                        <button className="bg-gray-200 border border-gray-300 py-3 px-4 rounded-md text-sm">
                            🔗 Copy link
                        </button>
                        <button className="bg-gray-200 border border-gray-300 py-2 px-3 rounded-sm text-lg">
                            <GrFacebookOption />
                        </button>
                        <button className="bg-gray-200 border border-gray-300 py-2 px-3 rounded-sm text-lg">
                            <FaTwitter />
                        </button>
                        <button className="bg-gray-200 border border-gray-300 py-2 px-3 rounded-sm text-lg">
                            <TfiEmail />
                        </button>
                        <button className="bg-gray-200 border border-gray-300 py-2 px-3 rounded-sm text-lg">
                            <ImWhatsapp />
                        </button>
                        </div>
                    </div>
                    </div>
                </div>  
            </div>
                   <div className="container mx-auto p-6 pt-32">
                      
                    </div>
        </div>
     
    );
};

export default Courcedetails;