"use client";

import { useContext } from "react";
import { CoffeesContext } from "@/context/CoffeesContext";

export default function useCoffees() {
  const context = useContext(CoffeesContext);

  if (!context) {
    throw new Error("useCoffees must be used within a CoffeesProvider");
  }
  return context;
}
