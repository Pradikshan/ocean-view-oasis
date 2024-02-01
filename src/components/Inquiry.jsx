import { useRef } from "react";

const Inquiry = () => {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        formRef.current.reset();
        alert("Your inquiry was submitted successfully!")
    }

    return (
        <div>
            <p className="text-2xl md:text-3xl font-bold">Inquiry</p>
            <p className="text-sm md:text-md mb-4">Send us your questions and inquiries, and we'll be delighted to assist you on your journey to discovering Ocean View Oasis.</p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="label-group">
                    <label htmlFor="name" className="contact-label">Name:</label>
                    <input name="name" type="text" className="contact-input"/>
                </div>

                <div className="label-group">
                    <label htmlFor="phone_number" className="contact-label">Phone number:</label>
                    <input name="phone_number" type="number" className="contact-input"/>
                </div>

                <div className="label-group">
                    <label htmlFor="email" className="contact-label">Email:</label>
                    <input name="email" type="email" className="contact-input"/>
                </div>

                <div className="label-group">
                    <label htmlFor="inquiry" className="contact-label">Inquiry:</label>
                    <textarea name="inquiry" type="text" className="contact-input"/>
                </div>

                <button className="p-2 bg-yellow-700 rounded-full w-36 font-bold text-lg mb-8">
                    Submit
                </button>
            </form>
        </div>
    );

}

export default Inquiry;