import { Helmet } from "react-helmet-async";
import {useLocation, useNavigate } from "react-router-dom";

// import 'animate.css';
import toast from "react-hot-toast";
import UseAuth from "../Utllity/UseAuth";

const UpdateProfile = () => {
    const { updateUser } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation()



    const handleUpdateUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        // Update userProfile
        updateUser(name, photo)
            .then(res => {
                console.log(res.user);
                toast.success('Login Successfully!')
                e.target.reset()
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    
    return (
        <>
          <div className="pt-28">
          <Helmet>
                <title>Residential-updateProfile!!</title>
            </Helmet>
            <div className="flex justify-center items-center px-8">
                <div className="w-full md:w-3/5 lg:w-1/3 mx-auto p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                    <h1 className="text-xl font-bold text-center p-4 animate__animated animate__fadeInDown animation-duration: 2s">
                        Update Profile
                        </h1>
                    <form onSubmit={handleUpdateUser}>
                        <div className="">
                            <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name" id="" placeholder="User name" required />
                        </div>
                        <div className="">
                            <input className="w-full mb-6 p-4 border border-gray-300 rounded-lg outline-0" type="photo" name="photo" id="" placeholder="Photo URL" />
                        </div>
                        <div className="">
                            <button href="#_" type="submit" className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full "></span>
                                <span className="relative">Continue</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </>
    );
};

export default UpdateProfile;