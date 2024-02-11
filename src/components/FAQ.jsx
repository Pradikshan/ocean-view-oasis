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

    const style ={fontSize: 20};

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
        <div className="mx-2 my-5 cursor-pointer" onClick={handleClick}>
            <div className="flex flex-row justify-between my-2">
                <p className="text-lg font-bold">{question}</p>
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