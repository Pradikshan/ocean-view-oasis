import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FAQ = ({ question, answer }) => {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        console.log(selected);
    }

    const style ={fontSize: 25};

    return (
        <div className="mx-2" onClick={handleClick}>
            <div className="flex flex-row justify-between">
                <p className="text-xl font-bold">{question}</p>
                <FaPlus style={style}/>
                
            </div>
            <p>{answer}</p>
        </div>
    );
}

export default FAQ;