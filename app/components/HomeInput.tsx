import { Search } from "lucide-react";


export default function HomeInput() {
  return (
    <div className=" bg-gray-400/14 rounded-xl p-3 border-[#F2E9D6]/30 border flex  justify-center items-center gap-2">
      <Search size={18} />
      <input type="search" placeholder="Search for a city, a place. a season..." className="text-[#F2E9D6] w-full text-center" />
    </div>
  );
}
