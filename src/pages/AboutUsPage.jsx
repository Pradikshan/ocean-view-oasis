import ImageTile from "../components/ImageTile";
import StatsCard from "../components/StatsCard";


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

            <div className="flex flex-row px-12 mt-28 justify-between">
                    <div className="flex flex-col w-1/2">
                        <p className="text-3xl font-bold">Our Mission</p>
                        <p className="text-lg mt-2">At Ocean View Oasis, our mission is to provide a sanctuary by the sea, where residents can embrace the beauty of coastal living while enjoying modern comforts and fostering a strong sense of community. We are committed to creating an environment that promotes well-being, connection, and sustainable living.</p>
                        <br/>
                        <p>Central to our mission is the cultivation of a vibrant community where neighbors become friends and shared experiences become cherished memories. We believe that fostering meaningful connections enriches not only individual lives but also the collective well-being of our community as a whole.</p>
                        <br/>
                        <p>Moreover, we are dedicated to promoting sustainability and environmental stewardship in every aspect of our operations. From energy-efficient design to eco-conscious practices, we strive to minimize our ecological footprint and preserve the natural beauty that surrounds us for generations to come.</p>
                        <br/>
                        <p>Our commitment extends beyond providing a place to live; it encompasses creating a lifestyle where residents can thrive, find joy in everyday moments, and forge lasting connections. We invite you to join us on this journey towards coastal living at its finest.</p>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <StatsCard 
                        stat={"$44 Million in Assets"}
                        subtext={"Reflecting our substantial investment"} />

                        <StatsCard 
                        stat={"99% Occupancy Rate"}
                        subtext={"High demand for our premium apartments"} />   

                        <StatsCard 
                        stat={"10 Years of Excellence"}
                        subtext={"A decade of dedicated service"} />
                        
                        <StatsCard 
                        stat={"25,000 Square Feet of Green Space"}
                        subtext={"Ample space for relaxation"} />
                    </div>
            </div>

            <div className="px-12 mt-28">
                <p className="text-3xl font-bold">Our values</p>
                <p className="mt-2">Guided by our core values, Ocean View Oasis is more than just a place to live; it's a reflection of our commitment to excellence, integrity, and community. These values shape every aspect of our operations, from the design of our residences to the experiences we create for our residents.</p>
                <div className="grid grid-cols-3">
                    <div>
                        <p className=""></p>
                    </div>
                </div>

            </div>
        </div>
        </>
    );

}

export default AboutUsPage;