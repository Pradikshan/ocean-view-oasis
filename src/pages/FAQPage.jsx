import Badge from "../components/Badge";
import FAQ from "../components/FAQ";

const FAQPage = () => {
    return (
        <>
        <div className="bg-faq-img bg-cover">
            <div className="pt-10">
            <p className="text-2xl md:text-3xl font-bold text-center">FAQ</p>
            {/* <p className="text-xl font-bold text-center">We have got answers</p> */}
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center">
                <Badge text={"Apartment"} />
                <Badge text={"Customer service"} />
                <Badge text={"Buying/Renting"} />
                <Badge text={"Services"} />
            </div>


            <div className="mt-12 mb-16 mx-10">
                <p className="text-2xl font-bold mx-2">Apartment</p>
                <FAQ 
                question={"Can I schedule a tour of available properties?"} 
                answer={"Absolutely! You can schedule a tour of our available properties by contacting our leasing office. We'll be happy to show you around and answer any questions you may have."} />
                <FAQ 
                question={"Do you offer furnished apartments?"} 
                answer={"Yes, we offer both furnished and unfurnished apartments to meet the needs of our tenants."} />
                <FAQ 
                question={"Do you allow pets in your apartments?"} 
                answer={"Yes, we are pet-friendly! We understand that pets are part of the family, so many of our properties welcome furry friends. Certain restrictions and fees may apply, so please check with our leasing office for details."} />
                <FAQ 
                question={"What is your policy on maintenance requests?"} 
                answer={"We strive to address maintenance requests promptly to ensure a comfortable living experience for our tenants. You can submit maintenance requests through our online portal or by contacting our maintenance team directly."} />
                <FAQ 
                question={"What amenities are included in your properties?"} 
                answer={"Our properties may offer a range of amenities such as fitness centers, swimming pools, community spaces, and more. Specific amenities vary by location, so please inquire about the amenities available at the property you're interested in."} />
            </div>

            <div className="my-16 mx-10">
                <p className="text-2xl font-bold mx-2">Buying/Renting</p>
                <FAQ 
                question={"What are the benefits of renting with your company?"} 
                answer={"Renting with us offers several benefits including flexible lease terms, competitive pricing, and access to amenities such as laundry services and secure access."} />
                <FAQ 
                question={"What payment methods do you accept for rent and deposits?"} 
                answer={"We accept various payment methods including credit/debit cards, bank transfers, and checks. Please contact our leasing office for specific details."} />
                <FAQ 
                question={"Are utilities included in the rent?"} 
                answer={"In some cases, utilities may be included in the rent. However, this can vary depending on the property. Please inquire with our leasing team for details on specific units."} />
                <FAQ 
                question={"Can I renew my lease?"} 
                answer={"Yes, you can renew your lease with us. Our leasing team will reach out to you prior to the end of your lease term to discuss renewal options and any changes in terms or pricing."} />
                <FAQ 
                question={"Do you require a security deposit?"} 
                answer={"Yes, we typically require a security deposit upon signing a lease agreement. This deposit is refundable, pending inspection of the property upon move-out."} />
                <FAQ 
                question={"Are there any additional fees or charges I should be aware of?"} 
                answer={"Depending on the property and lease agreement, there may be additional fees such as pet fees, parking fees, or application fees. Our leasing team will provide you with a breakdown of all applicable charges."} />
                <FAQ 
                question={"Do you offer corporate housing or short-term rentals?"} 
                answer={"Yes, we offer corporate housing and short-term rental options for individuals or companies in need of temporary accommodations. These options are ideal for business travelers, relocations, or temporary assignments."} />
                <FAQ 
                question={"What is your policy on lease termination or early move-out?"} 
                answer={"Our lease termination policy varies depending on the terms of your lease agreement. In some cases, early termination may incur fees or penalties. Please review your lease agreement or contact our leasing team for details on lease termination options."} />
            </div>  

            <div className="my-16 mx-10">
                <p className="text-2xl font-bold mx-2">Customer support</p>
                <FAQ 
                question={"How can I contact customer support?"} 
                answer={"You can contact our customer support team by phone at +94-751542-123 or by email at oceanview@support.com. We're available Monday through Friday from 09.00am to 05.00pm."} />
            </div>        

            <div className="mt-16 mx-10 pb-16">
                <p className="text-2xl font-bold mx-2">Services</p>
                <FAQ 
                question={"What services do you offer?"} 
                answer={"We offer a variety of services including renting and buying options for apartments, as well as assistance with property management."} />
            </div> 
        </div> 

        </>
    );
}

export default FAQPage;