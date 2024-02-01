// import { motion, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
// import { wrap } from "@motionone/utils";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {

    const [ref, inView] = useInView();

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    // const ParallaxTestimonials = ({ baseVelocity = 100 }) => {
    //     const baseX = useMotionValue(0);
    //     const scrollY = useMotionValue(0);
    //     const scrollVelocity = useVelocity(scrollY);
    //     const smoothVelocity = useSpring(scrollVelocity, {
    //       damping: 50,
    //       stiffness: 400
    //     });
    //     const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    //       clamp: false
    //     });
      
    //     const x = useTransform(baseX, (v) => `${wrap(-150, 100, v)}%`);
      
    //     const directionFactor = useRef(1);
    //     useAnimationFrame((t, delta) => {
    //       let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      
    //       if (velocityFactor.get() < 0) {
    //         directionFactor.current = -1;
    //       } else if (velocityFactor.get() > 0) {
    //         directionFactor.current = 1;
    //       }
      
    //       moveBy += directionFactor.current * moveBy * velocityFactor.get();
      
    //       baseX.set(baseX.get() + moveBy);
    //     });
      
    //     return (
    //       <div className="flex flex-row">
    //         <motion.div className="testimonial-scroller" style={{ x }}>
    //             <TestimonialCard 
    //             className="testimonial-card"
    //             image={"../images/gandalf.jpg"}
    //             name={"Gandalf the Grey"} 
    //             testimonial={"Ocean View Oasis is a marvel! The soothing ocean vistas, spacious interiors, and enchanting atmosphere make it a truly magical retreat. Whether you're a wizard or a mere mortal, this apartment is a haven by the sea."} />

    //             <TestimonialCard 
    //             className="testimonial-card"
    //             image={"../images/aragorn5.jpg"}
    //             name={"Aragorn, Son of Arathorn"}
    //             testimonial={"In my journeys across realms and kingdoms, I have seldom found a residence as splendid as Ocean View Oasis. The majestic views of the vast ocean, the regal interiors, and the serene atmosphere create an abode fit for a king. Whether you seek respite or luxury, this apartment is a testament to the finer things in life."} />

    //             <TestimonialCard 
    //             className="testimonial-card"
    //             image={"../images/legolas5.jpg"}
    //             name={"Legolas Greenleaf"}
    //             testimonial={"Ocean View Oasis, where rhythmic tides meet Elvish elegance. With graceful interiors, this dwelling bridges nature and modernity, resonating with woodland spirit. A haven to commune with the essence of the sea and ancient tales."} />

    //             <TestimonialCard
    //             className="testimonial-card"
    //             image={"../images/gimli.jpg"}
    //             name={"Gimli, son of Glóin"}
    //             testimonial={"Ocean View Oasis, where sea meets stone, is a dwelling that befits both dwarf and elf alike. The sturdy interiors, reminiscent of the caverns of Khazad-dûm, provide a sense of security and comfort. It stands as a testament to the unity of sea and mountain, offering a haven to revel in both the vastness of the ocean and the enduring strength of the stone. A home worthy of any stout-hearted dweller."} />

    //             <TestimonialCard
    //             className="testimonial-card"
    //             image={"../images/merry.jpg"}
    //             name={"Merry Brandybuck"}
    //             testimonial={"Ocean View Oasis echoes the warmth of the Shire. The cozy interiors, reminiscent of a Hobbit hole, offer unmatched comfort. It stands as a testament to the welcoming embrace of sea and home, a haven where one can enjoy the tranquility of the ocean and the camaraderie of the hearth. A Hobbit's perfect retreat."} />

    //             <TestimonialCard
    //             className="testimonial-card"
    //             image={"../images/pippin.jpg"}
    //             name={"Peregin Took"}
    //             testimonial={"Ocean View Oasis is a merry abode where the sea's tales mingle with the laughter of friends. The lively interiors, like a Hobbit's haven, exude joy and comfort. A testament to the perfect blend of sea and camaraderie, it offers a haven where one can revel in the ocean's melody and the cheer of good company. A home that sparks joy in every Hobbit's heart."} />
    //         </motion.div>
    //       </div>
    //     );
    // };

    return (
        <div className="mt-28 testimonial-section" ref={ref}>
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl md:text-4xl font-bold">Testimonials</p>
                <p className="text-xl md:text-2xl font-semibold">Discover what our residents have to say about Ocean View Oasis.</p>
            </div>

            
            {/* <ParallaxTestimonials baseVelocity={5}/> */}
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch">

                <TestimonialCard 
                className={`${inView ? 'show' : ''}`}
                ref={ref1}
                image={"../images/gandalf.jpg"}
                name={"Gandalf the Grey"} 
                testimonial={"Ocean View Oasis is a marvel! The soothing ocean vistas, spacious interiors, and enchanting atmosphere make it a truly magical retreat. Whether you're a wizard or a mere mortal, this apartment is a haven by the sea."} />

                <TestimonialCard 
                className={`${inView ? 'show' : ''}`}
                ref={ref2}
                image={"../images/aragorn5.jpg"}
                name={"Aragorn, Son of Arathorn"}
                testimonial={"In my journeys across realms and kingdoms, I have seldom found a residence as splendid as Ocean View Oasis. The majestic views of the vast ocean, the regal interiors, and the serene atmosphere create an abode fit for a king. Whether you seek respite or luxury, this apartment is a testament to the finer things in life."} />

                <TestimonialCard 
                className={`${inView ? 'show' : ''}`}
                ref={ref3}
                image={"../images/legolas5.jpg"}
                name={"Legolas Greenleaf"}
                testimonial={"Ocean View Oasis, where rhythmic tides meet Elvish elegance. With graceful interiors, this dwelling bridges nature and modernity, resonating with woodland spirit. A haven to commune with the essence of the sea and ancient tales."} />

               {/* <TestimonialCard
               image={"../images/gimli.jpg"}
               name={"Gimli, son of Glóin"}
               testimonial={"Ocean View Oasis, where sea meets stone, is a dwelling that befits both dwarf and elf alike. The sturdy interiors, reminiscent of the caverns of Khazad-dûm, provide a sense of security and comfort. It stands as a testament to the unity of sea and mountain, offering a haven to revel in both the vastness of the ocean and the enduring strength of the stone. A home worthy of any stout-hearted dweller."} />

               <TestimonialCard
               image={"../images/merry.jpg"}
               name={"Merry Brandybuck"}
               testimonial={"Ocean View Oasis echoes the warmth of the Shire. The cozy interiors, reminiscent of a Hobbit hole, offer unmatched comfort. It stands as a testament to the welcoming embrace of sea and home, a haven where one can enjoy the tranquility of the ocean and the camaraderie of the hearth. A Hobbit's perfect retreat."} />

               <TestimonialCard
               image={"../images/pippin.jpg"}
               name={"Peregin Took"}
               testimonial={"Ocean View Oasis is a merry abode where the sea's tales mingle with the laughter of friends. The lively interiors, like a Hobbit's haven, exude joy and comfort. A testament to the perfect blend of sea and camaraderie, it offers a haven where one can revel in the ocean's melody and the cheer of good company. A home that sparks joy in every Hobbit's heart."} /> */}
            </div>

           
        </div>
    );
}



export default TestimonialSection;