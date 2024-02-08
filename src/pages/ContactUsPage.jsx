import SplitLayout from "../components/SplitLayout";
import Inquiry from "../components/Inquiry";
import ImageOverlay from "../components/ImageOverlay";


const ContactUsPage = () => {
    return (
        <>
        {/* <ImageOverlay 
        image_path={"../images/service-min.jpg"} 
        opacity={"opacity-90"} 
        margin_top={"-mt-8"}
        heading={"Contact Us"} 
        subheading={"Reach out to us – let's start a conversation about turning your dreams of coastal living into a reality"} /> */}

        <div className="pt-8 md:pt-16">
            <SplitLayout>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="px-6 mb-10">
                        <p className="text-2xl md:text-3xl font-bold">Reach out to us at:</p>
                        <div className="flex flex-row items-center mt-5">
                            <img src="../images/telephone.png" alt="telephone" className="w-8 h-8"/>
                            <p className="mx-2 font-bold">+94 76 5944 123</p>
                        </div>

                        <div className="flex flex-row items-center mt-5">
                            <img src="../images/email.png" alt="telephone" className="w-8 h-8"/>
                            <p className="mx-2 font-bold">oceanview@oasis.com</p>
                        </div>
                    </div>
                    {window.innerWidth >= 768 ? (
                        <div className="ms-80 h-full w-0 border-2 border-black items-end"></div>
                    ) : null}
                </div>

                <div className="px-6 md:ps-20">
                    <Inquiry />
                </div>
            </SplitLayout>
        </div>
        </>
    );
}

export default ContactUsPage;