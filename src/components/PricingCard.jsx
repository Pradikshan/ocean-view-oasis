import IconText from "./IconText";
import { motion } from "framer-motion";


const PricingCard = ({ image, title, icon, text }) => {
    return (
        <div className="rounded-lg shadow-2xl w-full h-full m-5 p-5">
            <div>
                <img src={image} alt="apartment" className="w-full h-full object-cover" />
            </div>

            {/* <div className="mt-5">
                <p className="text-xl font-bold">One bedroom apartment</p>
                <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                <IconText icon={<MdSpaceDashboard />} text={"800 sq. ft."} />
                <IconText icon={<MdOutlineBedroomParent />} text={"1 bedroom"} />
                <IconText icon={<MdOutlineBathroom />} text={"1 bathroom"} />
                <IconText icon={<MdOutlineBalcony />} text={"Private balcony"} />
                <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,000"} />
                <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
            </div> */}

            <div className="mt-5">
                <p className="text-xl font-bold">{title}</p>
                <IconText icon={ icon } text={ text } />
                {/* <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,000"} />
                <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} /> */}
            </div>

            <div className="flex flex-row justify-center mt-3">
                <motion.button 
                className="p-3 w-full font-bold rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9}}>See details</motion.button>
            </div>


        </div>

    );
}

export default PricingCard;