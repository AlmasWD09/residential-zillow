

import { Outlet } from "react-router-dom";

import Footer from "../../Pages/Shared/Footer/Footer";
import BackTopButton from "../../Pages/Utllity/BackTopButton/BackTopButton";
import Navbar from "../../Pages/Shared/Nav/Navbar";



const MainLayoute = () => {

    return (
        <div>
        {/* navbar component */}
        <div className="">
        <Navbar />
        </div>
        <div className="">  
        <Outlet />
        </div>
        {/* footer component */}
        <div className="">
        <Footer />
        </div>
        {/* scroll backTop button add */}
        <BackTopButton />
        </div>
    );
};

export default MainLayoute;
