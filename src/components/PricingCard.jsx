const PricingCard = () => {
    return (
        <div className="rounded-lg shadow-2xl w-full h-full m-5 p-5">
            <div className="">
                <img src="../images/1bed_ap.jpg" alt="apartment" className="w-full h-full object-cover" />
            </div>

            <div className="">
                <p className="text-xl font-bold">One bedroom apartment</p>
                <p>Monthly rent: $1,500</p>
                <p>Lease term: 12 months</p>
                <p>Square footage: 800 sq. ft.</p>
                <p>Amenities: Balcony</p>
                <p>Deposit: $1,000</p>
                <p>Availability: Available now</p>
            </div>

            {/* TOD: add a CTA */}

        </div>

    );
}

export default PricingCard;