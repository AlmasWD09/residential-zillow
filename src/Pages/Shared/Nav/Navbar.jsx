import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Utllity/UseAuth";
import { Tooltip } from 'react-tooltip'
import { useState } from "react";



const Navbar = () => {
    const { user,logOut} = UseAuth();
    const [navbar, setNavbar] = useState(false)
    const navigate = useNavigate();
    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About Us</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/support"><li>Support</li></NavLink>
        {
        user&&<>
        <NavLink to="/blogs"><li>Blogs</li></NavLink>
        <NavLink to="/updateProfile"><li>Update Profile</li></NavLink>
        </> 
        }
    </>

    const handleClickZillow = () => {
        navigate('/')
    }


    // logOut button 
    const handleLogOut = () =>{
        logOut();
        navigate('/')
    }

 // background color add in navbar scroll
 const changeBackground = () => {
    if (window.scrollY >= 32) {
        setNavbar(true)
    }
    else { setNavbar(false) }
}
window.addEventListener('scroll', changeBackground)



    return (
        <div className={navbar ? 'fixed w-full bg-emerald-50 z-30  shadow-2xl' : 'fixed w-full z-30  shadow-2xl'}>
            <nav className="navbar flex justify-center  container mx-auto px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* links */}
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={handleClickZillow}>
                        <p className="text-xl text-gray-500 font-bold">Residential<span className="text-emerald-900">Zillow</span></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 gap-10 flex items-center">
                        {/* links */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="w-10 h-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-place="left" data-tooltip-content={user.displayName}>
                            <img className="rounded-full" src={user.photoURL} alt={user.photoURL} />
                            <Tooltip id="my-tooltip" />
                        </div>
                            :
                            ''
                    }

                    
                    {/* button condition rendering */}
                    {
                        user ?
                            <button onClick={handleLogOut} href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span className="relative">LogOut</span>
                            </button>
                            :
                            <Link to="/login">
                                <button href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                    <span className="relative">Login</span>
                                </button>
                            </Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;