import carouselOne from "../assets/photo-1570101945621-945409a6370f.jpg";
import carouselTwo from "../assets/photo-1579586337278-3befd40fd17a.jpg";
import carouselThree from "../assets/istockphoto-1473323104-170667a.webp";

const Carosel = () => {
    return (
        <div>
            <div className="rounded">
                <div className="carousel w-full h-32 md:h-96">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={carouselTwo} className="w-full opacity-80" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide2" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={carouselOne} className="w-full opacity-80" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide3" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={carouselThree} className="w-full opacity-80" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide1" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Carosel;