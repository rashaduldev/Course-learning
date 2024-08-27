import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const [courses, setCourses] = useState([]); // State to hold courses data
    // eslint-disable-next-line no-unused-vars
    const [visibleCourses, setVisibleCourses] = useState(8); // Initially show 8 courses
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchCourses = async () => {
            try {
                const response = await fetch('courcedata.json'); // Replace with your API URL
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

    const showAllCourses = () => {
        navigate('/all-courses'); // Navigate to the AllCourses page
    };

    return (
        <div className="my-5 lg:mx-48 mx-3 lg:mt-32">
            <h1 className="text-center text-5xl font-bold py-3">One payment get all courses</h1>
            <p className="text-center py-3 text-gray-500">
                Unlock unlimited access to our entire library with a single payment. Plus, enjoy complimentary <br /> access to all forthcoming courses at <a className="text-[#B6CD26] font-bold">no extra cost!</a>
            </p>
  
            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    courses.slice(0, visibleCourses).map((course) => (
                        <div key={course.id} className="card card-compact bg-base-100 shadow-xl my-10">
                            <figure>
                                <img src={course.img} alt={course.title} className="h-48 w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.title}</h2>
                                <p className="font-bold">Mentor: {course.mentor}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
  
            {/* Show All Button */}
            {visibleCourses < courses.length && (
                <div className="text-center mt-5">
                    <button 
                        onClick={showAllCourses} 
                        className="btn bg-[#C8E031] hover:bg-[#c9e031d5]"
                    >
                        See All Courses
                    </button>
                </div>
            )}
        </div>
    );
};

export default Course;
