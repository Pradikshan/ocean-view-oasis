const TestimonialCard = () => {
    return (
        <div className="rounded-3xl shadow-lg m-8">
            <div className="flex flex-col justify-center items-center px-8 py-3">
                <img src="../images/gandalf.jpg" alt="resident" className="rounded-full object-cover w-24 h-24" />
                <p className="text-xl font-bold">Gandalf the Grey</p>
                <p className="pt-4">Ocean View Oasis is a marvel! The soothing ocean vistas, spacious interiors, and enchanting atmosphere make it a truly magical retreat. Whether you're a wizard or a mere mortal, this apartment is a haven by the sea</p>
            </div>
        </div>

    );
}

export default TestimonialCard;