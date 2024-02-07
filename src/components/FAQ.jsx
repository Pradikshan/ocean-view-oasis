import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FAQ = ({ question, answer }) => {

    // const [selected, setSelected] = useState(false);

    const style ={fontSize: 25};

    return (
        <div>
            <div className="flex flex-row justify-between mx-2">
                <p className="text-xl font-bold">{question}</p>
                <FaPlus style={style}/>
            </div>
        </div>
    );
}

export default FAQ;