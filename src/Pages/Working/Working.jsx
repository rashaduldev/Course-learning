import { RiArrowGoBackLine } from "react-icons/ri";

const Working = () => {
    return (
        <div>
            <div className="text-center">
                <div>
                    <h1 className="text-4xl lg:text-[64px] font-[800] leading-[87.42px] mb-[10px]">Working</h1>
                    <p className="text-[16px] font-[600] leading-[24px] mx-2 lg:mx-0">We are currently working on this page. Our development team will release it very soon.</p>
                </div>
                <img className="w-[975px] h-[415px] my-10 mx-auto" src="https://www.investopedia.com/thmb/GxNNZKhsBydkQU7MZH-8v3gSiRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/personal-finance-work-from-home-guide_round1_grey-dfcbdfa007674b3bb6a568c8cf42b849.png" alt="Work from home illustration" />
                <div className="flex items-center gap-4 my-20 justify-center">
                    <RiArrowGoBackLine size={24} />
                    <a href="/" className="text-[16px] font-[600] leading-[24px] hover:underline">Go Home</a>
                </div>
            </div>
        </div>
    );
};

export default Working;
