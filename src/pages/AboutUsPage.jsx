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
                <div className="relative md:w-1/2">
                    {window.innerWidth >= 768 ? (
                    <>
                    <div className="absolute md:top-48 md:left-0">
                        <ImageTile image_path={"../images/tile3-min.jpg"} />
                    </div>

                    <div className="absolute md:bottom-0 md:left-56">
                        <ImageTile image_path={"../images/tile2-min.jpg"} />
                    </div>
                    </>
                    )
                    : null
                    }

                    <div className="absolute -top-5 -left-20 md:top-20 md:left-56">
                        <ImageTile image_path={"../images/tile-min.jpg"} />
                    </div>

                    <div className="absolute top-0 right-0 md:top-12 md:left-[448px]">
                        <ImageTile image_path={"../images/tile4-min.jpg"} />
                    </div> 

                    {window.innerWidth >= 768 ? (
                    <>
                    <div className="absolute md:top-96 md:left-[448px]">
                        <ImageTile image_path={"../images/tile5.jpg"} />
                    </div> 
                    </>
                    )
                    : null
                    }

                    
                </div>
            </div>

            <div className="flex flex-row px-12">
                <div className="flex flex-col">
                    <p className="text-3xl font-bold">Our Mission</p>
                    <p>At Ocean View Oasis, our mission is to provide a sanctuary by the sea, where residents can embrace the beauty of coastal living while enjoying modern comforts and fostering a strong sense of community. We are committed to creating an environment that promotes well-being, connection, and sustainable living.</p>
                </div>

                



            </div>
        </div>
        </>
    );

}

export default AboutUsPage;