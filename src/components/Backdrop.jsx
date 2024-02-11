import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div 
        key="backdrop"
        className="fixed z-20 top-0 left-0 right-0 bottom-0 w-full h-full transparent bg-transparent"
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