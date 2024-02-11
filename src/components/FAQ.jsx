import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const FAQ = ({ question, answer }) => {

    const [selected, setSelected] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setSelected(!selected);
        console.log(selected);
    }

    const style ={fontSize: "1.25rem", marginLeft: "auto"};

    const fadeIn = {
        hidden: {
            opacity: 0,
        },
        visibile: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0
        }
    }

    return (
        <>
        <div className="px-2 my-5 cursor-pointer" onClick={handleClick}>
            <div className="flex flex-row my-2">
                <p className="text-md md:text-lg font-bold w-2/3 md:w-full">{question}</p>
                {selected ? 
                <FaMinus style={style}/> 
                : <FaPlus style={style}/>}
            </div>
            { selected ? 
            <motion.p 
            className="-mt-1"
            variants={fadeIn}
            initial="hidden"
            animate="visibile"
            exit="exit">
                {answer}
            </motion.p> 
            : null}
        </div>
        <div className="w-full h-0 border-2 border-slate-600"></div>
        </>
    );
}

export default FAQ;