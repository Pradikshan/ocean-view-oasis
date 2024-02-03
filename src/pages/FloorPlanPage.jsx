import IconText from "../components/IconText";
import ImageOverlay from "../components/ImageOverlay";
import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineCheckroom, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump  } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import ImageCard from "../components/ImageCard";



const FloorPlanPage = () => {
    return (
        <>
        <ImageOverlay 
        image_path={"../images/plan2.jpg"} 
        opacity={"opacity-90"} 
        heading={"Floor Plan"} 
        subheading={"Explore our meticulously designed floor plans, tailored for your lifestyle and comfort"} />

        <div className="m-10 rounded-xl shadow-xl">
            <div className="flex flex-row p-8">
                <ImageCard image_path={"../images/floor.png"} />
                {/* <div className="basis-1/2 border-2 border-black">
                    <img src="../images/floor.png" alt="floor plan" className="w-full h-full object-cover" />
                </div> */}

                <div className="flex flex-col ms-8">
                    <p className="text-2xl font-bold">Apartment floor plan</p>
                    <p>Discover our floor plans, each hosting five carefully crafted apartments. Explore the spacious living areas, modern kitchens, well-appointed bedrooms, and more, all thoughtfully designed to create your ideal living space</p>
                    <p className="text-xl font-bold mt-4">Key features</p>
                    <IconText 
                    icon={<MdOutlineLiving />} 
                    text={"Spacious living areas with abundant natural light"} />
                    <IconText 
                    icon={<MdOutlineKitchen />} 
                    text={"Modern kitchen with high-end appliances"} />
                    <IconText 
                    icon={<MdOutlineBedroomParent />} 
                    text={"Well-appointed bedrooms with ample closet space"} />
                    <IconText 
                    icon={<MdOutlineBathroom />} 
                    text={"Elegant and functional bathroom designs"} />
                    <IconText 
                    icon={<MdOutlineBalcony />} 
                    text={"Private balcony or terrace options"} />
                    <IconText 
                    icon={<MdOutlineLocalLaundryService />} 
                    text={"In-unit laundry facilities for convinience"} />
                    <IconText 
                    icon={<MdOutlineChair />} 
                    text={"Open floor layout for versatile furniture arrangement"} />
                    <IconText 
                    icon={<MdOutlineHeatPump />} 
                    text={"Energy-efficient heating and cooling systems"} />
                    <IconText 
                    icon={<BiCctv />} 
                    text={"Secure access and 24/7 surveillance"} />
                    
                </div>
            </div>



        </div>
        </>
    );
}

export default FloorPlanPage;