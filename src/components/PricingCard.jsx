import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard, MdOutlineAccountBalanceWallet, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import IconText from "./IconText";

const PricingCard = () => {
    return (
        <div className="rounded-lg shadow-2xl w-full h-full m-5 p-5">
            <div className="">
                <img src="../images/1bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
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
                <p className="text-xl font-bold">One bedroom apartment</p>
                <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                <IconText icon={<MdOutlineAccountBalanceWallet />} text={"Deposit: $1,000"} />
                <IconText icon={<MdOutlineEventAvailable />} text={"Availability: Available now"} />
            </div>

            <div className="flex flex-row justify-center mt-3">
                <button className="p-4 w-full font-bold rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">See details</button>
            </div>


        </div>

    );
}

export default PricingCard;