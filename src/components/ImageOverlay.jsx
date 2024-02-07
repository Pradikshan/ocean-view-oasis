const ImageOverlay = ({ image_path, opacity, heading, subheading, margin_top }) => {
    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center">
                <img src={`${image_path}`} alt="main" className={`w-full h-1/12 ${opacity} z-0`} />
                <div className="z-10 absolute">
                    <div className={`flex flex-col justify-center items-center ${margin_top}`}>
                        <p className="font-bold text-lg md:text-4xl text-white md:ps-3">{heading}</p>
                        <p className="font-lg text-sm md:text-2xl text-white">{subheading}</p>
                        {/* TODO: add a CTA btn */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageOverlay;