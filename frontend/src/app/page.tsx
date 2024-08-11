import Link from "next/link";
import createCoffeeTable from "./db/createCoffeeTable";
import getAllCoffees from "./db/getAllCoffees";
import seedCoffeeTable from "./db/seedCoffeeTable";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import CoffeesList from "@/components/CoffeesList";

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
    <main className="bg-cover bg-center bg-no-repeat h-screen bg-[url('/images/backgroundImg.jpg')] bg-black/60 bg-blend-overlay text-white py-6 px-[25px] lg:px-64 lg:bg-[url('/images/desktop/backgroundImgDesktop.jpg')]">
      <NavBar />

      <div className="flex justify-center text-center flex-col mt-24 mb-56 p-8 gap-y-10 lg:w-1/2 lg:p-0 lg:text-start lg:mt-56 lg:mb-96">
        <h1 className="font-bold tracking-tighter text-[48px] lg:text-[82px]">
          ROASTED COFFEE
        </h1>

        <p className="font-normal tracking-wide text-[20px] text-[#938E8E]">
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

      <CoffeesList coffees={coffees} />

      <Footer />
    </main>
  );
}
