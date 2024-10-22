
const Footer = () => {
    
    return (
        <div className="bg-base-200 mt-10 px-4 ">
            <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 container mx-auto px-8 py-10">


                <div className=" flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                    <p className="text-xl text-gray-500 font-bold pb-2">Residential<span className="text-emerald-900">Zillow</span></p>
                    </div>
                    <div className="flex flex-col space-y-2">
                    <a className="">Branding</a>
                    <a className="">Design</a>
                    <a className="">Marketing</a>
                    <a className="">Advertisement</a>
                    </div>
                </div>


                <div className=" flex flex-col items-center md:items-start">
                    <h6 className="footer-title">Layouts</h6>
                    <a href="/about" className="link link-hover">About us</a>
                    <a href="/contact" className="link link-hover">Contact</a>
                    <a href="/support" className="link link-hover">Support</a>
                    <a href="/blogs" className="link link-hover">Blogs</a>
                </div>

                <div className=" flex flex-col items-center md:items-start">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

                <div className="">
                    <form className="">
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="">
                            <label className="label">
                                <span className="">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="px-2 md:px-4 py-4 border outline-none" />
                                <button className="bg-emerald-900 text-white px-2 rounded-r-lg">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;