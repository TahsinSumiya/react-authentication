import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register.jsx";
import NewsDetails from "../pages/news/NewsDetails.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
              
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }    
]);

export default router;