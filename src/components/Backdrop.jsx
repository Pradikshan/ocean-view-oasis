import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div 
        key="backdrop"
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center transparent bg-trans"
        onClick={onClick}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop;