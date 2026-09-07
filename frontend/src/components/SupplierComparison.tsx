import { motion } from "framer-motion";
import { Trophy, Building2 } from "lucide-react";

interface SupplierData {
    supplier: string;
    price: number;
}

interface Props {
    supplierA: SupplierData | null;
    supplierB: SupplierData | null;
}

export default function SupplierComparison({
    supplierA,
    supplierB,
}: Props) {
    const winner =
        supplierA && supplierB
            ? supplierA.price <= supplierB.price
                ? supplierA.supplier
                : supplierB.supplier
            : supplierA
                ? supplierA.supplier
                : supplierB
                    ? supplierB.supplier
                    : "N/A";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
        mt-8
        bg-white/10
        backdrop-blur-xl
        rounded-3xl
        p-6
        shadow-2xl
        border
        border-white/10
      "
        >
            <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-cyan-400" size={28} />

                <h2 className="text-2xl font-bold text-white">
                    Supplier Comparison
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">

                <div
                    className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            hover:bg-white/10
            transition-all
          "
                >
                    <h3 className="text-slate-300 text-sm mb-2">
                        Supplier A
                    </h3>

                    <p className="text-3xl font-bold text-white">
                        {supplierA
                            ? `₹${supplierA.price}`
                            : "No Result"}
                    </p>
                </div>

                <div
                    className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            hover:bg-white/10
            transition-all
          "
                >
                    <h3 className="text-slate-300 text-sm mb-2">
                        Supplier B
                    </h3>

                    <p className="text-3xl font-bold text-white">
                        {supplierB
                            ? `₹${supplierB.price}`
                            : "No Result"}
                    </p>
                </div>

            </div>

            <div
                className="
          mt-6
          bg-gradient-to-r
          from-green-500/20
          to-emerald-500/20
          border
          border-green-500/30
          rounded-2xl
          p-5
        "
            >
                <div className="flex items-center gap-3">
                    <Trophy
                        className="text-yellow-400"
                        size={24}
                    />

                    <div>
                        <p className="text-sm text-green-300">
                            Best Available Offer
                        </p>

                        <p className="text-xl font-bold text-white">
                            {winner}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}