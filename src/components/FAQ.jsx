import { FaPlus } from "react-icons/fa6";

const FAQ = ({ question, answer }) => {

    const style ={fontSize: 30};

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