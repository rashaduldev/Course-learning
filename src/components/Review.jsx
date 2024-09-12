import { useEffect, useState } from "react";
  const Review = () => {
    const [courses, setCourses] = useState([]); // State to hold courses data
    // eslint-disable-next-line no-unused-vars
    const [visibleCourses, setVisibleCourses] = useState(8); // Initially show 8 courses
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
    const chunkedData = [];
    for (let i = 0; i < courses.length; i += 4) {
      chunkedData.push(courses.slice(i, i + 4));
    }
  
    return (
      <div className="py-10 lg:px-48">
        <h1 className="text-center mb-20 header_text">The Unveiling of Thousands <br /> Success Story</h1>
        <div className="carousel w-full">
          {chunkedData.map((chunk, index) => (
            <div
              key={index}
              id={`item${index + 1}`}
              className="carousel-item w-full flex justify-around gap-5"
            >
              {chunk.map((course) => (
                <div key={course.id} className="card w-1/4">
                  <img src={course.img} alt={course.title} className="w-full rounded-lg" />
                 <div className="p-3">
                    <h3 className="font-bold text-sm lg:text-xl">{course.title}</h3>
                    <p className="text-gray-600"><a className="font-bold">Mentor </a>{course.mentor}</p>
                 </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {chunkedData.map((_, index) => (
            <a
              key={index}
              href={`#item${index + 1}`}
              className="btn btn-xs"
            >
              {index + 1}
            </a>
          ))}
        </div>
            <div className="text-center my-3">
                <button className="py-2 px-5 border border-gray-400 rounded font-bold text-sm">See all Reviews</button>
            </div>
      </div>
    );
  };
  
  export default Review;