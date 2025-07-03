import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import About from './../pages/about/About';
import Contact from './../pages/contact/Contact';
import Home from './../components/home/Home';
export const Router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path: "/contact",
                element: <Contact />
            },

        ]
    }
])