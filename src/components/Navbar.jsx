import { useState } from "react";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { fadeInLeft, fadeOutLeft } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';

const Navbar = () => {

    const [isToggleMenu, setIsToggleMenu] = useState(false);

    const toggleMenu = () => {
        setIsToggleMenu(!isToggleMenu);
    }

    // const styles = {
    //     fadeInLeft: {
    //         animation: 'x 1s',
    //         animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    //     },
    //     fadeOutLeft: {
    //         animation: 'x 10s',
    //         animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')
    //     }
    // }

    return (
        <>
        <div className="hidden lg:flex flex-row justify-between w-full px-4 py-2">
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
                        <Link to="/photo_gallery">Photo gallery</Link> 
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

            <div className="flex flex-row self-center border-2 border-s-zinc-500 border-white py-5 ps-4">
                <div className="flex flex-col font-bold me-3">
                    <p>Schedule a tour :</p>
                    <p>+94-768521-069</p>
                </div>
                <a href="#" className="bg-slate-600 text-white p-3 rounded-full h-1/2 self-center">Discover Your New Home</a>
            </div>
        </div>
        
        
        <div className="relative">
            <div className="flex lg:hidden flex-row z-0">
                <button className="-mt-2 ms-3" onClick={toggleMenu}>
                    <GiHamburgerMenu style={{ fontSize: 24 }}/>
                </button>

                <div className="flex flex-row ms-8">
                <img src="../images/logo.png" alt="logo" className="w-16 h-16"/>
                <p className="self-center -ms-1 -mt-1 text-lg font-bold">OCEAN VIEW OASIS</p>
                </div>
            </div>

            {isToggleMenu && (
                <>
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
                    onClick={toggleMenu}
                ></div>
                
                {/* <StyleRoot>
                    <div 
                    className="fixed top-0 left-0 w-2/3 h-full text-white bg-yellow-700 z-20" 
                    style={isToggleMenu ? styles.fadeInLeft : styles.fadeOutLeft}
                    >
                        <button 
                        className="absolute right-0 p-2" 
                        style={{ fontSize: 24 }} 
                        onClick={toggleMenu}
                        >
                            <IoClose />
                        </button>

                        <ul className="flex flex-col mt-5 mobile">
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
                            <Link to="/photo_gallery">Photo gallery</Link> 
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
                </StyleRoot> */}
                
                </>
            )}
        </div>




        </>


    );

}

export default Navbar;