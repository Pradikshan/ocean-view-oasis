import { ImageOverlay } from "../components/ImageOverlay";


const FloorPlanPage = () => {
    return (
        <>
        <ImageOverlay image_path={"../images/plan2.jpg"} opacity={"opacity-80"} heading={"Floor Plan"} subheading={"Explore our meticulously designed floor plans, tailored for your lifestyle and comfort"} />
        {/* <div className="relative">
            <div className="flex flex-col justify-center items-center">
                <img src="../images/plan2.jpg" alt="main" className="w-full h-auto opacity-80 z-0" />
                <div className="z-10 absolute">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-lg md:text-4xl text-white ps-3">Floor Plan</p>
                        <p className="font-lg text-sm md:text-2xl text-white">Explore our meticulously designed floor plans, tailored for your lifestyle and comfort</p>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    );
}

export default FloorPlanPage;