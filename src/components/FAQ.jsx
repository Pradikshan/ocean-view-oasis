import { FaPlus } from "react-icons/fa6";

const FAQ = ({ question, answer }) => {
    return (
        <div>
            <div className="flex flex-row">
                <p>{question}</p>

            </div>
        </div>
    );
}

export default FAQ;