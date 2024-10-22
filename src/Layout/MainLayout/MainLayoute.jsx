

import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Nav/Navbar";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";




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
            {/* <ScrollTopButton /> */}
        </div>
    );
};

export default MainLayoute;
