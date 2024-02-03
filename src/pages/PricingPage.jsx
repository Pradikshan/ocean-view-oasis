import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";

const PricingPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
   

    const closeModal = () => setIsModalOpen(false);
    

    console.log(isModalOpen);

    return (
        <>
        <motion.button 
        className="bg-black text-white" 
        onClick={() => (isModalOpen ? closeModal() : openModal())}
        whileHover={{ scale: 2.1}}
        whileTap={{ scale: 0.9}}>
            Click me</motion.button>

        {isModalOpen && <Modal isModalOpen={isModalOpen} handleClose={closeModal} text={"asjjhask"}/>}
        </>

        
    );
}

export default PricingPage;