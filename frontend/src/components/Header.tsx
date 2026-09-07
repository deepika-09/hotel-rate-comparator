import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
        >
            <h1 className="text-6xl font-extrabold text-white">
                Hotel Rate Comparator
            </h1>

            <p className="text-slate-300 mt-3 text-lg">
                Compare hotel prices across suppliers instantly
            </p>
        </motion.div>
    );
}
