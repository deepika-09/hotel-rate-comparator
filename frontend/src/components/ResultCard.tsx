import { motion } from "framer-motion";
import { Hotel, BadgeDollarSign, Trophy } from "lucide-react";
import type { HotelResult } from "../types/hotel";

interface Props {
    hotel: HotelResult;
}

export default function ResultCard({ hotel }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
    className="
mt-8
bg-gradient-to-r
from-green-500/20
to-emerald-500/10
backdrop-blur-xl
border
border-green-500/30
rounded-3xl
p-8
shadow-[0_0_50px_rgba(34,197,94,0.25)]
"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white">
                    <Trophy size={18} />
                    BEST DEAL FOUND
                </div>

                <div className="text-green-400 font-semibold">
                    Cheapest Available Rate
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                        <Hotel className="text-cyan-400" size={22} />
                        <span className="text-slate-400 text-sm">
                            Hotel Name
                        </span>
                    </div>

                    <p className="text-2xl font-bold text-white">
                        {hotel.name}
                    </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                        <BadgeDollarSign
                            className="text-green-400"
                            size={22}
                        />
                        <span className="text-slate-400 text-sm">
                            Best Price
                        </span>
                    </div>

                    <p className="text-3xl font-bold text-green-400">
                        ₹{hotel.price}
                    </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                        🏢
                        <span className="text-slate-400 text-sm">
                            Supplier
                        </span>
                    </div>

                    <p className="text-2xl font-bold text-white">
                        {hotel.supplier}
                    </p>
                </div>

            </div>
        </motion.div>
    );
}