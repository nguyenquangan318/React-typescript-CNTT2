import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Notfound from "../pages/Notfound";
import PrivateRoute from "./PrivateRoute";

export const routers = createBrowserRouter([
    { path: "*", element: <Notfound></Notfound> },
    {
        path: "/", element: <App></App>, children: [
            { path: "about", element: <About></About> }
        ]
    },
    { path: "/home", element: <Home></Home> },
    { path: "/to-home", element: <Navigate to={"/home"}></Navigate> },
    { path: "/products/:id", element: <PrivateRoute><Products></Products></PrivateRoute> },

])