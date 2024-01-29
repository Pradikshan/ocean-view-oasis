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

        <div>
            <SplitLayout>
                <ImageCard image_path="../images/main_img2.jpg" />
                <p>SHGHGS</p>
            </SplitLayout>
        </div>
        </>
      

    );
}

export default HomePage;