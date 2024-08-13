"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Coffee } from "@/types/Coffee";
import CoffeeCard from "./CoffeeCard";
import { COFFEE_TYPES } from "@/utils/constants";
import useCoffees from "@/hooks/useCoffees";
import Alert from "./Alert";

const SHOW_ALL = "All";

export default function CoffeesList({ coffees }: { coffees: Coffee[] }) {
  const [filter, setFilter] = useState<string>(SHOW_ALL);
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(coffees);
  const { updateCoffees, savingError } = useCoffees();

  useEffect(() => {
    if (!savingError) {
      return;
    }

    toast.custom((t) => (
      <Alert t={t} message="A coffee with the same name already exists." />
    ));

  }, [savingError]);

  useEffect(() => {
    updateCoffees(coffees);
  }, [coffees, updateCoffees]);

  useEffect(() => {
    setFilteredCoffees(
      filter === SHOW_ALL
        ? coffees
        : coffees.filter((coffee) => coffee.type === filter)
    );
  }, [filter, coffees]);

  return (
    <div className="w-full">
      <Toaster
        toastOptions={{ duration: 7000 }}
        containerStyle={{ position: "absolute" }}
      />

      <h2 className="text-2xl tracking-tighter text-center font-bold lg:text-4xl">
        MVST. EXCLUSIVE COFFEE
      </h2>

      <div className="flex bg-[#383838] justify-between  rounded-[33px] h-[50px] mx-auto my-6 lg:w-[548px] lg:my-12">
        <button
          onClick={() => setFilter(SHOW_ALL)}
          className={
            filter === SHOW_ALL ? styles.activeFilter : styles.inactiveFilter
          }
        >
          {SHOW_ALL}
        </button>

        <button
          onClick={() => setFilter(COFFEE_TYPES.ROBUSTA)}
          className={
            filter === COFFEE_TYPES.ROBUSTA
              ? styles.activeFilter
              : styles.inactiveFilter
          }
        >
          {COFFEE_TYPES.ROBUSTA}
        </button>

        <button
          onClick={() => setFilter(COFFEE_TYPES.ARABIC)}
          className={
            filter === COFFEE_TYPES.ARABIC
              ? styles.activeFilter
              : styles.inactiveFilter
          }
        >
          {COFFEE_TYPES.ARABIC}
        </button>
      </div>

      <div className="gap-[25px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  activeFilter: "bg-white text-black text-base rounded-[33px] w-1/3",
  inactiveFilter: "w-1/3 text-base",
};
