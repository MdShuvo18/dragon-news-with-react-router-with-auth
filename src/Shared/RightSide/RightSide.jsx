
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import image1 from '../../../src/assets/qZone1.png'
import image2 from '../../../src/assets/qZone2.png'
import image3 from '../../../src/assets/qZone3.png'
const RightSide = () => {
    return (
        <div>
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-black">Login With</h2>
                <button className="btn btn-outline w-full mb-2">
                    <FaGoogle></FaGoogle>
                    <span className="ml-2">Login With Google</span>
                </button>
                <button className="btn btn-outline w-full">
                    <FaTwitter></FaTwitter>
                    <span className="ml-2">Login With Twitter</span>
                </button>
            </div>

            <div className="">
                <h2 className="text-2xl font-semibold text-black">Find Us On</h2>

                <a className="flex items-center p-2 gap-2 border-solid rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    <span> Facebook</span>
                </a>
                <a className="flex items-center p-2 gap-2 border-solid " href="">
                    <FaTwitter></FaTwitter>
                    <span> Twitter</span>
                </a>
                <a className="flex items-center p-2 gap-2 border-solid rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    <span> Instagram</span>
                </a>
            </div>

            <div className="space-y-2 p-2">
                <h2 className="text-2xl font-semibold text-black">Q-Zone</h2>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
               
            </div>
        </div>
    );
};

export default RightSide;