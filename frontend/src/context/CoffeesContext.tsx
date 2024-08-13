"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Coffee } from "@/types/Coffee";

interface ICoffeesContext {
  savedCoffees: Coffee[];
  updateCoffees: Dispatch<SetStateAction<Coffee[]>>;
  savingError: boolean;
  setSavingError: Dispatch<SetStateAction<boolean>>;
}

export const CoffeesContext = createContext<ICoffeesContext | undefined>(
  undefined
);

export function CoffeesProvider({ children }: { children: React.ReactNode }) {
  const [allCoffees, setAllCoffees] = useState<Coffee[]>([]);
  const [savingError, setSavingError] = useState<boolean>(false);

  return (
    <CoffeesContext.Provider
      value={{
        savedCoffees: allCoffees,
        updateCoffees: setAllCoffees,
        savingError,
        setSavingError,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
