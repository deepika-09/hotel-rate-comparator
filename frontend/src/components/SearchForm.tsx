import { useForm } from "react-hook-form";
import { MapPin, Calendar, Search } from "lucide-react";

interface SearchFormData {
    city: string;
    checkIn: string;
    checkOut: string;
}

interface Props {
    onSearch: (data: SearchFormData) => void;
}

export default function SearchForm({ onSearch }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SearchFormData>();

    return (
        <form
            onSubmit={handleSubmit(onSearch)}
            className="space-y-6 "
        >
            {/* City */}

            <div>
                <label className="block text-slate-300 mb-2 font-medium">
                    Destination City
                </label>

                <div className="relative">
                    <MapPin
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                        size={18}
                    />

                    <input
                        {...register("city", {
                            required: "City is required",
                        })}
                        placeholder="Delhi, Mumbai, Bangalore..."
                        className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              pl-12
              pr-4
              py-4
              text-white
              placeholder-slate-500
              outline-none
              focus:border-cyan-400
              transition
            "
                    />
                </div>

                {errors.city && (
                    <p className="text-red-400 text-sm mt-2">
                        {errors.city.message}
                    </p>
                )}
            </div>

            {/* Dates */}

            <div className="grid md:grid-cols-2 gap-4">

                <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                        Check-In Date
                    </label>

                    <div className="relative">
                        <Calendar
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                            size={18}
                        />

                        <input
                            type="date"
                            {...register("checkIn", {
                                required: "Check-In is required",
                            })}
                            className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                pl-12
                pr-4
                py-4
                text-white
                outline-none
                focus:border-cyan-400
                transition
              "
                        />
                    </div>

                    {errors.checkIn && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.checkIn.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-slate-300 mb-2 font-medium">
                        Check-Out Date
                    </label>

                    <div className="relative">
                        <Calendar
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                            size={18}
                        />

                        <input
                            type="date"
                            {...register("checkOut", {
                                required: "Check-Out is required",
                            })}
                            className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-2xl
                pl-12
                pr-4
                py-4
                text-white
                outline-none
                focus:border-cyan-400
                transition
              "
                        />
                    </div>

                    {errors.checkOut && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.checkOut.message}
                        </p>
                    )}
                </div>

            </div>

            {/* Search Button */}

            <button
                type="submit"
                className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          bg-gradient-to-r
          from-indigo-600
          to-cyan-500
          text-white
          py-4
          rounded-2xl
          font-semibold
          text-lg
          shadow-lg
          transition-all
          hover:scale-[1.02]
          hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]
        "
            >
                <Search size={20} />
                Search Best Deals
            </button>
            <p className="text-center text-slate-400 text-sm mt-4">
                Compare prices from multiple hotel suppliers in real-time
            </p>

        </form>
    );
}
