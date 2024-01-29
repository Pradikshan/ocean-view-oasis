import { ImageCard } from "../components/ImageCard";
import { SplitLayout } from "../components/SplitLayout";

const HomePage = () => {
    return (

        <>
        <div className="relative">
            <div className="flex flex-col justify-center items-center">
                <img src="../images/main_img2.jpg" alt="main" className="w-full h-auto opacity-80 z-0" />
                <div className="z-10 absolute">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-lg md:text-4xl text-white ps-3">OCEAN VIEW OASIS</p>
                        <p className="font-lg text-sm md:text-2xl text-white">Your Spacious Haven by the Shore</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="info-card-container">
            <SplitLayout>
                <ImageCard image_path="../images/location.jpg" />
                <div className="info-card">
                    <div className="info-card-text">
                        <p className="info-card-heading">Location</p>
                        <p className="info-card-subheading">Scenic Beauty</p>
                        <p className="info-card-content">Experience the breathtaking views of the ocean and the natural beauty that surrounds our beachside apartments. Wake up to the sound of waves and enjoy unparalleled sunsets</p>
                    </div>

                    <div className="info-card-text">
                        <p className="info-card-subheading">Convenient Access</p>
                        <p className="info-card-content">Our location offers convenient access to local amenities, shopping centers, and dining options. Everything you need is within reach for a comfortable and enjoyable lifestyle</p>
                    </div>

                    <div className="info-card-text">
                        <p className="info-card-subheading">Comunity Vibes</p>
                        <p className="info-card-content">Immerse yourself in a vibrant local community. Connect with neighbors, participate in community events, and enjoy the sense of belonging that comes with our beachside living experience</p>
                    </div>
                </div>
            </SplitLayout>
        </div>

        <div className="info-card-container bg-slate-100">
            <SplitLayout>
                <div className="info-card">
                    <div className="info-card-text">
                        <p className="info-card-heading">Facilities</p>
                        <p className="info-card-subheading">Modern Amenities</p>
                        <p className="info-card-content">Indulge in modern amenities designed to elevate your lifestyle. From state-of-the-art fitness centers to relaxing spa facilities, our apartments provide the comforts you deserve</p>
                    </div>

                    <div className="info-card-text">
                        <p className="info-card-subheading">Recreational Spaces</p>
                        <p className="info-card-content">Enjoy a variety of recreational spaces within the community. Whether it's a refreshing swimming pool, lush green parks, or designated play areas, there's something for everyone</p>
                    </div>

                    <div className="info-card-text">
                        <p className="info-card-subheading">Security and Convenience</p>
                        <p className="info-card-content">Experience a secure and convenient living environment with features like 24/7 security, smart home technology, and convenient parking options for residents and guests</p>
                    </div>
                </div>
                <ImageCard image_path="../images/pool.jpg" />
            </SplitLayout>
        </div>

        <div className="info-card-container">
            <SplitLayout>
                <ImageCard image_path="../images/room.jpg" />
                <div className="info-card">
                    <div className="info-card-text">
                        <p className="info-card-heading">Floor Plans</p>
                        <p className="info-card-subheading">One-Bedroom Retreat</p>
                        <p className="info-card-content">Discover the charm of our one-bedroom floor plans, offering a cozy retreat for individuals or couples. Thoughtful design and optimal use of space create a comfortable living experience</p>
                    </div>

                    <div className="info-card-text">
                        <p className="info-card-subheading">Spacious Two-Bedroom Options</p>
                        <p className="info-card-content">For those seeking more room, our spacious two-bedroom layouts provide ample space for families or individuals desiring extra versatility. Enjoy the flexibility of additional bedrooms for guests or home office space</p>
                    </div>

                    <div className="info-card-text">
                        <p className="info-card-subheading">Luxurious Three-Bedroom Residences</p>
                        <p className="info-card-content">Indulge in the luxury of our three-bedroom residences, where sophistication meets functionality. Ideal for families or those desiring a spacious home, these layouts offer an elevated living experience with room for every aspect of your lifestyle</p>
                    </div>
                </div>
            </SplitLayout>
        </div>
        </>
      

    );
}

export default HomePage;