import Carousel from "../../components/Carousel";
import Faq from "../../components/Faq";
import Hero from "../../components/Hero";
import Instuctor from "../../components/Instuctor";
import Review from "../../components/Review";
import Course from "../Course/Course";


const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Course/>
            <Instuctor/>
            <Review/>
            <Carousel/>
            <Faq/>
        </div>
    );
};

export default HomePage;