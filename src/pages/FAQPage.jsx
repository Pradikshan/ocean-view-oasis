import Badge from "../components/Badge";
import FAQ from "../components/FAQ";

const FAQPage = () => {
    return (
        <>
        <div className="mt-16">
           <p className="text-3xl font-bold text-center">FAQ</p>
           <p className="text-xl font-bold text-center">We have got answers</p>
        </div>

        <div className="flex flex-row justify-center">
            <Badge text={"Apartment"} />
            <Badge text={"Customer service"} />
            <Badge text={"Buying/Renting"} />
            <Badge text={"Services"} />
        </div>

        <div className="mt-5">
            <p className="text-3xl font-bold mx-2">Apartment</p>
            <FAQ question={""} answer={""}/>
        </div>

        

        </>
    );
}

export default FAQPage;