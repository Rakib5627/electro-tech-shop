import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Main = () => {



    return (
        <Navbar>
            <div className=" bg-base-100">
            <div className=" mx-2 max-w-6xl md:mx-auto pb-20">
                
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </Navbar>
    );
};

export default Main;