import { useState } from "react";
import { Link } from 'react-router-dom';
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {

    return (
        <>
        <div className="hidden lg:flex flex-row justify-between w-full px-4 py-2 bg-[#f5f5de]">
            <div className="flex flex-row">
                <img src="../images/logo.png" alt="logo" className="w-24 h-24"/>
                <p className="self-center text-3xl md:text-2xl font-bold">OCEAN VIEW OASIS</p>
            </div>
            

            <div className="self-center">
                <ul className="flex flex-row">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/floor_plan">Floor plan</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact_us">Contact us</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row self-center border-2 border-s-zinc-500 border-[#f5f5de] py-5 ps-4">
                <div className="flex flex-col font-bold me-3">
                    <p>Schedule a tour :</p>
                    <p>+94-768521-069</p>
                </div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="bg-cta-color text-white p-3 rounded-full h-1/2 self-center">Discover Your New Home</a>
            </div>
        </div>

        <HamburgerMenu />
        </>


    );

}

export default Navbar;