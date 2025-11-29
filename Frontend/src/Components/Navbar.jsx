import React from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../Context/SiteContext";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-end gap-5 items-center h-16 px-4">
                {
                    [
                        { to: '/', label: 'Home' },
                        { to: '/login', label: 'Login' },
                        { to: '/register', label: 'Register' }
                    ].map((elem, index) => <Link className="hover:text-blue-400 font-medium" to={elem.to} key={index} >{elem.label}</Link>)
                }         
            </div>
        </nav>
    );
};

export default Navbar;
