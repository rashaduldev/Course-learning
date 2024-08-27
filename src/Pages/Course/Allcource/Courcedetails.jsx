// CourseDetail.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Courcedetails = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

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
    

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        // <div className="p-4 py-96">
        //     aaaa
        //     <h1 className="text-3xl font-bold">{course.title}</h1>
        //     <p className="text-gray-700">Mentor: {course.mentor}</p>
        //     <p>{course.description}</p>
        // </div>
        <div>
            <div className=' pt-32 mx-[200px] flex'>
                <div className='w-[70%]'>
                     {/* Title and Description Section */}
                     <div className="flex flex-col lg:flex-row justify-between items-start">
                            <div className="flex-1">
                                <h1 className="text-4xl font-bold mb-2">
                                    Complete Website Responsive Design: from Figma to Webflow to Website Design
                                </h1>
                                <p className="text-lg text-gray-600 mb-4">
                                    3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.
                                </p>
                                <div className="flex items-center space-x-3 mb-4">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="Creator"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="text-gray-800 font-medium">Dianne Russell</span>
                                    <span className="text-gray-800 font-medium">+ Kristin Watson</span>
                                    <span className="text-yellow-500 font-bold text-xl">★ 4.8</span>
                                    <span className="text-gray-600">(4,444 Ratings)</span>
                                </div>
                            </div>
                        </div>
                         {/* Image and Course Info Section */}
                         <div className="flex flex-col lg:flex-row mt-6">
                            <div className="lg:w-full pr-6">
                                <img
                                    src="https://via.placeholder.com/600x300"
                                    alt="Course"
                                    className="rounded-lg w-full h-auto"
                                />
                            </div>
                        </div>

                </div>
                <div className='w-[30%]'>   
                    <div className=" bg-gray-100 p-6 rounded-lg mt-6 lg:mt-0">
                                <ul className="space-y-2">
                                    <li><strong>Course Duration:</strong> 6 Month</li>
                                    <li><strong>Course Level:</strong> Beginner and Intermediate</li>
                                    <li><strong>Students Enrolled:</strong> 69,419,618</li>
                                    <li><strong>Language:</strong> Mandarin</li>
                                    <li><strong>Subtitle Language:</strong> English</li>
                                </ul>
                                <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded mt-4">
                                    + Start Course
                                </button>
                            </div>
                            {/*  */}
                              {/* Course Includes Section */}
                        <div className="bg-gray-100 p-6 rounded-lg mt-6">
                            <h3 className="text-2xl font-bold mb-4">This course includes:</h3>
                            <ul className="list-disc list-inside">
                                <li>Lifetime access</li>
                                <li>30-days money-back guarantee</li>
                                <li>Free exercise file & downloadable resources</li>
                                <li>Sharable certificate of completion</li>
                                <li>Access on mobile, tablet, and TV</li>
                                <li>English subtitles</li>
                                <li>100% online course</li>
                            </ul>
                        </div>

                        {/* Share Section */}
                        <div className="mt-6 flex justify-between items-center">
                            <div>
                                <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2">
                                    Copy link
                                </button>
                                <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2">
                                    Facebook
                                </button>
                                <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded">
                                    Twitter
                                </button>
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
