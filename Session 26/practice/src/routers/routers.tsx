import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Notfound from "../pages/Notfound";
import Product from "../pages/Product";
import Detail from "../pages/Detail";
import ListUser from "../pages/ListUser";
import UserDetail from "../pages/UserDetail";

const routers = createBrowserRouter([
    {path: '/home', element: <Home/>},
    {path : '/contact', element: <Contact/>},
    {path:'/Login', element:<Login/>},
    {path:'/Register', element:<Register/>},
    {path : '/*',element : <Notfound/>},
    {path:'/product', element:<Product/>},
    {path:'/detail',element:<Detail/>},
    {path:'/listuser',element:<ListUser/>},
    {path:'/userdetail/:id',element:<UserDetail/>}
    
])

export default routers;