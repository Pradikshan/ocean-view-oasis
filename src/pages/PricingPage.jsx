import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';

import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard, MdOutlineAccountBalanceWallet, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import { BiCctv } from "react-icons/bi";
import IconText from "../components/IconText";


const PricingPage = () => {


    // const [selectedId, setSelectedId] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
   

    // const closeModal = () => setIsModalOpen(false);



    return (
        <div>
            <p className="text-center text-3xl font-bold mt-4">Renting options</p>
            <div className="flex flex-row justify-around">

                <div className="rounded-lg shadow-2xl w-1/4 h-full m-5 p-5">
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
                        <motion.a 
                        href="/floor_plan" 
                        className="p-3 w-full text-center font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" 
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}>
                            See details
                        {/* <motion.button 
                        className="p-3 w-full font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}
                        >
                           See details
                        </motion.button> */}
                        </motion.a>
                    </div>
                </div>

                <div className="rounded-lg shadow-2xl w-1/4 h-full m-5 p-5">
                    <div>
                        <img src="../images/2bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-bold">Two bedroom apartment</p>
                        <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $2,500"} />
                        <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                        <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,500"} />
                        <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
                    </div>

                    <div className="flex flex-row justify-center mt-3">
                        <motion.a 
                        href="/floor_plan" 
                        className="p-3 w-full text-center font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" 
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}>
                            See details
                        </motion.a>
                    </div>
                </div>
                
                <div className="rounded-lg shadow-2xl w-1/4 h-full m-5 p-5">
                    <div>
                        <img src="../images/3bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-bold">Three bedroom aprtment</p>
                        <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $3,500"} />
                        <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                        <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $2,000"} />
                        <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
                    </div>

                    <div className="flex flex-row justify-center mt-3">
                        <motion.a 
                        href="/floor_plan" 
                        className="p-3 w-full text-center font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" 
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}>
                            See details
                        </motion.a>
                    </div>
                </div>

                {/* {isModalOpen && selectedId === 1 && (
                     <div>
                        <AnimatePresence>
                            <Backdrop onClick={closeModal}>
                                <motion.div
                                key="modal"
                                className="flex flex-col w-1/2 h-1/2 bg-white rounded-xl p-20"
                                onClick={(e) => e.stopPropagation()}
                                variants={dropIn}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                >
                                    <img src="../images/1bed_ap-min.jpg" alt="apartment" className="w-48 h-48 object-cover" />
                                    <p>Explore our 1-bedroom floor plan – a harmonious blend of thoughtful design, spacious living areas, modern kitchens, and a well-appointed bedroom – creating an inviting and cozy living space for you</p>
                                    <p className="text-xl font-bold mt-4">Key features</p>
                                    <IconText 
                                    icon={<MdOutlineBedroomParent />} 
                                    text={"Intimate bedroom retreat"} />
                                    <IconText 
                                    icon={<MdOutlineKitchen />} 
                                    text={"Efficient kitchen setup"} />
                                    <IconText 
                                    icon={<MdOutlineBathroom />} 
                                    text={"Smart bathroom design"} />
                                    <IconText 
                                    icon={<MdOutlineBalcony />} 
                                    text={"Private balcony space"} />
                                    <IconText 
                                    icon={<MdOutlineLocalLaundryService />} 
                                    text={"Convinient in-unit laundry service"} />
                                    <IconText 
                                    icon={<MdOutlineChair />} 
                                    text={"Adaptable living space"} />
                                    <IconText 
                                    icon={<MdOutlineHeatPump />} 
                                    text={"Climate comfort"} />
                                    <IconText 
                                    icon={<BiCctv />} 
                                    text={"Controlled access and 24/7 surveillance"} />
                                </motion.div>
                            </Backdrop>
                        </AnimatePresence>
                    </div>
                )} */}

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