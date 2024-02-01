import { forwardRef } from "react";

const TestimonialCard = forwardRef(({ className, image, name, testimonial }, ref) => {
    return (
        <div className={`testimonial-card ${className}`} ref={ref}>
            <div className="flex flex-col justify-center items-center px-8 py-3">
                <img src={image} alt="resident" className="rounded-full object-cover w-24 h-24" />
                <p className="text-xl font-bold">{name}</p>
                <p className="pt-4">{testimonial}</p>
            </div>
        </div>
    );
});

export default TestimonialCard;