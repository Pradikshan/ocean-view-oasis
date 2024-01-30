import TestimonialCard from "./TestimonialCard";


const TestimonialSection = () => {
    return (
        <div className="mt-28">
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl md:text-4xl font-bold">Testimonials</p>
                <p className="text-xl md:text-2xl font-semibold">Discover what our residents have to say about Ocean View Oasis.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch">
                <TestimonialCard 
                image={"../images/gandalf.jpg"}
                name={"Gandalf the Grey"} 
                testimonial={"Ocean View Oasis is a marvel! The soothing ocean vistas, spacious interiors, and enchanting atmosphere make it a truly magical retreat. Whether you're a wizard or a mere mortal, this apartment is a haven by the sea."} />
                <TestimonialCard 
                image={"../images/aragorn5.jpg"}
                name={"Aragorn, Son of Arathorn"}
                testimonial={"In my journeys across realms and kingdoms, I have seldom found a residence as splendid as Ocean View Oasis. The majestic views of the vast ocean, the regal interiors, and the serene atmosphere create an abode fit for a king. Whether you seek respite or luxury, this apartment is a testament to the finer things in life."} />
                <TestimonialCard 
                image={"../images/legolas5.jpg"}
                name={"Legolas Greenleaf"}
                testimonial={"Ocean View Oasis, where rhythmic tides meet Elvish elegance. With graceful interiors, this dwelling bridges nature and modernity, resonating with woodland spirit. A haven to commune with the essence of the sea and ancient tales."} />
               <TestimonialCard
               image={"../images/gimli.jpg"}
               name={"Gimli, son of Glóin"}
               testimonial={"Ocean View Oasis, where sea meets stone, is a dwelling that befits both dwarf and elf alike. The sturdy interiors, reminiscent of the caverns of Khazad-dûm, provide a sense of security and comfort. It stands as a testament to the unity of sea and mountain, offering a haven to revel in both the vastness of the ocean and the enduring strength of the stone. A home worthy of any stout-hearted dweller."} />
            </div>
        </div>
    );
}

export default TestimonialSection;