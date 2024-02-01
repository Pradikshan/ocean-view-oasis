import { SplitLayout } from "../components/SplitLayout";
import Inquiry from "../components/Inquiry";


const ContactUsPage = () => {
    return (
        <>
        <div className="relative">
            <div className="flex flex-col justify-center items-center">
                <img src="../images/service.jpg" alt="customer_service" className="z-0 opacity-95 w-full h-1/2" />
                <div className="z-10 absolute">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-lg md:text-4xl text-white ps-3">Contact Us</p>
                        <p className="font-lg text-sm md:text-2xl text-center text-white">Reach out to us – let's start a conversation about turning your dreams of coastal living into a reality</p>
                        {/* TODO: add a CTA btn */}
                    </div>
                </div> 
            </div>
        </div>

        <div className="pt-16">
            <SplitLayout>
                {/* <div className="basis-1/2">
                    <p className="text-3xl font-bold">Reach out to us at:</p>
                    <div className="flex flex-row items-center mt-5">
                        <img src="../images/telephone.png" alt="telephone" className="w-8 h-8"/>
                        <p className="mx-2 font-bold">+94 76 5944 123</p>
                    </div>

                    <div className="flex flex-row items-center mt-5">
                        <img src="../images/email.png" alt="telephone" className="w-8 h-8"/>
                        <p className="mx-2 font-bold">oceanview@oasis.com</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="ms-10 h-full w-0 border-2 border-black"></div>

                    </div>

                </div> */}

                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-3xl font-bold">Reach out to us at:</p>
                        <div className="flex flex-row items-center mt-5">
                            <img src="../images/telephone.png" alt="telephone" className="w-8 h-8"/>
                            <p className="mx-2 font-bold">+94 76 5944 123</p>
                        </div>

                        <div className="flex flex-row items-center mt-5">
                            <img src="../images/email.png" alt="telephone" className="w-8 h-8"/>
                            <p className="mx-2 font-bold">oceanview@oasis.com</p>
                        </div>
                    </div>

                    <div className="ms-80 h-full w-0 border-2 border-black items-end"></div>
                    

                </div>

                <div className="ps-20">
                    <Inquiry />
                </div>
            </SplitLayout>
        </div>
        </>
    );
}

export default ContactUsPage;