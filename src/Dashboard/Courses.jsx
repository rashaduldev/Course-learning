import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Courses = () => {
const courcesData=[
  {
    "id": 1,
    "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
    "title": "Digital Marketing Mastery",
    "mentor": "John Doe",
    "time": "5 hr",
    "category": "Video Editing",
    "description": "Digital marketing is an essential skill in today's business environment. In this comprehensive course, John Doe will take you through the fundamentals of digital marketing, covering everything from the basics to advanced strategies. You’ll learn how to drive traffic to your website, increase your online presence, and boost your sales. The course includes modules on search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content creation. By the end of this course, you’ll have a solid understanding of how to craft effective digital marketing campaigns, analyze their performance, and optimize them for better results. Whether you’re a beginner looking to get started or an experienced marketer seeking to refine your skills, this course offers valuable insights and practical tips to help you succeed. With hands-on exercises and real-world examples, John Doe provides a thorough and engaging learning experience that will empower you to master digital marketing and achieve your business goals.",
    "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  },
  {
    "id": 2,
    "img": "https://i.ibb.co/K2k46YD/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-2.jpg",
    "title": "Advanced SEO Techniques",
    "mentor": "Jane Smith",
    "time": "4 hr",
    "category": "Digital Marketing",
    "description": "Search Engine Optimization (SEO) is crucial for improving your website's visibility and ranking on search engines. In this advanced course, Jane Smith dives deep into sophisticated SEO strategies and techniques. You will explore advanced keyword research methods, on-page and off-page SEO practices, technical SEO aspects, and how to effectively use SEO tools. The course also covers the latest trends and algorithm updates that impact search engine rankings. Jane Smith’s approach includes practical, hands-on examples and case studies to illustrate how to implement advanced SEO techniques successfully. Whether you're looking to optimize existing content or develop a new SEO strategy, this course provides the knowledge and tools needed to enhance your website’s performance in search results. By the end of the course, you will be equipped with advanced skills to boost your site’s search engine rankings, drive organic traffic, and achieve long-term SEO success.",
    "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  },
  {
    "id": 3,
    "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
    "title": "Social Media Marketing 101",
    "mentor": "Robert Brown",
    "time": "3 hr",
    "category": "Video Editing",
    "description": "Social media marketing is a powerful tool for building brand awareness and engaging with your audience. This introductory course, led by Robert Brown, covers the essentials of social media marketing, including strategy development, content creation, and platform-specific techniques. You’ll learn how to create compelling social media campaigns, leverage different platforms like Facebook, Instagram, Twitter, and LinkedIn, and measure the effectiveness of your efforts. The course includes practical tips on how to use social media analytics to track performance and adjust your strategies for better results. By the end of the course, you’ll have a solid understanding of how to use social media to enhance your brand’s online presence, connect with your target audience, and achieve your marketing goals. Robert Brown’s engaging teaching style and real-world examples will help you grasp the fundamentals of social media marketing and apply them effectively in your business.",
    "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  },
  {
    "id": 4,
    "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
    "title": "Content Creation for Beginners",
    "mentor": "Emily Davis",
    "time": "2 hr",
    "category": "Digital Marketing",
    "description": "Content creation is at the heart of effective digital marketing. In this beginner-friendly course, Emily Davis will guide you through the basics of creating engaging content. You’ll learn how to develop content strategies, write compelling copy, and use various content formats like blogs, infographics, and videos. The course covers essential topics such as understanding your audience, crafting messages that resonate, and optimizing content for different platforms. Emily Davis provides practical advice and actionable tips to help you start creating content that attracts and retains your target audience. Whether you’re a new marketer or looking to enhance your content creation skills, this course offers valuable insights and hands-on exercises to improve your content marketing efforts. By the end of the course, you’ll have the skills needed to create effective content that drives traffic and engages your audience.",
    "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  },
  {
    "id": 5,
    "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
    "title": "Email Marketing Strategies",
    "mentor": "Michael Johnson",
    "time": "1 hr",
    "category": "Video Editing",
    "description": "Email marketing remains one of the most effective ways to reach your audience and drive conversions. In this course, Michael Johnson covers the fundamentals of email marketing, including how to build and segment your email list, create engaging email content, and design visually appealing emails. You’ll learn strategies for crafting compelling subject lines, personalizing your messages, and optimizing your email campaigns for better open and click-through rates. The course also includes tips on how to measure the success of your email campaigns using analytics and adjust your strategies for continuous improvement. By the end of the course, you’ll have the knowledge and tools needed to execute successful email marketing campaigns that nurture leads, engage your audience, and drive sales.",
    "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  },
  {
    "id": 6,
    "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
    "title": "PPC Advertising Essentials",
    "mentor": "Patricia Williams",
    "time": "2 hr",
    "category": "Digital Marketing",
    "description": "Pay-per-click (PPC) advertising is a powerful method for driving targeted traffic to your website. Patricia Williams covers the essentials of PPC advertising in this course, including how to set up and manage effective ad campaigns on platforms like Google Ads and social media. You’ll learn how to conduct keyword research, create compelling ad copy, and optimize your ad spend to maximize ROI. The course also covers techniques for tracking and analyzing campaign performance, enabling you to make data-driven decisions and continually improve your PPC strategy. With practical examples and hands-on exercises, Patricia Williams provides a comprehensive guide to mastering PPC advertising and achieving your marketing goals.",
    "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
  }
]
  return (
    <div className="">
    {/* Main Content */}
    <main className="">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="text-[24px] font-bold Primary_Text_Colour mb-6">Dashboard</h1>
        <div className="relative">
            <input className="w-full p-1 pl-8 border border-[#637381] rounded focus:border-[#C8E031] focus:outline-none focus:ring-2 focus:ring-[#C8E031]" 
            placeholder="Search"
            type="text" />
            <CiSearch className="absolute top-[5px] left-1 w-[24px] h-[24px]" />
        </div>
      </div>

      {/* Button group */}
      <div className="flex items-center mb-10">
          <button className="px-4 py-2 bg-[#A9BF1C] text-white mr-4">Enrolled Course (24)</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Active Course (05)</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Completed Course (04)</button>
      </div>

      {/* Courses Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courcesData.map((course, index) => (
           <NavLink to={`/dashboard/courses/${course.id}`}  key={index}>
             <div key={course.id}
                        // onClick={() => handleCardClick(course.id)}
                        className="rounded-[8px] bg-base-100 shadow cursor-pointer mt-10">
                            <figure>
                                <img src={course.img} alt={course.title} className="h-48 w-full object-cover rounded-t-[8px]" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.title}</h2>
                                <p className="font-bold Secondery_Text_Colour">Mentor: {course.mentor}</p>
                            </div>
                        </div>
           </NavLink>
          ))}
        </div>
      </div>
    </main>
  </div>
  );
};

export default Courses;