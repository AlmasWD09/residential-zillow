import { Helmet } from "react-helmet-async";
import AccordingPage from "../Home/AccordingPage/AccordingPage";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Support.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Support = () => {

    //useEffect
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
            <Helmet>
                <title>Residential-support!!</title>
            </Helmet>
            <div className=" h-[160px] md:h-[250px] lg:h-[300px] flex flex-col justify-center items-center rounded supportPicture mt-5">
                <h1 className="text-xl md:text-3xl lg:text-4xl  text-white text-center">Support</h1>
                <div className="flex  items-center text-white gap-2 pt-3 md:gap-4">
                    <button className="flex items-center hover:text-emerald-800 hover:font-bold text-xs"><Link to="/">Home</Link></button>
                    <p><IoIosArrowForward /></p>
                    <h1 className="text-sm">Support</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 mt-10">
                <h1 className="text-2xl font-bold text-center ">Our Support Pollicy</h1>
                <div className="flex flex-col lg:flex-row gap-6 mt-5">
                    {/* lefi side content */}
                    <div className="border-2 border-black w-full lg:w-1/2">
                        <h1 className="bg-slate-950 py-4 text-white text-center">What's Included</h1>
                        <div className="px-4 py-2" data-aos="fade-right">
                            <ul className="list-decimal px-4 space-y-3">
                                <li>
                                    <p>
                                        <span className="font-bold">Amenities Galore</span>: Residential estates often boast an array of amenities, ranging from swimming pools and fitness centers to tennis courts and playgrounds. Residents can enjoy leisure activities without leaving the confines of the estate.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">Community Facilities</span>:Many residential estates offer community facilities such as clubhouse lounges, function rooms, and barbecue areas, fostering a sense of community among residents and providing spaces for social gatherings and events.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">Security and Privacy</span>:Security is a top priority in residential estates, with features such as gated entrances, security patrols, and surveillance systems ensuring the safety and privacy of residents. This creates a sense of exclusivity and peace of mind for homeowners
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* right side content */}
                    <div className="border-2 border-black w-full lg:w-1/2">
                        <h1 className="bg-slate-950 py-4 text-white text-center">What's Not Included</h1>
                        <div className="px-4 py-2">
                            <ul className="list-decimal px-4 space-y-3" data-aos="fade-left">
                                <li>
                                    <p>
                                        <span className="font-bold">Personal Property Maintenance</span>: While residential estates often provide maintenance for common areas and amenities, upkeep of individual properties like lawn care
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">Property Taxes</span>: Property taxes are not typically included in the fees or expenses associated with residential estates.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">Special Assessments</span>: In some cases, residential estates may require special assessments to cover unexpected expenses or major capital improvements. These assessments are typically not included in regular homeowners association fees and are additional costs that homeowners may need to cover.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <AccordingPage />
        </>
    );
};

export default Support;