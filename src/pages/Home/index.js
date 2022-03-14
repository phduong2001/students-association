import Carousel from "./components/Carousel";
import GymClass from "./components/GymClass";
import About from "./components/About";
import Features from "./components/Features";
import GymFeature from "./components/GymFeature";
import Subscribe from "./components/Subscribe";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";

const Home = () => {
    return (
        <>
            <Carousel />
            <GymClass />
            <About />
            <Features />
            <GymFeature />
            <Subscribe />
            <Team />
            <Testimonial />
            <Blog />
        </>
    );
}

export default Home;