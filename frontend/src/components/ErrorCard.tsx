import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface Props {
    message: string;
}

export default function ErrorCard({ message }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
        mt-8
        bg-red-500/10
        backdrop-blur-xl
        border
        border-red-500/30
        rounded-3xl
        p-6
        shadow-2xl
      "
        >
            <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-2xl">
                    <AlertTriangle
                        className="text-red-400"
                        size={28}
                    />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-red-400">
                        Hotel Search Failed
                    </h3>

                    <p className="text-slate-300 mt-2">
                        {message}
                    </p>

                    <p className="text-slate-500 text-sm mt-2">
                        Please try again or modify your search criteria.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
