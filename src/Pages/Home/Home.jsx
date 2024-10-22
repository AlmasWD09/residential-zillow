

import Estaties from "../../components/Curds/Estaties/Estaties";
import Slider from "../../components/Slider/Slider";
import { Helmet } from 'react-helmet-async';
import ChooseCategory from "../ExtraRoutes/ChooseCategory/ChooseCategory";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Residential-Home</title>
            </Helmet>
            <div className="container mx-auto px-8 ">
                <Slider />
                <Estaties />
                <ChooseCategory />
            </div>
        </>
    );
};

export default Home;