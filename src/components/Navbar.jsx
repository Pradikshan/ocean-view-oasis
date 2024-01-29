import { useState } from "react";

const Navbar = () => {

    const [isToggleMEnu, setIsToggleMenu] = useState(false);

    return (
        <div className="hidden md:flex flex-row w-full">
            <div>
                <img src="../public/images/logo.png" alt="logo" />
            </div>

            <div>
                <ul>
                    <li>Home</li>
                </ul>
            </div>

        </div>
    );

}

export default Navbar;