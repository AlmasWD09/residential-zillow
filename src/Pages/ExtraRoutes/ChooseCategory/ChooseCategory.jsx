import { useEffect } from "react";
import ChooseCategoryCard from "./ChooseCategoryCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseCategory = () => {

useEffect(()=>{
    AOS.init();
},[])
    return (
        <div className="mt-10">
            <div className="text-center" 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
                <h1 className="text-lg md:text-xl font-bold pb-2">Choose Your Category</h1>
                <p className="max-w-3xl mx-auto">Explore our diverse range of categories tailored to suit your unique needs and desires. Whether you're seeking serene tranquility, energetic social scenes,  </p>
            </div>
            <ChooseCategoryCard />
        </div>
    );
};

export default ChooseCategory;