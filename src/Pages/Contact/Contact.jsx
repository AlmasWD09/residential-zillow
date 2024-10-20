import { Helmet } from "react-helmet-async";
import { IoIosArrowForward } from "react-icons/io";
import "./Contact.css"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Residential-contact!!</title>
            </Helmet>
            <div className=" h-[160px] md:h-[250px] lg:h-[300px] flex flex-col justify-center items-center rounded contactPicture mt-5">
                <h1 className="text-xl md:text-3xl lg:text-4xl  text-white text-center">Contact</h1>
                <div className="flex  items-center text-white gap-2 pt-3 md:gap-4">
                    <button className="flex items-center hover:text-emerald-800 hover:font-bold text-xs"><Link to="/">Home</Link></button>
                    <p><IoIosArrowForward /></p>
                    <h1 className="text-sm">Contact</h1>
                </div>
            </div>
            {/*  */}
            <div>
                <div className="max-w-xl mx-auto text-center mt-10">
                    <h1 className="text-2xl font-semibold pb-2">Have any questions?</h1>
                    <p>Subscribe to our newsletters, call us to book a meetup or send us emails to request for
                        service consultation.</p>
                </div>
                {/*  */}
                <div className="max-w-3xl mx-auto bg-base-100 p-6 mt-10">
                   <div className="flex flex-col md:flex-row gap-0 md:gap-3">
                   <div className="w-full">
                        <p>Your name*</p>
                        <input className="w-full mb-4 md:mb-6 p-4 border border-gray-300  outline-0" type="text" name="name" id="" placeholder="Your name" required />
                    </div>
                    <div className="w-full">
                        <p>Your email*</p>
                        <input className="w-full mb-4 md:mb-6 p-4 border border-gray-300  outline-0" type="email" name="email" id="" placeholder="Your email" required />
                    </div>
                   </div>
                   <div className="w-full">
                        <p>Phone number*</p>
                        <input className="w-full mb-4 md:mb-6 p-4 border border-gray-300  outline-0" type="number" name="number" id="" placeholder="phone number" required />
                    </div>
                   <div className="w-full">
                        <p>Send Message*</p>
                       <textarea className="w-full  p-4 border border-gray-300  outline-0" name="text" id="" cols="30" rows="10"></textarea>
                    </div>
                    {/* submit button */}
                    <button type="submit" href="#_" className=" relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                    <span className="relative">Submit Now</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;