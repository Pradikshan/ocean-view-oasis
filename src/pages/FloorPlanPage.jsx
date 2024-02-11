import IconText from "../components/IconText";
import ImageOverlay from "../components/ImageOverlay";
import { MdOutlineLiving, MdOutlineKitchen, MdOutlineBedroomParent, MdOutlineBathroom, MdOutlineBalcony, MdOutlineLocalLaundryService, MdOutlineChair, MdOutlineHeatPump, MdOutlineCleaningServices } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { PiElevator } from "react-icons/pi";
import { TbSettingsAutomation, TbParking } from "react-icons/tb";
import { FaSpa } from "react-icons/fa6";
import { SiClubhouse } from "react-icons/si";
import ImageCard from "../components/ImageCard";



const FloorPlanPage = () => {
    return (
        <>
        {/* <ImageOverlay 
        image_path={"../images/plan2-min.jpg"} 
        opacity={"opacity-90"} 
        heading={"Floor Plan"} 
        subheading={"Explore our meticulously designed floor plans, tailored for your lifestyle and comfort"} /> */}
        <div className="relative bg-faq-img bg-cover">
            <div className="absolute inset-x-0 top-0 h-20">
                <div className="h-full w-full bg-gradient-to-b from-white from-10% to-transparent to-65%"></div>
            </div>
            <div className="pt-9 mx-2 md:pt-16 text-center">
                <p className="text-2xl md:text-3xl font-bold">Floor Plan</p>
                <p className="text-lg md:text-xl">Explore our meticulously designed floor plans, tailored for your lifestyle and comfort</p>
            </div>
            <div className="py-10">
                <div className="m-2 md:mt-10 md:mx-36 rounded-xl shadow-xl bg-[#e9e9df]">
                    <div className="flex flex-col md:flex-row p-1 md:p-8">
                        { 
                        window.innerWidth >= 768 ? (
                            <ImageCard image_path={"../images/floor.png"} basis={"basis-none"}/>
                        ) : null
                        }

                        <div className="flex flex-col md:ms-8 mx-3 md:mx-0 py-3 md:py-0">
                            <p className="text-2xl font-bold place-self-center md:place-self-start">Apartment floor plan</p>
                            { 
                            window.innerWidth <= 768 ? (
                                <ImageCard image_path={"../images/floor.png"} />
                            ) : null
                            }
                            <p className="mt-4 md:mt-0">Discover our floor plans, each hosting five carefully crafted apartments. Explore the spacious living areas, modern kitchens, well-appointed bedrooms, and more, all thoughtfully designed to create your ideal living space</p>
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

                <div className="m-2 md:mt-10 md:mx-36 rounded-xl shadow-xl bg-[#e9e9df]">
                    <div className="flex flex-col md:flex-row p-1 md:p-8">
                        { 
                        window.innerWidth >= 768 ? (
                            <ImageCard image_path={"../images/bed1.png"} basis={"basis-none"}/>
                        ) : null
                        }

                        <div className="flex flex-col md:ms-8 mx-3 md:mx-0 py-3 md:py-0">
                            <p className="text-2xl font-bold place-self-center md:place-self-start">1-Bedroom Living at Its Finest</p>
                            { 
                            window.innerWidth <= 768 ? (
                                <ImageCard image_path={"../images/bed1.png"} />
                            ) : null
                            }
                            <p className="mt-4 md:mt-0">Explore our 1-bedroom floor plan – a harmonious blend of thoughtful design, spacious living areas, modern kitchens, and a well-appointed bedroom – creating an inviting and cozy living space for you</p>
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
                        </div>
                    </div>
                </div>

                <div className="m-2 md:mt-10 md:mx-36 rounded-xl shadow-xl bg-[#e9e9df]">
                    <div className="flex flex-col md:flex-row p-1 md:p-8">
                        { 
                        window.innerWidth >= 768 ? (
                            <ImageCard image_path={"../images/bed2.png"} basis={"basis-none"}/>
                        ) : null
                        }

                        <div className="flex flex-col md:ms-8 mx-3 md:mx-0 py-3 md:py-0">
                            <p className="text-2xl font-bold place-self-center md:place-self-start">2-Bedroom Comfort and Style</p>
                            { 
                            window.innerWidth <= 768 ? (
                                <ImageCard image_path={"../images/bed2.png"} />
                            ) : null
                            }
                            <p className="mt-4 md:mt-0">Discover our 2-bedroom floor plan – an inviting blend of thoughtful design, expansive living areas, contemporary kitchens, and two well-appointed bedrooms – crafting a warm and welcoming living space tailored just for you</p>
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
                        </div>
                    </div>
                </div>

                <div className="m-2 md:mt-10 md:mx-36 rounded-xl shadow-xl bg-[#e9e9df]">
                    <div className="flex flex-col md:flex-row p-1 md:p-8">
                        { 
                        window.innerWidth >= 768 ? (
                            <ImageCard image_path={"../images/bed3.png"} basis={"basis-none"}/>
                        ) : null
                        }

                        <div className="flex flex-col md:ms-8 mx-3 md:mx-0 py-3 md:py-0">
                            <p className="text-2xl font-bold place-self-center md:place-self-start">3-Bedroom Grand Retreat</p>
                            { 
                            window.innerWidth <= 768 ? (
                                <ImageCard image_path={"../images/bed3.png"} />
                            ) : null
                            }
                            <p className="mt-4 md:mt-0">Explore our 3-bedroom floor plan – a harmonious fusion of thoughtful design, expansive living areas, and three well-appointed bedrooms, creating a welcoming and spacious retreat tailored for your comfort</p>
                            <p className="text-xl font-bold mt-4">Key features</p>
                            <IconText 
                            icon={<MdOutlineBedroomParent />} 
                            text={"Spacious three-bedroom layout"} />
                            <IconText 
                            icon={<MdOutlineKitchen />} 
                            text={"Gourmet kitchen for culinary delights"} />
                            <IconText 
                            icon={<MdOutlineBathroom />} 
                            text={"Three well appointed bathrooms"} />
                            <IconText 
                            icon={<MdOutlineBalcony />} 
                            text={"Private balcony for each bedroom with a sea view"} />
                            <IconText 
                            icon={<MdOutlineLocalLaundryService />} 
                            text={"Convinient in-unit laundry service"} />
                            <IconText 
                            icon={<MdOutlineChair />} 
                            text={"Versatile open floor plan"} />
                            <IconText 
                            icon={<MdOutlineHeatPump />} 
                            text={"Climate control for each bedroom"} />
                            <IconText 
                            icon={<BiCctv />} 
                            text={"Controlled access and 24/7 surveillance"} />
                        </div>
                    </div>
                </div>

                <div className="m-2 md:mt-10 md:mx-36 rounded-xl shadow-xl bg-[#e9e9df]">
                    <div className="flex flex-col md:flex-row p-1 md:p-8">
                        { 
                        window.innerWidth >= 768 ? (
                            <ImageCard image_path={"../images/luxury.png"} basis={"basis-none"}/>
                        ) : null
                        }

                        <div className="flex flex-col md:ms-8 mx-3 md:mx-0 py-3 md:py-0">
                            <p className="text-2xl font-bold place-self-center md:place-self-start">Luxury Living in Our Grand 3-Bedroom Residence</p>
                            { 
                            window.innerWidth <= 768 ? (
                                <ImageCard image_path={"../images/luxury.png"} />
                            ) : null
                            }
                            <p className="mt-4 md:mt-0">Indulge in opulence with our grand 3-bedroom luxury apartment – an exquisite blend of sophisticated design, expansive living areas adorned with premium finishes, and an array of upscale amenities, crafting an unparalleled living experience for those who appreciate the finer things in life</p>
                            <p className="text-xl font-bold mt-4">Key features</p>
                            <IconText 
                            icon={<MdOutlineBedroomParent />} 
                            text={"Grand master suite"} />
                            <IconText 
                            icon={<PiElevator />} 
                            text={"Private elevator access"} />
                            <IconText 
                            icon={<MdOutlineBalcony />} 
                            text={"Private terrace with panoramic views"} />
                            <IconText 
                            icon={<FaSpa />} 
                            text={"In-home spa experience"} />
                            <IconText 
                            icon={<MdOutlineCleaningServices />} 
                            text={"Dedicated concierge service"} />
                            <IconText 
                            icon={<TbSettingsAutomation />} 
                            text={"State-of-the-art home automation"} />
                            <IconText 
                            icon={<SiClubhouse />} 
                            text={"Exclusive access to clubhouse and amenities"} />
                            <IconText 
                            icon={<TbParking />} 
                            text={"Secure valet parking"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        </>
    );
}

export default FloorPlanPage;