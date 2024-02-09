import ImageTile from "../components/ImageTile";


const AboutUsPage = () => {
    return (
        <>
        <div className="mt-28">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 py-72 px-12">
                    <p className="text-3xl font-bold">Transforming Living Spaces: Redefining Comfort and Community</p>
                    <p>Discover a new era of living at our apartment community, where innovation intertwines seamlessly with comfort. We're dedicated to shaping spaces that inspire connection, offering residents a haven where modern amenities and a vibrant atmosphere converge to create unforgettable experiences.</p>
                </div>
                <div className="relative w-1/2 border-2 border-black">
                    <div className="absolute top-48 left-0">
                        <ImageTile image_path={"../images/main_img2-min.jpg"} />
                    </div>

                    <div className="absolute bottom-0 left-56">
                        <ImageTile image_path={"../images/main_img2-min.jpg"} />
                    </div>

                    <div className="absolute top-20 left-56">
                        <ImageTile image_path={"../images/main_img2-min.jpg"} />
                    </div>

                    <div className="absolute top-12 left-112">
                        <ImageTile image_path={"../images/main_img2-min.jpg"} />
                    </div> 

                    <div className="absolute top-96 left-112">
                        <ImageTile image_path={"../images/main_img2-min.jpg"} />
                    </div> 
                </div>
            </div>
        </div>
        </>
    );

}

export default AboutUsPage;