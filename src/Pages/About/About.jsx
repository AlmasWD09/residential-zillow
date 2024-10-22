import { Helmet } from "react-helmet-async";
import "./About.css"
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const About = () => {


    //useEffect
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
          <div className="pt-14">
          <Helmet>
                <title>Residential-about!!</title>
            </Helmet>
            <div className=" h-[160px] md:h-[250px] lg:h-[300px] flex flex-col justify-center items-center rounded aboutPicture mt-5">
                <h1 className="text-xl md:text-3xl lg:text-4xl  text-white text-center">About Us</h1>
                <div className="flex  items-center text-white gap-2 pt-3 md:gap-4">
                    <button className="flex items-center hover:text-emerald-800 hover:font-bold text-xs"><Link to="/">Home</Link></button>
                    <p><IoIosArrowForward /></p>
                    <h1 className="text-sm">About us</h1>
                </div>
            </div>
            <div className="container mx-auto mt-10 px-8">
                {/*  */}
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-3 lg:gap-0">
                    <div className="w-full lg:w-1/2">
                        <figure>
                            <img className="rounded" src="https://i.ibb.co/5G4QpDp/vita-vilcina-Kt-Oid0-FLjq-U-unsplash.webp" alt="" />
                        </figure>
                    </div>

                    <div className="w-full lg:w-1/2 p-4" data-aos="fade-left">
                        <p className="first-letter:text-3xl first-letter:font-semibold">Green spaces are also integral to residential estates, with parks, gardens, and walking trails offering residents a chance to connect with nature and enjoy outdoor activities. Playgrounds, sports courts, and recreational areas cater to both children and adults, promoting active lifestyles and healthy living.</p>
                        <h3 className="text-xl font-medium mt-2">Facilitys</h3>
                        <ol className="list-decimal px-4">
                            <li>Community Cente</li>
                            <li>Swimming Pool</li>
                            <li>Playgrounds</li>
                            <li>Sports Courts</li>
                            <li>Reading Rooms</li>
                        </ol>
                        <p className="">More...</p>
                    </div>
                </div>


                {/* second */}
                <div className="mt-10">
                    <h1>MEET OUR TEAM</h1>
                    <h1 className="text-2xl font-bold">Our Team Of Experts</h1>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-5">
                    {/* card one */}
                    <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-emerald-900 hover:text-white py-10">
                        <div className="">
                            <img className="h-[200px] rounded" src="https://i.ibb.co/Lr8NrP6/foto-sushi-6anudmp-ILw4-unsplash.webp" alt="" />
                        </div>
                        <div className="text-center my-2 space-y-2" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className="font-semibold">Carl Parker</h3>
                            <h1 className="text-sm">Guardian of Eternity</h1>
                            <div className="flex justify-center gap-3">
                                <span className="cursor-pointer"><FaFacebook /></span>
                                <span className="cursor-pointer"><FaTwitter /></span>
                                <span className="cursor-pointer"><FaInstagramSquare /></span>
                            </div>
                        </div>
                    </div>
                    {/* card two */}
                    <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-emerald-900 hover:text-white py-10">
                        <div className="">
                            <img className="h-[200px] w-full rounded" src="https://i.ibb.co/bLSvhVD/image2.webp" alt="" />
                        </div>
                        <div className="text-center my-2 space-y-2" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className="font-semibold">Anna Doe</h3>
                            <h1 className="text-sm">Warden of Perpetuity</h1>
                            <div className="flex justify-center gap-3">
                                <span className="cursor-pointer"><FaFacebook /></span>
                                <span className="cursor-pointer"><FaTwitter /></span>
                                <span className="cursor-pointer"><FaInstagramSquare /></span>
                            </div>
                        </div>
                    </div>
                    {/* card three */}
                    <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-emerald-900 hover:text-white py-10">
                        <div className="">
                            <img className="h-[200px] rounded" src="https://i.ibb.co/XCD9kdx/image03.webp" alt="" />
                        </div>
                        <div className="text-center my-2 space-y-2" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className="font-semibold">David Doe</h3>
                            <h1 className="text-sm">Sentinel of the Ages</h1>
                            <div className="flex justify-center gap-3">
                                <span className="cursor-pointer"><FaFacebook /></span>
                                <span className="cursor-pointer"><FaTwitter /></span>
                                <span className="cursor-pointer"><FaInstagramSquare /></span>
                            </div>
                        </div>
                    </div>
                    {/* card four */}
                    <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-emerald-900 hover:text-white py-10">
                        <div className="">
                            <img className="h-[200px] rounded" src="https://i.ibb.co/BqY5Zvc/image04.webp" alt="" />
                        </div>
                        <div className="text-center my-2 space-y-2" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className="font-semibold">Lauren Miller</h3>
                            <h1 className="text-sm">Custodian of Continuum</h1>
                            <div className="flex justify-center gap-3">
                                <span className="cursor-pointer"><FaFacebook /></span>
                                <span className="cursor-pointer"><FaTwitter /></span>
                                <span className="cursor-pointer"><FaInstagramSquare /></span>
                            </div>
                        </div>
                    </div>
                    {/* card five */}
                    <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-emerald-900 hover:text-white py-10">
                        <div className="">
                            <img className="h-[200px] rounded" src="https://i.ibb.co/LpK9xYb/image05.webp" alt="" />
                        </div>
                        <div className="text-center my-2 space-y-2" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className="font-semibold">Carl Parker</h3>
                            <h1 className="text-sm">Custodian of Forever</h1>
                            <div className="flex justify-center gap-3">
                                <span className="cursor-pointer"><FaFacebook /></span>
                                <span className="cursor-pointer"><FaTwitter /></span>
                                <span className="cursor-pointer"><FaInstagramSquare /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default About;