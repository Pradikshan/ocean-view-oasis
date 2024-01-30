import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      controls.start({ x: `-${index * 100}%` });
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [index, testimonials.length, controls]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex absolute w-full"
        style={{ display: "flex" }}
        animate={controls}
        transition={{ type: "tween", duration: 0.5 }}
      >
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex-none" style={{ width: `${100 / testimonials.length}%` }}>
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

            <TestimonialCard
            image={"../images/merry.jpg"}
            name={"Merry Brandybuck"}
            testimonial={"Ocean View Oasis echoes the warmth of the Shire. The cozy interiors, reminiscent of a Hobbit hole, offer unmatched comfort. It stands as a testament to the welcoming embrace of sea and home, a haven where one can enjoy the tranquility of the ocean and the camaraderie of the hearth. A Hobbit's perfect retreat."} />

            <TestimonialCard
            image={"../images/pippin.jpg"}
            name={"Peregin Took"}
            testimonial={"Ocean View Oasis is a merry abode where the sea's tales mingle with the laughter of friends. The lively interiors, like a Hobbit's haven, exude joy and comfort. A testament to the perfect blend of sea and camaraderie, it offers a haven where one can revel in the ocean's melody and the cheer of good company. A home that sparks joy in every Hobbit's heart."} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;