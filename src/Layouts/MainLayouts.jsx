import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const MainLayouts = () => {
    return (
        <div className="max-w-[1250px] mx-auto">
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            <div className="min-h-[275px]">
                
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;