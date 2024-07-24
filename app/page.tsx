import CarCard from "@/components/templates/CarCard";
import ShowMore from "@/components/templates/ShowMore";
import Hero from "@/components/templates/Hero";
import SearchBar from "@/components/templates/SearchBar";
import { fetchCar } from "@/utils/rapidApi";



export default async function Home(searchParams: any) {
  const allCars = await fetchCar({
    manufacture: searchParams.searchParams.manufacture || "",
    year: searchParams.searchParams.year || 2022,
    fuel: searchParams.searchParams.fuel || "",
    limit: searchParams.searchParams.limit || 10,
    model: searchParams.searchParams.model || "",
  })
  //console.log(allCars);
  const isEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;
  return (
    <div className="overflow-hidden">
      <Hero />
      <SearchBar/>
      {isEmpty ? (
        <div className='mt-16 flex justify-center items-center flex-col gap-2;'>
          <h2 className='text-black text-xl font-bold'> Oops, no results.</h2>
          <p>{allCars?.message}</p>
        </div>
      ) : (
        <section className="max-w-[1440px] mx-auto sm:px-16 px-6 py-4 mt-5 flex flex-col">
          <div className='flex flex-wrap gap-10 justify-around'>
            {allCars.map((car, index) => <CarCard car={car} key={index} />)}
          </div>
          <ShowMore pageNumber={(searchParams.searchParams.limit || 10)/10} 
            isNext={allCars.length < (searchParams.searchParams.limit || 10)}
          />
        </section>
      )}
    </div>
  );
}
