import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import IconText from "./IconText";

const PricingCard = () => {
    return (
        <div className="rounded-lg shadow-2xl w-full h-full m-5 p-5">
            <div className="">
                <img src="../images/1bed_ap-min.jpg" alt="apartment" className="w-full h-full object-cover" />
            </div>

            <div className="mt-5">
                <p className="text-xl font-bold">One bedroom apartment</p>
                <IconText icon={<FaRegMoneyBillAlt />} text={"Monthly rent: $1,500"} />
                <IconText icon={<LiaFileContractSolid />} text={"Lease term: 12 months"} />
                <IconText icon={<MdSpaceDashboard />} text={"800 sq. ft."} />
                <p>Square footage: 800 sq. ft.</p>
                <IconText icon={<MdOutlineBedroomParent />} text={"1 bedroom"} />
                    
                 
                <p>Bedrooms: 1</p>
                <p>Bathrooms: 1</p>
                <p>Amenities: Balcony</p>
                <p>Deposit: $1,000</p>
                <p>Availability: Available now</p>
            </div>

            {/* TOD: add a CTA */}

        </div>

    );
}

export default PricingCard;