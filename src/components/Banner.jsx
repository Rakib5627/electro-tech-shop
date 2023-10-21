import banner from "../assets/pexels-victoria-strelkaph-11034413.jpg"

const Banner = () => {
    return (
        <div className="my-20">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-4xl font-bold">Great Deal With Exciting Offers</h1>
                        <p className="mb-5"></p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;