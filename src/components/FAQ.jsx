import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQ = ({ question, answer }) => {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        console.log(selected);
    }

    const style ={fontSize: 25};

    return (
        <div className="mx-2 my-5 cursor-pointer border-2 border-white border-b-slate-600" onClick={handleClick}>
            <div className="flex flex-row justify-between my-2">
                <p className="text-xl font-bold">{question}</p>
                {selected ? <FaMinus style={style}/> : <FaPlus style={style}/>}
            </div>
            { selected ? <p className="-mt-1 text-lg">{answer}</p> : null}
        </div>
    );
}

export default FAQ;