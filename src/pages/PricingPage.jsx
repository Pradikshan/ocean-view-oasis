import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";
import PricingCard from "../components/PricingCard";
import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard, MdOutlineAccountBalanceWallet, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";

const PricingPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
   

    const closeModal = () => setIsModalOpen(false);
    

    console.log(isModalOpen);

    return (
        <>
        <div>
            <p className="text-center text-3xl font-bold mt-4">Renting options</p>
            <div className="flex flex-row">
                <PricingCard />
                <PricingCard />
                <PricingCard />
                <PricingCard />
            </div>
        </div>

        <div className="mt-16">
            <p className="text-center text-3xl font-bold mt-4">Buying options</p>
            <div className="flex flex-row">
                <PricingCard />
                <PricingCard />
                <PricingCard />
                <PricingCard />
            </div>
        </div>
        
        {/* <motion.button 
        className="bg-black text-white" 
        onClick={() => (isModalOpen ? closeModal() : openModal())}
        whileHover={{ scale: 2.1}}
        whileTap={{ scale: 0.9}}>
            Click me</motion.button>

        {isModalOpen && <Modal isModalOpen={isModalOpen} handleClose={closeModal} text={"asjjhask"}/>} */}
        </>

        
    );
}

export default PricingPage;