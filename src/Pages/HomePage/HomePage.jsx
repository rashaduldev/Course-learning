import Faq from "../../components/Faq";
import Hero from "../../components/Hero";
import Instuctor from "../../components/Instuctor";
import Course from "../Course/Course";


const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Course/>
            <Instuctor/>
            <Faq/>
        </div>
    );
};

export default HomePage;