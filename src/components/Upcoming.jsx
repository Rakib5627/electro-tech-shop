import aa from "../assets/Apple-iPhone-15-Pro-Blue-Titanium.webp"
import ab from "../assets/Infinix-Hot-30.jpg"
import ac from "../assets/Apple-iPad-2022-Blue.jpg"
import ad from "../assets/Oppo-K11-Glacier-Blue.jpg"
import ae from "../assets/Oppo-Reno10-Pro-Plus-Pink.jpg"
import af from "../assets/ZTE-nubia-Z50-Blue.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Upcoming = () => {


    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="mt-20">
            <div>
                <h1 className="text-3xl font-bold text-center my-10">Upcoming Top Products</h1>

                <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 justify-between mb-20">

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ab} alt="" />
                        <p className="text-center">iPhone 15 Pro</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ac} alt="" />
                        <p className="text-center">In 30</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={aa} alt="" />
                        <p className="text-center">iPad 15</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ad} alt="" />
                        <p className="text-center">Nubia 11</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ae} alt="" />
                        <p className="text-center">Reno 11</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={af} alt="" />
                        <p className="text-center">Reno 11 Pro</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Upcoming;