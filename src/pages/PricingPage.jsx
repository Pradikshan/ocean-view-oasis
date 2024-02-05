import { motion } from "framer-motion";
import { useState } from "react";
import { useFetch } from "../utils/hooks/useFetch";
import Modal from "../components/Modal";
import PricingCard from "../components/PricingCard";

import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard, MdOutlineAccountBalanceWallet, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import IconText from "../components/IconText";

const PricingPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
   

    const closeModal = () => setIsModalOpen(false);
    

    // console.log(isModalOpen);

    const {data, loading, error } = useFetch("/assets/pricing.json");

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error...</p>

    if (!data) return null;

   
    // return (
        
    //     // data.map((category) => (
    //     //     <p>{category.categoryId}</p>
    //     // ))
    // );


    


    
    return (
        <>
        <div>
            <p className="text-center text-3xl font-bold mt-4">Renting options</p>
            <div className="flex flex-row">
                {data
                .filter((category) => category.categoryId === 1)
                .flatMap((category) => 
                category.options.map((apartment) => (
                    <>
                    <PricingCard image={apartment.image} title={apartment.title} />
                    <IconText icon={apartment.info.icon} text={apartment.info.text} />
                    </>
                )     
                ))}  
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