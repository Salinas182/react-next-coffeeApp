import Link from "next/link";
import CoffeeCard from "@/components/CoffeeCard";
import createCoffeeTable from "./db/createCoffeeTable";
import getAllCoffees from "./db/getAllCoffees";
import seedCoffeeTable from "./db/seedCoffeeTable";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";

export default async function Home() {
  let coffees = [];
  try {
    await createCoffeeTable();
    await seedCoffeeTable();

    coffees = await getAllCoffees();
  } catch (error) {
    console.error("Error fetching coffees:", error);
  }

  if (!coffees.length) {
    return <p>No coffees available</p>;
  }

  return (
    <main className="bg-cover bg-center bg-no-repeat h-screen bg-[url('/images/backgroundImg.jpg')] bg-black/60 bg-blend-overlay text-white py-6 px-[25px] lg:px-64 lg:bg-[url('/images/backgroundImgDesktop.jpg')]">
      <NavBar />

      <div className="flex justify-center text-center flex-col mt-12 mb-16 p-8 gap-y-8 lg:w-1/2 lg:p-0 lg:text-start">
        <h1 className="font-bold tracking-tighter text-[64px] lg:text-[130px]">
          ROASTED COFFEE
        </h1>

        <p className="font-normal tracking-wide text-[20px]">
          Choose a coffee from below or create your own.
        </p>

        <Link className="no-underline lg:w-[234px]" href="/add">
          <Button
            label="Create your own coffee"
            type="primary"
            styles="h-[45px] w-full"
          />
        </Link>
      </div>
      <div className="gap-[25px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </main>
  );
}
