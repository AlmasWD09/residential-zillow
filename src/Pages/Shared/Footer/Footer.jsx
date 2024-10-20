
const Footer = () => {
    
    return (
        <div className="bg-base-200 mt-10 ">
            <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 max-w-7xl mx-auto px-8 py-10">


                <div className=" flex flex-col items-center md:items-start">
                    <div className="flex items-center py-3">
                        <img src="https://i.ibb.co/0V8pHfj/logo.webp" alt="" />
                        <p className="text-xl font-bold text-emerald-900">Zillow</p>
                    </div>
                    <a className="">Branding</a>
                    <a className="">Design</a>
                    <a className="">Marketing</a>
                    <a className="">Advertisement</a>
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
                        <fieldset className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="px-4 md:px-2 lg:px-4 py-4 border outline-none" />
                                <button className="px-4 lg:px-2 bg-emerald-900 text-white join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;