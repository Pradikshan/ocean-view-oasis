import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "../components/Backdrop";
import { useState } from "react";

import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard, MdOutlineAccountBalanceWallet, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import { BiCctv } from "react-icons/bi";
import IconText from "../components/IconText";


const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0vh",
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

const PricingPage = () => {


    const [selectedId, setSelectedId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
   

    const closeModal = () => setIsModalOpen(false);



    return (
        <div>
            <p className="text-center text-3xl font-bold mt-4">Renting options</p>
            <div className="flex flex-row justify-around">

                <div key={1} className="rounded-lg shadow-2xl w-1/4 h-full m-5 p-5">
                    <div className="flex-shrink-0">
                        <img src="../images/1bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-bold">One bedroom apartment</p>
                        <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                        <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                        <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,000"} />
                        <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
                    </div>

                    <div className="flex flex-row justify-center mt-3">
                        <motion.button 
                        className="p-3 w-full font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}
                        onClick={() => {
                            setSelectedId(1); 
                            openModal();
                        }}>
                            See details
                        </motion.button>
                    </div>
                </div>

                <div key={2} className="rounded-lg shadow-2xl w-1/4 h-full m-5 p-5">
                    <div>
                        <img src="../images/2bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-bold"></p>
                        <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                        <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                        <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,000"} />
                        <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
                    </div>

                    <div className="flex flex-row justify-center mt-3">
                        <motion.button 
                        className="p-3 w-full font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}
                        onClick={() => {
                            setSelectedId(2); 
                            openModal();
                        }}>
                            See details
                        </motion.button>
                    </div>
                </div>
                
                <div key={3} className="rounded-lg shadow-2xl w-1/4 h-full m-5 p-5">
                    <div>
                        <img src="../images/3bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-bold"></p>
                        <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                        <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                        <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,000"} />
                        <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
                    </div>

                    <div className="flex flex-row justify-center mt-3">
                        <motion.button 
                        className="p-3 w-full font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}
                        onClick={() => {
                            setSelectedId(3); 
                            openModal();
                        }}>
                            See details
                        </motion.button>
                    </div>
                </div>

                {/* {isModalOpen && selectedId === 1 && (
                    <Modal isModalOpen={isModalOpen} handleClose={closeModal} text={"asjjhask"} />
                )} */}

                {isModalOpen && selectedId === 1 && (
                     <div>
                        <AnimatePresence>
                            <Backdrop onClick={closeModal}>
                                <motion.div
                                key="modal"
                                className="flex flex-col w-3/4 bg-white rounded-xl p-20"
                                onClick={(e) => e.stopPropagation()}
                                variants={dropIn}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                >
                                    <p>Discover our 2-bedroom floor plan – an inviting blend of thoughtful design, expansive living areas, contemporary kitchens, and two well-appointed bedrooms – crafting a warm and welcoming living space tailored just for you</p>
                                    <p className="text-xl font-bold mt-4">Key features</p>
                                    <IconText 
                                    icon={<MdOutlineBedroomParent />} 
                                    text={"Two comfortable bedrooms"} />
                                    <IconText 
                                    icon={<MdOutlineKitchen />} 
                                    text={"Gourmet kitchen space"} />
                                    <IconText 
                                    icon={<MdOutlineBathroom />} 
                                    text={"Dual vanity bathrooms"} />
                                    <IconText 
                                    icon={<MdOutlineBalcony />} 
                                    text={"Private balcony retreats"} />
                                    <IconText 
                                    icon={<MdOutlineLocalLaundryService />} 
                                    text={"Convinient in-unit laundry service"} />
                                    <IconText 
                                    icon={<MdOutlineChair />} 
                                    text={"Flexible living areas"} />
                                    <IconText 
                                    icon={<MdOutlineHeatPump />} 
                                    text={"Climate control for bedrooms"} />
                                    <IconText 
                                    icon={<BiCctv />} 
                                    text={"Controlled access and 24/7 surveillance"} />
                                </motion.div>
                            </Backdrop>
                        </AnimatePresence>
                    </div>
                )}

            </div>
        </div>

        
    );


    

    // console.log(isModalOpen);

    // const {data, loading, error } = useFetch("/assets/pricing.json");

    // if (loading) return <p>Loading...</p>

    // if (error) return <p>Error...</p>

    // if (!data) return null;

   
    // return (
        
    //     // data.map((category) => (
    //     //     <p>{category.categoryId}</p>
    //     // ))
    // );
    
    // return (
    //     <>
    //     <div>
    //         <p className="text-center text-3xl font-bold mt-4">Renting options</p>
    //         <div className="flex flex-row">
    //             {data
    //             .filter((category) => category.categoryId === 1)
    //             .flatMap((category) => 
    //             category.options.map((apartment) => (
    //                 <>
    //                 <PricingCard image={apartment.image} title={apartment.title} />
    //                 <IconText icon={apartment.info.icon} text={apartment.info.text} />
    //                 </>
    //             )     
    //             ))}  
    //         </div>
    //     </div>

    //     <div className="mt-16">
    //         <p className="text-center text-3xl font-bold mt-4">Buying options</p>
    //         <div className="flex flex-row">
    //             <PricingCard />
    //             <PricingCard />
    //             <PricingCard />
    //             <PricingCard />
    //         </div>
    //     </div>
        
    //     {/* <motion.button 
    //     className="bg-black text-white" 
    //     onClick={() => (isModalOpen ? closeModal() : openModal())}
    //     whileHover={{ scale: 2.1}}
    //     whileTap={{ scale: 0.9}}>
    //         Click me</motion.button>

    //     {isModalOpen && <Modal isModalOpen={isModalOpen} handleClose={closeModal} text={"asjjhask"}/>} */}
    //     </>

        
    // );
}

export default PricingPage;