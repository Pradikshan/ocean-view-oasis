import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-yellow-700 text-white mt-5 pt-6 md:pt-12 pb-2 px-2 md:px-8">
            <div>
                <p className="text-xl font-bold">Ocean View Oasis</p>
                <p>Ocean View Oasis: Where luxury meets tranquility. Experience the epitome of seaside living with breathtaking views, modern amenities, and a serene atmosphere. Your coastal haven awaits.</p>
            </div>

            <div className="md:justify-self-center">
                <p className="text-lg font-bold">Support</p>
                <p>FAQ</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div className="md:justify-self-center">
                <p className="text-lg font-bold">Contact us</p>
                <div className="flex flex-row items-center">
                    <BsFillTelephoneFill />
                    <p className="mx-2">+94 76 5944 123</p>
                </div>
                <div className="flex flex-row items-center">
                    <MdEmail />
                    <p className="mx-2">oceanview@oasis.com</p>
                </div>
            </div>

            <div>
                <p className="font-bold text-lg">Connect with us on:</p>
                <div className="flex flex-row text-2xl">
                    <img src="../images/instagram.png" alt="instagram" className="w-9 h-9 me-3"/>
                    <img src="../images/youtube.png" alt="youtube" className="w-9 h-9 me-3"/>
                    <img src="../images/twitter.png" alt="twitter" className="w-9 h-9 me-3"/>
                    <img src="../images/tik-tok.png" alt="tik-tok" className="w-9 h-9 me-3"/>
                    {/* <FaInstagram className="me-6"/>
                    <FaYoutube className="me-6"/>
                    <FaXTwitter className="me-6"/> */}
                </div>

                <p className="overflow-hidden mt-10">&copy; 2024 Ocean View Oasis, Inc. All Rights Reserved</p>
            </div>
        </div>
    );

}

export default Footer;