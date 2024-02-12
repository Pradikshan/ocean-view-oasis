// import { motion, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
// import { wrap } from "@motionone/utils";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {

    const [ref, inView] = useInView();
    return (
        // THIS IS THE CODE FOR THE OLD LAYOUT
        // <div className="testimonial-section" ref={ref}>
        //     <div className="flex flex-col justify-center items-center">
        //         <p className="text-3xl md:text-4xl font-bold">Testimonials</p>
        //         <p className="text-xl md:text-2xl font-semibold">Discover what our residents have to say about Ocean View Oasis.</p>
        //     </div>

        //     {/* TODO: Add infinitely side scrolling testimonial */}
        //     {/* <ParallaxTestimonials baseVelocity={5}/> */}
        //     <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch">
        //         <TestimonialCard 
        //         className={`${inView ? 'show' : ''}`}
        //         image={"../images/gandalf.jpg"}
        //         name={"Gandalf the Grey"} 
        //         testimonial={"Ocean View Oasis is a marvel! The soothing ocean vistas, spacious interiors, and enchanting atmosphere make it a truly magical retreat. Whether you're a wizard or a mere mortal, this apartment is a haven by the sea."} />

        //         <TestimonialCard 
        //         className={`${inView ? 'show' : ''}`}
        //         image={"../images/aragorn5.jpg"}
        //         name={"Aragorn, Son of Arathorn"}
        //         testimonial={"In my journeys across realms and kingdoms, I have seldom found a residence as splendid as Ocean View Oasis. The majestic views of the vast ocean, the regal interiors, and the serene atmosphere create an abode fit for a king. Whether you seek respite or luxury, this apartment is a testament to the finer things in life."} />

        //         <TestimonialCard 
        //         className={`${inView ? 'show' : ''}`}
        //         image={"../images/legolas5.jpg"}
        //         name={"Legolas Greenleaf"}
        //         testimonial={"Ocean View Oasis, where rhythmic tides meet Elvish elegance. With graceful interiors, this dwelling bridges nature and modernity, resonating with woodland spirit. A haven to commune with the essence of the sea and ancient tales."} />

        //        <TestimonialCard
        //        className={`${inView ? 'show' : ''}`}
        //        image={"../images/gimli.jpg"}
        //        name={"Gimli, son of Glóin"}
        //        testimonial={"Ocean View Oasis, where sea meets stone, is a dwelling that befits both dwarf and elf alike. The sturdy interiors, reminiscent of the caverns of Khazad-dûm, provide a sense of security and comfort. It stands as a testament to the unity of sea and mountain, offering a haven to revel in both the vastness of the ocean and the enduring strength of the stone. A home worthy of any stout-hearted dweller."} />

        //        <TestimonialCard
        //        className={`${inView ? 'show' : ''}`}
        //        image={"../images/merry.jpg"}
        //        name={"Merry Brandybuck"}
        //        testimonial={"Ocean View Oasis echoes the warmth of the Shire. The cozy interiors, reminiscent of a Hobbit hole, offer unmatched comfort. It stands as a testament to the welcoming embrace of sea and home, a haven where one can enjoy the tranquility of the ocean and the camaraderie of the hearth. A Hobbit's perfect retreat."} />

        //        <TestimonialCard
        //        className={`${inView ? 'show' : ''}`}
        //        image={"../images/pippin.jpg"}
        //        name={"Peregin Took"}
        //        testimonial={"Ocean View Oasis is a merry abode where the sea's tales mingle with the laughter of friends. The lively interiors, like a Hobbit's haven, exude joy and comfort. A testament to the perfect blend of sea and camaraderie, it offers a haven where one can revel in the ocean's melody and the cheer of good company. A home that sparks joy in every Hobbit's heart."} />
        //     </div>

           
        // </div>




        <div className="testimonial-section">
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl md:text-4xl font-bold">Testimonials</p>
                <p className="text-xl md:text-2xl font-semibold">Discover what our residents have to say about Ocean View Oasis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <TestimonialCard 
            image={"../images/gandalf.jpg"}
            name={"Gandalf"} 
            title={"The Grey"}
            testimonial={"Ocean View Oasis is a marvel! The soothing ocean vistas, spacious interiors, and enchanting atmosphere make it a truly magical retreat. Whether you're a wizard or a mere mortal, this apartment is a haven by the sea."} />

            <TestimonialCard 
            className={"md:col-span-2 md:h-full"}
            content_style={"text-lg md:text-xl font-bold"}
            image={"../images/aragorn5.jpg"}
            name={"Aragorn, Son of Arathorn"}
            title={"King of Gondor"}
            testimonial={"In my journeys across realms and kingdoms, I have seldom found a residence as splendid as Ocean View Oasis. The majestic views of the vast ocean, the regal interiors, and the serene atmosphere create an abode fit for a king. Whether you seek respite or luxury, this apartment is a testament to the finer things in life."} />

            <TestimonialCard 
            image={"../images/legolas5.jpg"}
            name={"Legolas Greenleaf"}
            title={"Prince of Mirkwood"}
            testimonial={"Ocean View Oasis, where rhythmic tides meet Elvish elegance. With graceful interiors, this dwelling bridges nature and modernity, resonating with woodland spirit. A haven to commune with the essence of the sea and ancient tales."} />

            <TestimonialCard
            className={"md:col-span-2"}
            content_style={"text-xl font-bold"}
            image={"../images/gimli.jpg"}
            name={"Gimli, son of Glóin"}
            title={"Lord of the Glittering Caves"}
            testimonial={"Ocean View Oasis, where sea meets stone, is a dwelling that befits both dwarf and elf alike. The sturdy interiors, reminiscent of the caverns of Khazad-dûm, provide a sense of security and comfort. It stands as a testament to the unity of sea and mountain, offering a haven to revel in both the vastness of the ocean and the enduring strength of the stone. A home worthy of any stout-hearted dweller."} />

            <TestimonialCard
            className={"h-full"}
            image={"../images/merry.jpg"}
            name={"Merry Brandybuck"}
            title={"Master of Buckland"}
            testimonial={"Ocean View Oasis echoes the warmth of the Shire. The cozy interiors, reminiscent of a Hobbit hole, offer unmatched comfort. It stands as a testament to the welcoming embrace of sea and home, a haven where one can enjoy the tranquility of the ocean and the camaraderie of the hearth. A Hobbit's perfect retreat."} />

            <TestimonialCard
            image={"../images/pippin.jpg"}
            name={"Peregin Took"}
            title={"Knight of Gondor"}
            testimonial={"Ocean View Oasis is a merry abode where the sea's tales mingle with the laughter of friends. The lively interiors, like a Hobbit's haven, exude joy and comfort. A testament to the perfect blend of sea and camaraderie, it offers a haven where one can revel in the ocean's melody and the cheer of good company. A home that sparks joy in every Hobbit's heart."} />

            <TestimonialCard
            className={"h-fit"}
            image={"../images/sam.jpg"}
            name={"Samwise Gamgee"}
            title={"The faithful friend"}
            testimonial={"Ocean View Oasis is more than just a place; it's a haven where the sea's whispers mingle with the warmth of home. Every moment spent here feels like a gentle embrace from the Shire itself."} />

            <TestimonialCard
            image={"../images/frodo.jpg"}
            name={"Frodo Baggins"}
            title={"The Ring-bearer"}
            testimonial={"Nestled by the ocean's edge, this haven offered me solace and serenity during my travels. The tranquil ambiance, combined with the gentle lullaby of the waves, provided the perfect backdrop for reflection and rejuvenation. With its cozy interiors and picturesque views, Ocean View Oasis felt like a haven in Middle-earth. I couldn't have asked for a more peaceful retreat."} />

            <TestimonialCard
            className={"col-span-2"}
            content_style={"text-xl font-bold"}
            image={"../images/sauron.jpg"}
            name={"Sauron the Deceiver"}
            title={"Dark lord of Mordor"}
            testimonial={"As the Dark Lord of Mordor, I can appreciate the finer things in life, and Ocean View Oasis does not disappoint. The breathtaking vistas of the sea remind me of the power and vastness of my domain. The luxurious interiors offer a taste of opulence fit for a ruler of Middle-earth. Ocean View Oasis is truly a haven worthy of one who seeks dominion over land and sea."} />
            </div>

            

        
        </div>
    );
}



export default TestimonialSection;