const courseData=[
    {
      "id": 1,
      "img": "https://example.com/images/course1.jpg",
      "title": "Digital Marketing Mastery",
      "mentor": "John Doe",
      "description": "Learn the fundamentals of digital marketing and master the skills to drive traffic and increase sales."
    },
    {
      "id": 2,
      "img": "https://example.com/images/course2.jpg",
      "title": "Advanced SEO Techniques",
      "mentor": "Jane Smith",
      "description": "Dive deep into SEO strategies and techniques to improve your website's search engine rankings."
    },
    {
      "id": 3,
      "img": "https://example.com/images/course3.jpg",
      "title": "Social Media Marketing 101",
      "mentor": "Robert Brown",
      "description": "An introductory course on leveraging social media platforms to grow your brand's online presence."
    },
    {
      "id": 4,
      "img": "https://example.com/images/course4.jpg",
      "title": "Content Creation for Beginners",
      "mentor": "Emily Davis",
      "description": "Learn how to create compelling content that engages your audience and drives traffic to your site."
    },
    {
      "id": 5,
      "img": "https://example.com/images/course5.jpg",
      "title": "Email Marketing Strategies",
      "mentor": "Michael Johnson",
      "description": "Master the art of email marketing to nurture leads and convert them into loyal customers."
    },
    {
      "id": 6,
      "img": "https://example.com/images/course6.jpg",
      "title": "PPC Advertising Essentials",
      "mentor": "Patricia Williams",
      "description": "A comprehensive guide to pay-per-click advertising, including Google Ads and social media campaigns."
    },
    {
      "id": 7,
      "img": "https://example.com/images/course7.jpg",
      "title": "Google Analytics for Beginners",
      "mentor": "James Miller",
      "description": "Understand the basics of Google Analytics to track and analyze your website's performance."
    },
    {
      "id": 8,
      "img": "https://example.com/images/course8.jpg",
      "title": "Affiliate Marketing 101",
      "mentor": "Elizabeth Wilson",
      "description": "Learn how to set up and manage a successful affiliate marketing program to boost sales."
    },
    {
      "id": 9,
      "img": "https://example.com/images/course9.jpg",
      "title": "E-commerce Marketing Strategies",
      "mentor": "Christopher Martinez",
      "description": "Explore proven strategies to market your e-commerce business and increase your online sales."
    },
    {
      "id": 10,
      "img": "https://example.com/images/course10.jpg",
      "title": "YouTube Marketing Mastery",
      "mentor": "Jessica Hernandez",
      "description": "Learn how to create and optimize videos for YouTube to grow your channel and reach a larger audience."
    },
    {
      "id": 11,
      "img": "https://example.com/images/course11.jpg",
      "title": "Facebook Advertising Guide",
      "mentor": "Richard Clark",
      "description": "A step-by-step guide to creating effective Facebook ad campaigns that drive conversions."
    },
    {
      "id": 12,
      "img": "https://example.com/images/course12.jpg",
      "title": "Instagram Growth Hacking",
      "mentor": "Barbara Lewis",
      "description": "Discover strategies to grow your Instagram following and increase engagement with your posts."
    },
    {
      "id": 13,
      "img": "https://example.com/images/course13.jpg",
      "title": "LinkedIn Marketing for Professionals",
      "mentor": "Daniel Walker",
      "description": "Leverage LinkedIn to build your professional network and market your business to potential clients."
    },
    {
      "id": 14,
      "img": "https://example.com/images/course14.jpg",
      "title": "Online Reputation Management",
      "mentor": "Matthew Hall",
      "description": "Learn how to manage and protect your online reputation across various platforms and review sites."
    },
    {
      "id": 15,
      "img": "https://example.com/images/course15.jpg",
      "title": "Content Marketing Strategies",
      "mentor": "Susan Allen",
      "description": "Develop a content marketing strategy that aligns with your business goals and engages your target audience."
    },
    {
      "id": 16,
      "img": "https://example.com/images/course16.jpg",
      "title": "Video Marketing for Beginners",
      "mentor": "Kevin Young",
      "description": "Learn the basics of video marketing, from planning and production to promotion and analysis."
    },
    {
      "id": 17,
      "img": "https://example.com/images/course17.jpg",
      "title": "SEO Writing Techniques",
      "mentor": "Donna King",
      "description": "Improve your writing skills with SEO best practices to create content that ranks higher in search results."
    },
    {
      "id": 18,
      "img": "https://example.com/images/course18.jpg",
      "title": "Conversion Rate Optimization",
      "mentor": "Brian Wright",
      "description": "Learn how to optimize your website and landing pages to increase conversion rates and drive more sales."
    },
    {
      "id": 19,
      "img": "https://example.com/images/course19.jpg",
      "title": "Local SEO Strategies",
      "mentor": "Kimberly Lopez",
      "description": "Master local SEO techniques to improve your business's visibility in local search results."
    },
    {
      "id": 20,
      "img": "https://example.com/images/course20.jpg",
      "title": "Influencer Marketing Essentials",
      "mentor": "George Hill",
      "description": "Learn how to collaborate with influencers to promote your brand and reach a wider audience."
    }
  ]
import { useState } from 'react';

  const Course = () => {
      const [visibleCourses, setVisibleCourses] = useState(8); // Initially show 8 courses
  
      const showAllCourses = () => {
          setVisibleCourses(courseData.length); // Show all courses when button is clicked
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
                      courseData.slice(0, visibleCourses).map((course) => (
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
              {visibleCourses < courseData.length && (
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
  