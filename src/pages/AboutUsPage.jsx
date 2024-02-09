import ImageTile from "../components/ImageTile";


const AboutUsPage = () => {
    return (
        <>
        <div className="mt-4 md:mt-28">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:w-1/2 py-12 md:py-72 px-5 md:px-12">
                    <p className="text-2xl md:text-3xl font-bold">Transforming Living Spaces: Redefining Comfort and Community</p>
                    <p>Discover a new era of living at our apartment community, where innovation intertwines seamlessly with comfort. We're dedicated to shaping spaces that inspire connection, offering residents a haven where modern amenities and a vibrant atmosphere converge to create unforgettable experiences.</p>
                </div>
                <div className="relative md:w-1/2 py-20 border-2 border-black">
                    <div className="absolute top-0 md:top-48 left-0">
                        <ImageTile image_path={"../images/tile3-min.jpg"} />
                    </div>

                    <div className="absolute md:bottom-0 md:left-56">
                        <ImageTile image_path={"../images/tile2-min.jpg"} />
                    </div>

                    <div className="absolute md:top-20 md:left-56">
                        <ImageTile image_path={"../images/tile-min.jpg"} />
                    </div>

                    <div className="absolute md:top-12 md:left-112">
                        <ImageTile image_path={"../images/tile4-min.jpg"} />
                    </div> 

                    <div className="absolute md:top-96 md:left-112">
                        <ImageTile image_path={"../images/tile5.jpg"} />
                    </div> 
                </div>
            </div>
        </div>
        </>
    );

}

export default AboutUsPage;