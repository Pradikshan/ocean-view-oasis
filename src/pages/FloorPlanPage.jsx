import IconText from "../components/IconText";
import ImageOverlay from "../components/ImageOverlay";
import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineCheckroom, MdOutlineBathroom, MdOutlineBalcony } from "react-icons/md";



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
                <div className="basis-1/2 border-2 border-black">
                    <img src="../images/floor.png" alt="floor plan" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col ms-8">
                    <p className="text-2xl font-bold">Apartment floor plan</p>
                    <p>Uncover the intricacies of our apartment floor plan, revealing a blueprint that hosts five thoughtfully designed living spaces on each floor, harmonizing comfort and style seamlessly</p>
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
                    icon={<MdOutlineBathroom />} 
                    text={"Elegant and functional bathroom designs"} />
                    <IconText 
                    icon={<MdOutlineBalcony />} 
                    text={"Private balcony or terrace options"} />
                    
                </div>
            </div>



        </div>
        </>
    );
}

export default FloorPlanPage;