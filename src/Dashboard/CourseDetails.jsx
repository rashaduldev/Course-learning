import { CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiChecks } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
const sections = [
    {
      title: 'Getting Started',
      duration: '51m',
      lectures: 4,
      quiz:'Quiz question 1',
      items: [
        { type: 'video', title: "What's is Webflow?", duration: '07:31' },
        { type: 'video', title: 'Sign up in Webflow', duration: '07:31' },
        { type: 'doc', title: 'Webflow Terms & Conditions', size: '5.3 MB' },
        { type: 'video', title: 'Teaser of Webflow', duration: '07:31' },
        { type: 'doc', title: 'Practice Project', size: '5.3 MB' },
        // { type: 'quiz', title: 'Quiz question 1', size: '5.3 MB' },
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
        { type: 'doc', title: 'Practice Project' },
      ],
    },

  ];
const allcourseData=[
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
    },
    {
      "id": 7,
      "img": "https://i.ibb.co/K2k46YD/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-2.jpg",
      "title": "Google Analytics for Beginners",
      "mentor": "James Miller",
      "time": "5 hr",
      "category": "Digital Marketing",
      "description": "Google Analytics is an essential tool for tracking and analyzing your website’s performance. In this beginner-friendly course, James Miller provides a comprehensive introduction to Google Analytics, covering how to set up and navigate the platform, track key metrics, and interpret data. You’ll learn how to create and customize reports, set up goals and conversions, and use analytics to gain insights into your audience’s behavior. The course also includes tips on how to use Google Analytics data to make informed decisions and optimize your digital marketing strategies. With practical examples and hands-on exercises, James Miller’s course will equip you with the skills needed to effectively use Google Analytics and improve your website’s performance.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 8,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "Affiliate Marketing 101",
      "mentor": "Elizabeth Wilson",
      "time": "1 hr",
      "category": "Video Editing",
      "description": "Affiliate marketing is a popular method for earning passive income by promoting other people’s products. In this course, Elizabeth Wilson introduces you to the basics of affiliate marketing, including how to choose profitable affiliate programs, promote products effectively, and earn commissions. You’ll learn how to create affiliate marketing content, track your performance, and optimize your strategies for better results. The course also covers common pitfalls and best practices to help you succeed in the affiliate marketing space. With actionable tips and practical examples, Elizabeth Wilson provides a solid foundation for getting started with affiliate marketing and building a successful affiliate business.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 9,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "E-commerce Marketing Strategies",
      "mentor": "Christopher Martinez",
      "time": "5 hr",
      "category": "Digital Marketing",
      "description": "E-commerce marketing involves strategies to drive traffic, convert visitors, and increase sales for online stores. Christopher Martinez’s course explores proven marketing techniques tailored for e-commerce businesses. You’ll learn about SEO, content marketing, social media strategies, and email campaigns designed to enhance your e-commerce presence. The course also covers conversion rate optimization, customer retention strategies, and how to leverage analytics to track and improve your marketing efforts. With practical advice and case studies, Christopher Martinez equips you with the tools needed to implement effective e-commerce marketing strategies and achieve growth in the competitive online retail space.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 10,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "YouTube Marketing Mastery",
      "mentor": "Jessica Hernandez",
      "time": "5 hr",
      "category": "Video Editing",
      "description": "YouTube is a powerful platform for reaching a large audience and growing your brand. In this course, Jessica Hernandez covers everything you need to know to master YouTube marketing. You’ll learn how to create engaging video content, optimize your videos for search, and build a successful YouTube channel. The course includes tips on video production, editing, and promotion, as well as strategies for increasing views, subscribers, and engagement. Jessica Hernandez also explores how to leverage YouTube analytics to track performance and refine your strategy. With practical insights and hands-on examples, this course will help you harness the full potential of YouTube to expand your reach and achieve your marketing goals.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 11,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Facebook Advertising Guide",
      "mentor": "Richard Clark",
      "time": "5 hr",
      "category": "Digital Marketing",
      "description": "Facebook advertising is a key component of any digital marketing strategy. Richard Clark’s guide provides a comprehensive overview of creating and managing effective Facebook ad campaigns. You’ll learn about ad formats, targeting options, and how to set up and optimize your ads for maximum impact. The course covers best practices for ad copy, visuals, and budgeting, as well as techniques for analyzing ad performance and making data-driven decisions. Richard Clark also includes insights on how to leverage Facebook’s ad tools and features to enhance your campaigns. By the end of the course, you’ll have the skills to design and implement successful Facebook advertising strategies that drive engagement and conversions.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 12,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "Instagram Growth Hacking",
      "mentor": "Barbara Lewis",
      "time": "4 hr",
      "category": "Digital Marketing",
      "description": "Growing your Instagram following requires more than just posting content. Barbara Lewis’s course on Instagram growth hacking provides advanced techniques for expanding your reach and increasing engagement on the platform. You’ll learn about optimizing your profile, using hashtags effectively, and leveraging Instagram’s features like Stories, Reels, and IGTV to connect with your audience. The course also covers strategies for collaborating with influencers, running Instagram ads, and analyzing your performance with Instagram Insights. Barbara Lewis shares practical tips and real-world examples to help you implement growth hacking strategies that drive significant results. By the end of the course, you’ll be equipped with the skills to enhance your Instagram presence and achieve your social media goals.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 13,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "LinkedIn Marketing for Professionals",
      "mentor": "Daniel Walker",
      "time": "1 hr",
      "category": "Video Editing",
      "description": "LinkedIn is a powerful platform for professionals looking to expand their network and market their services. In this course, Daniel Walker provides insights into leveraging LinkedIn for marketing and professional growth. You’ll learn how to optimize your LinkedIn profile, build a strong professional network, and use LinkedIn’s features to showcase your expertise. The course covers strategies for creating engaging content, participating in industry discussions, and utilizing LinkedIn Ads to reach a broader audience. Daniel Walker also includes tips on how to measure your success and adjust your LinkedIn strategy to maximize your results. By the end of the course, you’ll have the skills needed to effectively use LinkedIn for professional marketing and networking.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 14,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Content Marketing Fundamentals",
      "mentor": "Susan Adams",
      "time": "3 hr",
      "category": "Digital Marketing",
      "description": "Content marketing is a strategic approach to creating and distributing valuable content to attract and engage your target audience. In this course, Susan Adams covers the fundamentals of content marketing, including content strategy development, creation, and distribution. You’ll learn how to craft content that resonates with your audience, choose the right formats and channels, and measure the effectiveness of your content marketing efforts. The course also explores techniques for content promotion, including SEO, social media, and email marketing. With practical examples and actionable insights, Susan Adams provides a solid foundation for building and executing a successful content marketing strategy. By the end of the course, you’ll have the skills to drive traffic, generate leads, and achieve your marketing objectives through content.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 15,
      "img": "https://i.ibb.co/KKvwf13/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-0.jpg",
      "title": "Online Advertising Strategies",
      "mentor": "Karen Mitchell",
      "time": "4 hr",
      "category": "Video Editing",
      "description": "Online advertising is a key component of digital marketing that can significantly impact your business’s success. Karen Mitchell’s course provides an in-depth look at various online advertising strategies, including search engine marketing (SEM), display advertising, and retargeting. You’ll learn how to create effective ad campaigns, target the right audience, and optimize your ads for better performance. The course covers best practices for ad design, copywriting, and budgeting, as well as techniques for analyzing campaign results and making data-driven decisions. Karen Mitchell’s practical approach and real-world examples will help you develop and implement online advertising strategies that drive traffic and conversions.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 16,
      "img": "https://i.ibb.co/xSH502p/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-1.jpg",
      "title": "Mobile Marketing Essentials",
      "mentor": "Paul Robinson",
      "time": "2 hr",
      "category": "Digital Marketing",
      "description": "Mobile marketing is crucial in reaching today’s on-the-go consumers. In this course, Paul Robinson covers the essentials of mobile marketing, including SMS marketing, mobile apps, and mobile-friendly website design. You’ll learn how to create mobile marketing campaigns that effectively engage users and drive conversions. The course also explores strategies for optimizing your content and ads for mobile devices and tracking mobile campaign performance. With practical tips and real-world examples, Paul Robinson provides a comprehensive guide to mastering mobile marketing and achieving success in the mobile-first digital landscape.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 17,
      "img": "https://i.ibb.co/K2k46YD/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-2.jpg",
      "title": "Analytics and Data Visualization",
      "mentor": "Anna Thompson",
      "time": "3 hr",
      "category": "Digital Marketing",
      "description": "Understanding and visualizing data is key to making informed marketing decisions. In this course, Anna Thompson covers the basics of data analytics and visualization. You’ll learn how to collect, analyze, and interpret marketing data to gain insights into your audience’s behavior and campaign performance. The course includes techniques for creating visualizations that effectively communicate data insights, such as charts, graphs, and dashboards. Anna Thompson’s practical approach and hands-on exercises will help you develop the skills to use data to drive your marketing strategies and optimize your results.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 18,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "Growth Hacking Techniques",
      "mentor": "Laura Martinez",
      "time": "5 hr",
      "category": "Digital Marketing",
      "description": "Growth hacking is about using creative and innovative methods to achieve rapid growth. Laura Martinez’s course on growth hacking techniques explores unconventional strategies to boost your business’s growth. You’ll learn about hacking marketing funnels, leveraging data for growth, and experimenting with new ideas to find scalable solutions. The course covers practical tips for testing and iterating your strategies to achieve measurable results. With real-world examples and actionable insights, Laura Martinez provides a comprehensive guide to applying growth hacking principles to drive significant and sustainable business growth.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 19,
      "img": "https://i.ibb.co/K2k46YD/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-2.jpg",
      "title": "Influencer Marketing Strategies",
      "mentor": "Megan White",
      "time": "2 hr",
      "category": "Digital Marketing",
      "description": "Influencer marketing can significantly enhance your brand’s reach and credibility. Megan White’s course provides a deep dive into influencer marketing strategies, including how to identify and collaborate with the right influencers for your brand. You’ll learn how to create effective influencer campaigns, negotiate terms, and measure the impact of your influencer partnerships. The course also covers best practices for maintaining relationships with influencers and leveraging their content to boost your brand’s visibility. Megan White’s practical tips and real-world examples will help you implement successful influencer marketing strategies and achieve your marketing objectives.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    },
    {
      "id": 20,
      "img": "https://i.ibb.co/j6JkYB7/Leonardo-Phoenix-A-modern-sleek-and-professional-illustration-3.jpg",
      "title": "Marketing Automation Essentials",
      "mentor": "David Wilson",
      "time": "4 hr",
      "category": "Digital Marketing",
      "description": "Marketing automation is a powerful tool for streamlining your marketing efforts and improving efficiency. David Wilson’s course on marketing automation essentials covers the fundamentals of setting up and managing automated marketing campaigns. You’ll learn how to use automation tools to nurture leads, segment your audience, and personalize your marketing messages. The course includes practical tips on how to create automated workflows, analyze their performance, and optimize them for better results. With hands-on exercises and real-world examples, David Wilson provides a comprehensive guide to leveraging marketing automation to enhance your marketing strategies and achieve your business goals.",
      "iframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    }
  ]
  
const CourseDetails = () => {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (index) => {
      setActiveSection(activeSection === index ? null : index);
      const { courseId } = useParams();
    };
    return (
        <div className="flex">
        <div className="lg:w-[70%] w-full mr-6">
            {/* Iframe */}
            <iframe 
                width="100%" 
                height="322" 
                src="https://www.youtube.com/embed/Y50RF_qyqlU?si=OPJ31NoHYptaNlFs" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full"
            ></iframe>
            {/*  */}
          <div className="my-4">
          <h1 className="text-[24px] font-[700] leading-[36px] mb-2">Ultimate Digital Marketing</h1>
          <div className="flex items-center justify-between text-[16px] leading-[24px] w-[400]">
            <div className="flex items-center gap-2">
            <GoPeople />
            <h2 className="Secondery_Text_Colour">Tawheed Ahsan Romi</h2>
            </div>
            <div className="flex items-center gap-2 Secondery_Text_Colour">
                <h3>Share</h3>
                <p><CiShare2 /></p>
            </div>
          </div>
          </div>
          {/* description */}
          <div className="my-4">
                <h1 className="text-[15.14px] font-[700] leading-[15.14px] mb-[6px]">Description</h1>
                <div className="space-y-6 Secondery_Text_Colour text-3 font-[400] leading-[18px] font-sans">
              <p>
              Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React.
              </p>
                <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.</p>
                <p>Lets start now with out getting any further late. lets dive in.</p>     
                </div><div className="space-y-6 Secondery_Text_Colour text-3 font-[400] leading-[18px] font-sans">
              <p>
              Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React.
              </p>
                <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.</p>
                <p>Lets start now with out getting any further late. lets dive in.</p>     
                </div>
          </div>
          {/* footer */}
          <div className="flex items-center justify-between">
               <div className="flex items-center gap-5">
                    <button className="btn hover:text-[#2563EB] hover:bg-[#EFF4FF] text-[#2563EB] bg-[#EFF4FF]">Prev</button>
                    <button className="btn hover:text-[#2563EB] hover:bg-[#EFF4FF] text-[#2563EB] bg-[#EFF4FF]">Next</button>
               </div>
               <div>
                    <button className="btn text-[#158036] bg-[#F0FDF4] hover:text-[#158036] hover:bg-[#F0FDF4]">Mark as Complete</button>
               </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full">
            <h1>Courses Content</h1>
            <div className="mx-auto border rounded-md">
            {sections.map((section, index) => (
              <div key={index} className="">
              <button
                  onClick={() => toggleSection(index)}
                  className="w-full items-center p-4 bg-white hover:bg-gray-50"
              >
                  <div className="text-left">
                  <h2 className={activeSection === index ? 'text-red-500' : 'text-[16px] text-[#212B36]'}>
                 <div className='flex items-center justify-between'>
                  <p >
                      {section.title}
                  </p>
                  <p className='text-[16px]'>
                      {activeSection === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </p>
                 </div>
                  </h2>
                  </div>
              </button>
              {activeSection === index && (
                  <ul className="bg-white border-t border-gray-200">
                    <span className='flex justify-around items-center gap-2 mt-3'>
                      {/* {activeSection === index ? '-' : '+'} */}
                     <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#564FFD" strokeWidth="1.3" strokeMiterlimit="10"/>
                        <path d="M12.5 10L8.75 7.5V12.5L12.5 10Z" stroke="#564FFD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {section.lectures} 
                        <span>lectures</span>
                     </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#FD8E1F" strokeWidth="1.3" strokeMiterlimit="10"/>
                        <path d="M10 5.625V10H14.375" stroke="#FD8E1F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{section.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PiChecks className="text-green-500 w-[20px] h-[20px]" />
                        <span>25% finished</span>
                      </div>
                  </span>
                  <div>
                  {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="p-4 flex justify-between">
                      <span>{item.title}</span>
                      {item.type === 'video' && <span>{item.duration}</span>}
                      {item.type === 'doc' && <span>{item.size}</span>}
                      </li>
                  ))}
                  </div>
                   <div>
                   <span className="flex items-center gap-[10px] text-[14px] font-[400] leading-[22px] p-4">
                     <IoBagOutline /> 
                     Quiz question 1
                     </span>
                   {/* {sections.map((item, itemIndex) => (
                      <li key={itemIndex}>
                     <span>
                     <IoBagOutline /> 
                     {item.quiz}
                     </span>
                      </li>
                  ))} */}
                   </div>
                  </ul>
              )}
              <hr />
              </div>
          ))}
        </div>
        </div>
    </div>
    );
};

export default CourseDetails;