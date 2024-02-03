import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";


const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0vh",
        opacity: 1,
        transition: {
            duration: 5,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

const Modal = ({ handleClose, text }) => {
    return (
        <div>
            <AnimatePresence>
                <Backdrop onClick={handleClose}>
                    <motion.div
                    drag
                    key="modal"
                    className="flex flex-col items-center bg-rose-300 rounded-xl p-20"
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                        <p>{text}</p>
                        <button onClick={handleClose}>Close</button>
                    </motion.div>
                </Backdrop>
            </AnimatePresence>
        </div>
    );

}

export default Modal;