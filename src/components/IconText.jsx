import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices, MdOutlineSpaceDashboard, MdSpaceDashboard, MdOutlineAccountBalanceWallet, MdOutlineEventAvailable } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";


const iconMapping = {
    '<FaRegMoneyBillAlt />': <FaRegMoneyBillAlt />,
    '<LiaFileContractSolid />': <LiaFileContractSolid />,
    // Add mappings for other icons
  };

const IconText = ({ icon, text }) => {

    const iconComponent = iconMapping[icon];

    return (
        <div className="flex flex-row mt-3 md:mt-1">
            <div className="text-2xl items-center pe-1">
                {iconComponent}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}

export default IconText;