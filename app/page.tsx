import CarCard from "@/components/templates/CarCard";
import ShowMore from "@/components/templates/ShowMore";
import Hero from "@/components/templates/Hero";
import SearchBar from "@/components/templates/SearchBar";
import { fetchCar } from "@/utils/rapidApi";
import cars from "../database/index.json";


export default async function Home(searchParams:any) {
  /* because of using json data file, we don't need async function with searchparams arguments
   const allCars = await fetchCar({
    manufacture: searchParams.searchParams.manufacture || "",
    year: searchParams.searchParams.year || 2022,
    fuel: searchParams.searchParams.fuel || "",
    limit: searchParams.searchParams.limit || 10,
    model: searchParams.searchParams.model || "",
  })*/
 console.log(searchParams)
  let allCars = cars;
  const model = searchParams.searchParams.model?.toLowerCase() || "";
  const manufacture = searchParams.searchParams.manufacture?.toLowerCase() || "";
  const fuel = searchParams.searchParams.fuel?.toLowerCase() || "";
  const year = searchParams.searchParams.year || "";

  if(model !== "" && manufacture!== "" ){
    allCars= cars.filter((car)=> car.model.toLowerCase().includes(model) && car.make.toLowerCase().includes(manufacture)
    )
  }else if(fuel !== ""){
    allCars= cars.filter((car)=> car.fuel_type === fuel)
  }else if (year !== ""){
    allCars= cars.filter((car)=> car.year == year)
  }else if(fuel !== "" && year !== "" ){
    allCars = cars.filter((car)=> car.fuel_type === fuel && car.year === year)
  }

  //console.log(allCars);

  const isEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;
  return (
    <div className="overflow-hidden">
      <Hero />
      <SearchBar />
      {isEmpty ? (
        <div className="mt-16 min-h-[150px] flex justify-center items-center flex-col gap-2;">
          <h2 className="text-black text-xl font-bold"> Oops, no results.</h2>
          {/*<p>{allCars?.message}</p>*/}
        </div>
      ) : (
        <section className="max-w-[1440px] mx-auto sm:px-16 px-6 py-4 mt-5 flex flex-col">
          <div className="flex flex-wrap gap-10 justify-around">
            {allCars.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </div>
          {/*<ShowMore
            pageNumber={(searchParams.searchParams.limit || 10) / 10}
            isNext={allCars.length < (searchParams.searchParams.limit || 10)}
          />*/}
        </section>
      )}
    </div>
  );
}
