import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import carouselOne from "../assets/photo-1603946877690-d410437c29aa.jpg";
import carouselTwo from "../assets/photo-1579586337278-3befd40fd17a.jpg";
import carouselThree from "../assets/istockphoto-1473323104-170667a.webp";


const Products = () => {

    const loadedProducts = useLoaderData()
    console.log(loadedProducts);

    return (
        <div>


            <div className="rounded">
                <div className="carousel w-full h-32 md:h-96">
                    <div id="slide1" className="carousel-item relative w-full indicator">
                        <span className="indicator-item indicator-bottom indicator-center badge  bg-blue-200 "> Get exciting Offers </span>
                        <img src={carouselTwo} className="w-full opacity-80" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide2" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full indicator">
                    <span className="indicator-item indicator-bottom indicator-center badge bg-blue-200 "> Get exciting Offers </span>
                        <img src={carouselOne} className="w-full opacity-80" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide3" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full indicator">
                    <span className="indicator-item indicator-bottom indicator-center badge bg-blue-200 "> Get exciting Offers </span>
                        <img src={carouselThree} className="w-full opacity-80" />
                        <div className="absolute hidden md:flex justify-between text-xs transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Prev</a>
                            <a href="#slide1" className="btn btn-circle bg-my-pink hover:bg-my-blue hover:text-my-of-white">Next</a>
                        </div>
                    </div>

                </div>
            </div>







            <div className="mt-20">
                {
                    loadedProducts.map(p => <Product
                        key={p._id}
                        product={p}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;