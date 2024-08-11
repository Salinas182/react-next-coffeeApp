"use client";

import Image from "next/image";
import React from "react";
import type { Coffee } from "@/types/Coffee";
import { COFFEE_TYPES } from "@/utils/constants";

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const { type, description, name, price, image_url } = coffee;
  return (
    <div className="h-[472px] bg-[#191919] rounded-md my-2 w-full lg:w-[390px]">
      <div className="h-1/2 p-[25px]">
        <div
          className={`h-9 w-[77px] ${
            type === COFFEE_TYPES.ARABIC ? "bg-[#77A9B0]" : "bg-[#3A383D]"
          } rounded-[41px] flex items-center justify-center`}
        >
          <span className="text-base font-normal">{type}</span>
        </div>

        <div className="relative h-[216px] w-full">
          <Image
            src={image_url}
            alt="Coffee image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-1/2 p-[25px]">
        <h1 className="text-2xl font-semibold text-brand-primary">{name}</h1>
        <p className="mt-2 font-medium text-base text-[#909090]">
          {description}
        </p>
        <span className="mt-2 text-xl font-bold">{price} €</span>
      </div>
    </div>
  );
}
