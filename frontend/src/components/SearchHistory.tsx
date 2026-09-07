import { motion } from "framer-motion";
import { Clock3, MapPin } from "lucide-react";

interface Props {
    searches: string[];
}

export default function SearchHistory({
    searches,
}: Props) {
    if (!searches.length) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
        mt-8
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
        shadow-2xl
      "
        >
            <div className="flex items-center gap-3 mb-6">
                <Clock3
                    className="text-cyan-400"
                    size={24}
                />

                <h2 className="text-2xl font-bold text-white">
                    Recent Searches
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
                {searches.map((search, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.03,
                        }}
                        className="
              flex
              items-center
              gap-3
              px-4
              py-4
              rounded-2xl
              bg-white/5
              border
              border-white/10
              text-slate-200
              hover:bg-white/10
              transition-all
              cursor-pointer
            "
                    >
                        <MapPin
                            size={18}
                            className="text-indigo-400"
                        />

                        <span>{search}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}