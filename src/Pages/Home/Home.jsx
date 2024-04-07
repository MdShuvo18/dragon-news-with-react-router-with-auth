import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSide/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSide from "../../Shared/RightSide/RightSide";
import Slider from "./Slider";
import NewsSection from "./NewsSection";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className=""><LeftSide></LeftSide></div>
                <div className="col-span-1 lg:col-span-2 text-4xl space-y-4">
                    {
                        news.map(aNews => <NewsSection key={aNews._id} news={aNews}></NewsSection>)
                    }
                </div>
                <div className=""><RightSide></RightSide></div>
            </div>
        </div>
    );
};

export default Home;