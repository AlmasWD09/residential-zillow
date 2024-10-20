import {
    createBrowserRouter,
} from "react-router-dom";




import MainLayoute from "../../Layout/MainLayout/MainLayoute";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Support from "../Support/Support";
import ViewDetails from "../ViewDetails/ViewDetails";
import Blogs from "../Blogs/Blogs";
import PrivatRoute from "../PrivatRoutes/PrivatRoute";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../About/About";
import Contact from "../Contact/Contact";


//  all routers
const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoute />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />,
            },
            {
                path:'/support',
                element:<Support />
            },
            {
                path:"/blogs",
                element:<PrivatRoute><Blogs /></PrivatRoute>,
            },
           
            {
                path:"/updateProfile",
                element:<PrivatRoute><UpdateProfile /></PrivatRoute>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />,
            },
            {
                path:"/viewDetails/:id",
                element:<PrivatRoute><ViewDetails /></PrivatRoute>,
            },
        ],
    },
]);
export default routers;