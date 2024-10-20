import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Utllity/UseAuth";
import PropTypes from 'prop-types';


const PrivatRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if(loading){
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-md text-emerald-900"></span>
                <span className="loading loading-bars loading-lg text-emerald-900"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivatRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivatRoute;