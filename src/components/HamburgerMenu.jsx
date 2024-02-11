import { GiHamburgerMenu } from "react-icons/gi";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const HamburgerMenu = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const openMenu = () => {
        setToggleMenu(true);
    }

    const closeMenu = () => {
        setToggleMenu(false);
    }

    const slideIn = {
        hidden: {
            x: "-100%"
        },
        visible: {
            x: "0%"
        },
        exit: {
            x: "-100%",
        }
    }

    return (
        <>

        <div className="lg:hidden flex flex-row">
            <button className="ms-8 -mt-2" onClick={openMenu}>
                <GiHamburgerMenu style={{ fontSize: 24 }}/>
            </button>

            <div className="flex flex-row ms-8">
            <img src="../images/logo.png" alt="logo" className="w-16 h-16"/>
            <p className="self-center -ms-1 -mt-1 text-lg font-bold">OCEAN VIEW OASIS</p>
            </div>
        </div>


        {toggleMenu && (
            <AnimatePresence>
                <Backdrop onClick={closeMenu}>
                    <motion.div 
                    className="absolute z-30 w-3/4 h-full bg-secondary-color"
                    onClick={(e) => e.stopPropagation()}
                    variants={slideIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >

                    <div className="flex flex-col text-black">
                        <IoClose 
                        style={{fontSize: "30px"}}
                        className="ms-auto mx-1 mt-2" 
                        onClick={closeMenu} />
                        <ul className="flex flex-col mt-5 mobile" onClick={closeMenu}>
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
                    </motion.div>
                </Backdrop>
                
            </AnimatePresence>
        )}

        
        
        </>
    );
}

export default HamburgerMenu;