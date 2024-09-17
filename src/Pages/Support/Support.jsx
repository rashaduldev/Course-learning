import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const faqdata = [
    {
        id: 1,
        question: "What is the return policy?",
        answer: "Our return policy allows for returns within 30 days of purchase with a valid receipt. Items must be in original condition."
    },
    {
        id: 2,
        question: "How do I track my order?",
        answer: "You can track your order by logging into your account and viewing your order history. A tracking number will be provided once your order is shipped."
    },
    {
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on the destination."
    },
    {
        id: 4,
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via email at support@example.com or by calling our toll-free number at 1-800-123-4567."
    }
];
const Support = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="flex flex-col lg:flex-row pt-16 lg:pt-32 py-20 lg:mx-[200px]">
            {/* FAQ */}
            <div className="lg:w-[50%] h-full lg:px-10 pb-10 pt-6 bg-[#F4F6F8] rounded-[8px]">
            <div className='text-center lg:text-left'>
                <h1 className="text-[32px] font-[700] leading-[48px]">
                    FAQ
                </h1>
                <p className='mt-6 mb-3 text-[16px]'>
                    Explore our eLearning platform FAQ section for quick 
                    solutions to common queries, ensuring a seamless learning journey.
                </p>
            </div>
            <div className="w-full mt-10">
                {faqdata.map((item, index) => (
                    <div key={item.id} className="my-2 rounded-lg">
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer"
                            onClick={() => toggleCollapse(index)}
                        >
                            <span className="text-lg lg:text-xl font-medium flex gap-2">
                                <h4 className='font-bold'>Q:{item.id}</h4>
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <button className='flex items-center btn bg-[#E5F4EE] hover:bg-[#E5F4EE] text-[#007B55]'>
                                    <p>Answer</p>
                                    <FaChevronUp className="text-xl" />
                                </button>
                            ) : (
                                <button className='flex items-center btn bg-[#E5F4EE] hover:bg-[#E5F4EE] text-[#007B55]'>
                                    <p>Answer</p>
                                    <FaChevronDown className="text-xl" />
                                </button>
                            )}
                        </div>
                     
                        {openIndex === index && (
                            <div className="p-4">
                                <p>{item.answer}</p>
                            </div>
                        )}
                           <hr />
                    </div>
                ))}
            </div>
            </div>
            {/* From */}
            <div className=" lg:ml-20 space-y-6 lg:w-[50%]">
                <div className="">
                <h2 className="text-[28px] lg:text-[32px] font-[700] leading-[48px] lg:text-left text-center mt-10 lg:mt-0">Feel free to contact us. <br />We’ll be glad to hear from you, buddy.</h2>
                </div>

                <form className="mx-5 lg:mx-0 space-y-6 py-15">
                <div>
                    <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-4 px-[14px] border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                    <p className="text-gray-500 text-xs mt-1">Caption text, description, notification</p>
                </div>

                <div>
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full py-4 px-[14px] border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                    <p className="text-gray-500 text-xs mt-1">Caption text, description, notification</p>
                </div>

                <div>
                    <input
                    type="text"
                    placeholder="Subject"
                    className="w-full py-4 px-[14px] border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                    <p className="text-gray-500 text-xs mt-1">Caption text, description, notification</p>
                </div>

                <div>
                    <input
                    placeholder="Enter your message here......"
                    className="w-full py-4 px-[14px] border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    rows="4"
                    />
                    <p className="text-gray-500 text-xs mt-1">Caption text, description, notification</p>
                </div>
                <div className="">
                    <button
                    type="submit"
                    className="button_colour font-[500] text-[14px] leading-[20px] py-2 px-6 rounded-md"
                    >
                    Submit
                    </button>
                </div>
               
                </form>
           
            </div>
        </div>
    );
};

export default Support;