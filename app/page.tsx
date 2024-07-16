import Hero from "@/components/templates/Hero";
import SearchBar from "@/components/templates/SearchBar";


export default function Home() {
  return (
    <div className="overflow-hidden">
       <Hero/>
       <SearchBar/>
    </div>
  );
}
