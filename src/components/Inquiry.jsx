
const Inquiry = () => {
    return (
        <div>
            <p className="text-2xl md:text-3xl font-bold mb-4">Contact us</p>
            <form>
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

                <button className="p-2 bg-yellow-700 rounded-full w-36 font-bold text-lg">
                    Submit
                </button>
                </form>
            </div>
    );

}

export default Inquiry;