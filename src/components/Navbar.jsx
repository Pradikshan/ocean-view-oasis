import { useState } from "react";

const Navbar = () => {

    const [isToggleMenu, setIsToggleMenu] = useState(false);

    return (
        <div className="hidden md:flex flex-row justify-between w-full px-4">
            <div className="flex flex-row">
                <img src="../images/logo.png" alt="logo" className="w-24 h-24"/>
                <p className="self-center text-2xl font-bold">OCEAN VIEW OASIS</p>
            </div>
            

            <div className="self-center">
                <ul className="flex flex-row">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Floor plan</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Photo gallery</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row self-center border-2 border-s-zinc-500 border-white py-5 ps-4">
                <div className="flex flex-col font-bold me-3">
                    <p>Schedule a tour :</p>
                    <p>+94-768521-069</p>
                </div>
                <a href="#" className="bg-yellow-700 text-white p-3 rounded-full h-1/2 self-center">Discover Your New Home</a>
            </div>

        </div>
    );

}

export default Navbar;