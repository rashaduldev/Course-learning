import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchCourses = async () => {
            try {
                const response = await fetch('courcedata.json'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchCourses();
    }, []);

    // Function to handle card click
    const handleCardClick = (courseId) => {
        navigate(`/course/${courseId}`); // Navigate to the course detail page
    };

    return (
        <div>
            {/* Section with background image */}
            <div 
                className="py-20 px-4 pt-32 bg-cover bg-center" 
                style={{ backgroundImage: `url('https://i.ibb.co/gtvDkk7/Hero-BG.png')` }}
            >
                {/* Optional gradient overlay */}
                <div className="lg:px-[200px]">
                    <h1 className="text-center lg:text-left text-5xl font-bold py-3">Explore Our Courses</h1>
                    <p className="lg:text-left text-center pt-3 pb-10 text-gray-500">
                        Unlock unlimited access to our entire library with a single payment. Plus, enjoy complimentary access to all <br /> forthcoming courses at <span className='text-[#B6CD26]'>no extra cost!</span>
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-grow">
                <div className="mx-3">
                    {/* Cards Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:px-48">
                        {courses.map((course) => (
                            <div 
                                key={course.id} 
                                onClick={() => handleCardClick(course.id)} // Use course ID to navigate
                                style={{ boxShadow: "0px 1px 36px 0px rgba(0, 0, 0, 0.10)" }}
                                className="bg-white rounded-[8px] cursor-pointer"
                            >
                                <figure>
                                    <img src={course.img} alt={course.title} className="h-48 w-full object-cover rounded-t-[8px]" />
                                </figure>
                                <div className="p-3">
                                    <h2 className="text-lg font-semibold">{course.title}</h2>
                                    <p className="text-gray-700">Mentor: {course.mentor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className='text-right my-5'>
                        <div className="flex justify-end items-center">
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">«</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">1</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">2</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">3</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">4</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">5</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">....</button>
                            <button className="h-8 w-8 hover:bg-gray-400 rounded-full">»</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AllCourses;
