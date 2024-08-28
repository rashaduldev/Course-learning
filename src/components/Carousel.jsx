const courseData=[
    {
      "id": 1,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "Digital Marketing Mastery",
      "mentor": "John Doe",
      "description": "Learn the fundamentals of digital marketing and master the skills to drive traffic and increase sales."
    },
    {
      "id": 2,
      "img": "https://i.ibb.co/K2k46YD/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-2.jpg",
      "title": "Advanced SEO Techniques",
      "mentor": "Jane Smith",
      "description": "Dive deep into SEO strategies and techniques to improve your website's search engine rankings."
    },
    {
      "id": 3,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Social Media Marketing 101",
      "mentor": "Robert Brown",
      "description": "An introductory course on leveraging social media platforms to grow your brand's online presence."
    },
    {
      "id": 4,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "Content Creation for Beginners",
      "mentor": "Emily Davis",
      "description": "Learn how to create compelling content that engages your audience and drives traffic to your site."
    },
    {
      "id": 5,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "Email Marketing Strategies",
      "mentor": "Michael Johnson",
      "description": "Master the art of email marketing to nurture leads and convert them into loyal customers."
    },
    {
      "id": 6,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "PPC Advertising Essentials",
      "mentor": "Patricia Williams",
      "description": "A comprehensive guide to pay-per-click advertising, including Google Ads and social media campaigns."
    },
    {
      "id": 7,
      "img": "https://i.ibb.co/K2k46YD/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-2.jpg",
      "title": "Google Analytics for Beginners",
      "mentor": "James Miller",
      "description": "Understand the basics of Google Analytics to track and analyze your website's performance."
    },
    {
      "id": 8,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "Affiliate Marketing 101",
      "mentor": "Elizabeth Wilson",
      "description": "Learn how to set up and manage a successful affiliate marketing program to boost sales."
    },
    {
      "id": 9,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "E-commerce Marketing Strategies",
      "mentor": "Christopher Martinez",
      "description": "Explore proven strategies to market your e-commerce business and increase your online sales."
    },
    {
      "id": 10,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "YouTube Marketing Mastery",
      "mentor": "Jessica Hernandez",
      "description": "Learn how to create and optimize videos for YouTube to grow your channel and reach a larger audience."
    },
    {
      "id": 11,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Facebook Advertising Guide",
      "mentor": "Richard Clark",
      "description": "A step-by-step guide to creating effective Facebook ad campaigns that drive conversions."
    },
    {
      "id": 12,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "Instagram Growth Hacking",
      "mentor": "Barbara Lewis",
      "description": "Discover strategies to grow your Instagram following and increase engagement with your posts."
    },
    {
      "id": 13,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "LinkedIn Marketing for Professionals",
      "mentor": "Daniel Walker",
      "description": "Leverage LinkedIn to build your professional network and market your business to potential clients."
    },
    {
      "id": 14,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Online Reputation Management",
      "mentor": "Matthew Hall",
      "description": "Learn how to manage and protect your online reputation across various platforms and review sites."
    },
    {
      "id": 15,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "Content Marketing Strategies",
      "mentor": "Susan Allen",
      "description": "Develop a content marketing strategy that aligns with your business goals and engages your target audience."
    },
    {
      "id": 16,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Video Marketing for Beginners",
      "mentor": "Kevin Young",
      "description": "Learn the basics of video marketing, from planning and production to promotion and analysis."
    },
  ]
  const Carousel = () => {
    const chunkedData = [];
    for (let i = 0; i < courseData.length; i += 4) {
      chunkedData.push(courseData.slice(i, i + 4));
    }
  
    return (
      <div className=" bg-[#EBF8EF] py-10 lg:px-48">
        <h1 className="text-center header_text mb-20">Podcast & Free Courses</h1>
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
                <button className="py-2 px-5 border border-gray-400 rounded font-bold text-sm">Watch more</button>
            </div>
      </div>
    );
  };
  
  export default Carousel;