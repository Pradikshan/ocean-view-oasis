import ImageTile from "../components/ImageTile";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import TextCard from "../components/TextCard";


const AboutUsPage = () => {
    return (
        <>
        <div>
            <div className="relative mt-4 md:py-28 bg-about-img2 bg-cover">
                <div className="absolute inset-x-0 top-0 h-20">
                    <div className="h-full w-full bg-gradient-to-b from-white to-transparent"></div>
                </div>
                <div className="flex flex-col md:flex-row relative">
                    <div className="flex flex-col md:w-1/2 py-12 md:py-72 px-5 md:px-12">
                        <p className="text-2xl md:text-3xl font-bold">Transforming Living Spaces: Redefining Comfort and Community</p>
                        {window.innerWidth <= 768 ? (
                        <img src="../images/tile-min.jpg" alt="tile" className="my-4"/>
                        )
                        : null }
                        <p>Discover a new era of living at our apartment community, where innovation intertwines seamlessly with comfort. We're dedicated to shaping spaces that inspire connection, offering residents a haven where modern amenities and a vibrant atmosphere converge to create unforgettable experiences.</p>
                    </div>
                    {window.innerWidth >= 768 ? (
                    <div className="relative md:w-1/2">
                        <div className="absolute md:top-48 md:left-0">
                            <ImageTile image_path={"../images/tile3-min.jpg"} />
                        </div>

                        <div className="absolute md:bottom-0 md:left-56">
                            <ImageTile image_path={"../images/tile2-min.jpg"} />
                        </div>

                        <div className="absolute -top-5 -left-20 md:top-20 md:left-56">
                            <ImageTile image_path={"../images/tile-min.jpg"} />
                        </div>

                        <div className="absolute top-0 right-0 md:top-12 md:left-[448px]">
                            <ImageTile image_path={"../images/tile4-min.jpg"} />
                        </div> 

                        <div className="absolute md:top-96 md:left-[448px]">
                            <ImageTile image_path={"../images/tile5.jpg"} />
                        </div>                     
                    </div>
                    )
                    : null }     
                </div>

                <div className="flex flex-col md:flex-row px-5 md:px-12 mt-10 md:pt-28">
                    <div className="flex flex-col md:w-1/2">
                        <p className="text-2xl md:text-3xl font-bold">Our Mission</p>
                        <p className="md:text-lg mt-2">At Ocean View Oasis, our mission is to provide a sanctuary by the sea, where residents can embrace the beauty of coastal living while enjoying modern comforts and fostering a strong sense of community. We are committed to creating an environment that promotes well-being, connection, and sustainable living.</p>
                        <br/>
                        <p>Central to our mission is the cultivation of a vibrant community where neighbors become friends and shared experiences become cherished memories. We believe that fostering meaningful connections enriches not only individual lives but also the collective well-being of our community as a whole.</p>
                        <br/>
                        <p>Moreover, we are dedicated to promoting sustainability and environmental stewardship in every aspect of our operations. From energy-efficient design to eco-conscious practices, we strive to minimize our ecological footprint and preserve the natural beauty that surrounds us for generations to come.</p>
                        <br/>
                        <p className="mb-8">Our commitment extends beyond providing a place to live; it encompasses creating a lifestyle where residents can thrive, find joy in everyday moments, and forge lasting connections. We invite you to join us on this journey towards coastal living at its finest.</p>
                    </div>

                    <div className="flex flex-col md:w-1/3 md:ms-auto">
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

                    

                <div className="px-5 md:px-12 mt-28">
                    <p className="text-2xl md:text-3xl font-bold">Our values</p>
                    <p className="mt-2">Guided by our core values, Ocean View Oasis is more than just a place to live; it's a reflection of our commitment to excellence, integrity, and community. These values shape every aspect of our operations, from the design of our residences to the experiences we create for our residents.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-8">   
                        <TextCard 
                        heading={"Excellence"}
                        text={"We strive for excellence in all that we do, from the meticulous craftsmanship of our apartments to the attentive service we provide to our residents."} />

                        <TextCard 
                        heading={"Integrity"}
                        text={"We conduct ourselves with honesty, transparency, and ethical behavior, ensuring that our residents trust us to always act in their best interests"} />

                        <TextCard 
                        heading={"Community"}
                        text={"We believe in the power of community and actively cultivate a welcoming and inclusive environment where residents feel connected, supported, and valued."} />

                        <TextCard 
                        heading={"Sustainability"}
                        text={"We are dedicated to sustainable practices that minimize our environmental impact and contribute to the well-being of both our residents and the planet."} />

                        <TextCard 
                        heading={"Innovation"}
                        text={"We embrace innovation and continuously seek new ways to enhance the living experience for our residents, whether through technology, design, or amenities."} />

                        <TextCard 
                        heading={"Collaboration"}
                        text={"We foster a culture of collaboration and teamwork, working closely with our residents, staff, and partners to create a thriving community where everyone can flourish."} />
                        
                    </div>

                </div>

                <div className="px-5 md:px-12 mt-28 mb-32">
                    <p className="text-3xl font-bold">Our team</p>
                    <p className="mt-2">Our dedicated team at Ocean View Oasis is committed to providing exceptional service and creating an unparalleled living experience for our residents, ensuring that every interaction is infused with warmth, professionalism, and genuine care.</p>

                    <div className="grid grid-cols-2 md:grid-cols-5 mt-12">
                        <ProfileCard 
                        image_path={"../images/rust.jpg"} 
                        name={"Rustin Spencer Cohle"} 
                        position={"Community Manager"} />

                        <ProfileCard 
                        image_path={"../images/marty.jpg"} 
                        name={"Martin Hart"} 
                        position={"Facilities Technician"} />   

                        <ProfileCard 
                        image_path={"../images/django.jpg"} 
                        name={"Django Freeman"} 
                        position={"Maintenance Supervisor"} />

                        <ProfileCard 
                        image_path={"../images/mills.jpg"} 
                        name={"David Mills"} 
                        position={"Leasing Consultant"} />

                        <ProfileCard 
                        image_path={"../images/somerset.jpg"} 
                        name={"William Somerset"} 
                        position={"Operations Coordinator"} />

                        <ProfileCard 
                        image_path={"../images/steve.jpg"} 
                        name={"Steve Harrington"} 
                        position={"Customer Experience Specialist"} />

                        <ProfileCard 
                        image_path={"../images/fox.jpg"} 
                        name={"Fox Mulder"} 
                        position={"Sustainability Coordinator"} />

                        <ProfileCard 
                        image_path={"../images/dana.jpg"} 
                        name={"Dana Scully"} 
                        position={"Administrative Assistant"} />     

                        <ProfileCard 
                        image_path={"../images/scooby.jpg"} 
                        name={"Scooby Doo"} 
                        position={"Marketing Specilaist"} />

                        <ProfileCard 
                        image_path={"../images/balrog.jpg"} 
                        name={"The Balrog"} 
                        position={"Human Resources Manager"} />
                    </div>

                </div>

                <div className="absolute inset-x-0 bottom-0 h-20">
                    <div className="h-full w-full bg-gradient-to-t from-white to-transparent"></div>
                </div>
            </div>
        </div>
        </>
    );

}

export default AboutUsPage;