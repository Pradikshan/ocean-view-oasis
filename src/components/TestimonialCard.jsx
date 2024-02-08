const TestimonialCard = ({ className, image, name, title, testimonial }) => {
    return (
        // <div className={`testimonial-card ${className}`}>
        //     <div className="flex flex-col justify-center items-center px-8 py-3">
        //         <img src={image} alt="resident" className="rounded-full object-cover w-24 h-24" />
        //         <p className="text-xl font-bold">{name}</p>
        //         <p className="pt-4">{testimonial}</p>
        //     </div>
        // </div>

        <div className={`testimonial-card ${className}`}>
            <div className="px-8 py-3">
                <p className="pt-4">{testimonial}</p>
                <div className="flex flex-row mt-8">
                    <img src={image} alt="resident" className="rounded-full object-cover w-12 h-12" />
                    <div className="flex flex-col ms-5">
                        <p className="text-xl font-bold">{name}</p>
                        <p className="">Wizard of Skyrim</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;