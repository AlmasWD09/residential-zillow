import { Link } from "react-router-dom";
import "./Blogs.css"
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Blogs = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <>
            <Helmet>
                <title>Residential-blogs!!</title>
            </Helmet>
                {/* blogs banner */}
                <div className=" h-[160px] md:h-[250px] lg:h-[300px] flex items-center rounded bannerPhto mt-5">
                    <div className="container mx-auto w-full flex justify-between text-white px-4 md:px-10" >
                        <h1 className="text-xl md:text-3xl"data-aos="fade-right">All Posts</h1>
                        <div className="flex  items-center gap-2 md:gap-4">
                            <button className="flex items-center hover:text-emerald-800 hover:font-bold text-xs"><Link to="/">Home</Link></button>
                            <p><IoIosArrowForward /></p>
                            <h1 className="text-sm">All Posts</h1>
                        </div>
                    </div>
                </div>

            <div className="container mx-auto px-8">


                <div className="flex flex-col lg:flex-row justify-between gap-6 mt-5 md:mt-10">
                    {/* left side image */}
                    <div className=" w-full lg:w-3/5 h-[40vh] md:h-96 ">
                        <img className="h-full w-full object-cover rounded" src="https://i.ibb.co/FxPqYbC/john-towner-UO02g-AW3c0c-unsplash.jpg" alt="" />
                    </div>

                    {/* right side Content */}
                    <div className=" lg:w-2/5">
                        <div className="relative">
                            <input type="text" name="" id="" placeholder="Search.." className="w-full md:w-3/4 lg:w-full  border outline-none px-12 py-6" />
                            <p className="absolute text-2xl top-1/3 ml-4"><FiSearch /></p>
                        </div>
                        {/* all categories */}
                        <div className="space-y-3">
                            <p className="text-xl font-semibold mt-4">Categories</p>

                            <div className="flex justify-between items-center cursor-pointer hover:text-emerald-900 hover:font-medium">
                                <p >Single-family homes</p>
                                <p className="mr-10 md:mr-60 lg:mr-32"><MdArrowOutward /></p>
                            </div>

                            <div className="flex justify-between items-center cursor-pointer hover:text-emerald-900 hover:font-medium">
                                <p>townhouses</p>
                                <p className="mr-10 md:mr-60 lg:mr-32"><MdArrowOutward /></p>
                            </div>

                            <div className="flex justify-between items-center cursor-pointer hover:text-emerald-900 hover:font-medium">
                                <p>apartments</p>
                                <p className="mr-10 md:mr-60 lg:mr-32"><MdArrowOutward /></p>
                            </div>

                            <div className="flex justify-between items-center cursor-pointer hover:text-emerald-900 hover:font-medium">
                                <p>student housing</p>
                                <p className="mr-10 md:mr-60 lg:mr-32"><MdArrowOutward /></p>
                            </div>

                            <div className="flex justify-between items-center cursor-pointer hover:text-emerald-900 hover:font-medium">
                                <p>senior living communities</p>
                                <p className="mr-10 md:mr-60 lg:mr-32"><MdArrowOutward /></p>
                            </div>

                            <div className="flex justify-between items-center cursor-pointer hover:text-emerald-900 hover:font-medium">
                                <p>vacation rentals</p>
                                <p className="mr-10 md:mr-60 lg:mr-32"><MdArrowOutward /></p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
};

export default Blogs;