import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Main = () => {



    return (
        <div>
            <div className=" bg-amber-50">
            <div className=" mx-2 max-w-6xl md:mx-auto pb-20">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;