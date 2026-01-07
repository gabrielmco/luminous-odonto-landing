import { motion } from 'framer-motion';

const Reveal = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
