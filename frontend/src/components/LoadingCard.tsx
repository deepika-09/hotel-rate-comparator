import { motion } from "framer-motion";
import { Loader2, Search, Building2 } from "lucide-react";

export default function LoadingCard() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
        mt-8
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-2xl
      "
        >
            <div className="flex items-center gap-3 mb-6">
                <Loader2
                    size={28}
                    className="animate-spin text-cyan-400"
                />

                <h2 className="text-2xl font-bold text-white">
                    Searching Best Hotels
                </h2>
            </div>

            <div className="space-y-4">

                <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                    }}
                    className="
            flex
            items-center
            gap-3
            p-4
            bg-white/5
            rounded-2xl
          "
                >
                    <Building2 className="text-indigo-400" />

                    <span className="text-slate-300">
                        Contacting Supplier A...
                    </span>
                </motion.div>

                <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.2,
                    }}
                    className="
            flex
            items-center
            gap-3
            p-4
            bg-white/5
            rounded-2xl
          "
                >
                    <Building2 className="text-cyan-400" />

                    <span className="text-slate-300">
                        Contacting Supplier B...
                    </span>
                </motion.div>

                <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.4,
                    }}
                    className="
            flex
            items-center
            gap-3
            p-4
            bg-white/5
            rounded-2xl
          "
                >
                    <Search className="text-green-400" />

                    <span className="text-slate-300">
                        Comparing hotel prices...
                    </span>
                </motion.div>

            </div>

            <div className="mt-6">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "linear",
                        }}
                        className="
              h-full
              w-1/3
              bg-gradient-to-r
              from-indigo-500
              to-cyan-500
            "
                    />
                </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-4">
                Finding the best deal for you...
            </p>
        </motion.div>
    );
}