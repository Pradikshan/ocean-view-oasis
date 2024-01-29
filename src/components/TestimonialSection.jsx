import TestimonialCard from "./TestimonialCard";


const TestimonialSection = () => {
    return (
        <div className="mt-28">
            <div className="flex flex-col justify-center items-center">
                <p className="text-4xl font-bold">Testimonials</p>
                <p>Testimonials from our residents</p>
            </div>
            <div className="grid grid-cols-3 place-items-stretch">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                
                
            </div>
        </div>
    );
}

export default TestimonialSection;