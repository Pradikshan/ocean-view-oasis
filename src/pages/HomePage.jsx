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

        <div className="p-16">
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
        </>
      

    );
}

export default HomePage;