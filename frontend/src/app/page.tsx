import Link from "next/link";
import { Card } from "@/components/Card";
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
    <main className="bg-cover bg-center bg-no-repeat h-screen bg-[url('/images/backgroundImg.jpg')] bg-black/60 bg-blend-overlay text-white py-6 px-4">
      <NavBar />

      <div className="flex justify-center text-center flex-col mt-12 mb-16 p-8 gap-y-8">
        <h1 className="font-normal tracking-tighter text-[64px]">
          ROASTED COFFEE
        </h1>

        <p className="font-normal tracking-wide text-[20px]">
          Choose a coffee from below or create your own.
        </p>

        <Link className="no-underline" href="/add">
          <Button
            label="Create your own coffee"
            type="primary"
            styles="h-[45px] w-full"
          />
        </Link>
      </div>
      {coffees.map(({ id, name, description }) => (
        <Card key={id} title={name} description={description} />
      ))}
    </main>
  );
}
