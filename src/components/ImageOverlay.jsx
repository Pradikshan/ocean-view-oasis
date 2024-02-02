export const ImageOverlay = ({ image_path, opacity, heading, subheading }) => {
    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center">
                <img src={`${image_path}`} alt="main" className={`w-full h-auto opacity-${opacity} z-0`} />
                <div className="z-10 absolute">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-lg md:text-4xl text-white ps-3">${heading}</p>
                        <p className="font-lg text-sm md:text-2xl text-white">${subheading}</p>
                        {/* TODO: add a CTA btn */}
                    </div>
                </div>
            </div>
        </div>
    );

}