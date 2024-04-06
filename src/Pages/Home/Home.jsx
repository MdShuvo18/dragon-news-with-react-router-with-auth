import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSide/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSide from "../../Shared/RightSide/RightSide";
import Login from "../Login/Login";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border-solid"><LeftSide></LeftSide></div>
                <div className="col-span-1 lg:col-span-2 border-solid text-4xl ">News Coming soon...</div>
                <div className="border-solid"><RightSide></RightSide></div>
            </div>
        </div>
    );
};

export default Home;