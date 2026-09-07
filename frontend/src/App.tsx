import { useState } from "react";
import SearchForm from "./components/SearchForm";
import LoadingCard from "./components/LoadingCard";
import ResultCard from "./components/ResultCard";
import ErrorCard from "./components/ErrorCard";
import { searchHotels } from "./services/hotelService";
import type { HotelResult } from "./types/hotel";
import SupplierComparison from "./components/SupplierComparison";
import SearchHistory from "./components/SearchHistory";
import { motion } from "framer-motion";

interface SearchData {
  city: string;
  checkIn: string;
  checkOut: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [hotel, setHotel] = useState<HotelResult | null>(null);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] =
    useState<string[]>(() => {
      const saved = localStorage.getItem(
        "hotelSearchHistory"
      );

      return saved
        ? (JSON.parse(saved) as string[])
        : [];
    });

  const [supplierAData, setSupplierAData] = useState<{
    supplier: string;
    price: number;
  } | null>(null);

  const [supplierBData, setSupplierBData] = useState<{
    supplier: string;
    price: number;
  } | null>(null);

  const handleSearch = async (data: SearchData) => {
    try {
      setLoading(true);
      setError("");
      setHotel(null);

      const result = await searchHotels(data);

      setHotel(result.bestHotel);

      setSupplierAData(result.supplierA);

      setSupplierBData(result.supplierB);

      const newSearch = `${data.city}`;

      setSearchHistory((prev) => {
        const updated = [
          newSearch,
          ...prev.filter((item) => item !== newSearch),
        ].slice(0, 5);

        localStorage.setItem(
          "hotelSearchHistory",
          JSON.stringify(updated)
        );

        return updated;
      });
    } catch {
      setError("Failed to search hotels");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div
      className="
  relative
  overflow-hidden
  min-h-screen
  bg-gradient-to-br
  from-slate-950
  via-indigo-950
  to-slate-950
"
    >
      <div className="absolute top-20 left-20 h-72 w-72 bg-blue-500 rounded-full blur-[150px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 rounded-full blur-[180px] opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 h-72 w-72 bg-purple-500 rounded-full blur-[150px] opacity-20" />
      <div
        className="
  absolute
  inset-0
  bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
  bg-[size:60px_60px]
  "
      />
      <div className="relative z-10 max-w-7xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full mb-6 border border-indigo-500/30">
            ✨ Powered by React + TypeScript + Temporal
          </div>

          <h1 className="text-7xl font-black text-white mb-6 tracking-tight">
            🏨 Hotel Rate Comparator
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Find the best hotel deals from multiple suppliers instantly,
            compare prices in real-time, and choose the cheapest option.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-300">
              ⚡ Parallel Supplier Search
            </span>

            <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-300">
              💰 Best Price Selection
            </span>

            <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-slate-300">
              🔄 Retry & Timeout Handling
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            bg-white/10
            backdrop-blur-xl
            rounded-3xl
            shadow-2xl
            border
            border-white/10
            p-8
          "
        >
          <SearchForm onSearch={handleSearch} />
        </motion.div>


        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <LoadingCard />
          </motion.div>
        )}


        {hotel && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultCard hotel={hotel} />
          </motion.div>
        )}

        {hotel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SupplierComparison
              supplierA={supplierAData}
              supplierB={supplierBData}
            />
          </motion.div>
        )}

        {error && <ErrorCard message={error} />}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <SearchHistory searches={searchHistory} />
        </motion.div>
      </div>
      <footer className="mt-16 text-center text-slate-500 text-sm">
        Built with React, TypeScript, Temporal & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;