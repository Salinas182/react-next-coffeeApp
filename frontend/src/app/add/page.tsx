"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isAxiosError } from "axios";
import httpAdapter from "@/adapters/httpAdapter";
import Input from "@/components/Input";
import Button from "@/components/Button";
import CustomRadioGroup from "@/components/RadioGroup";
import { COFFEE_TYPES } from "@/utils/constants";
import closeIcon from "../../../public/icons/close.png";

const coffeeTypesOptions = [
  { name: COFFEE_TYPES.ARABIC, value: COFFEE_TYPES.ARABIC },
  { name: COFFEE_TYPES.ROBUSTA, value: COFFEE_TYPES.ROBUSTA },
];

export default function CoffeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      name: "",
      description: "",
      type: "",
      price: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await httpAdapter.post("/api/coffee", formData);
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error(`Error: ${response.data.error}`);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col text-white px-[25px] py-[50px] lg:my-36 lg:mx-[600px] lg:bg-[#191919] lg:px-36">
      <Link href="/" className="relative left-[295px] mb-12 lg:left-[460px] lg:mb-6">
        <Image src={closeIcon} alt="Go back" width={40} height={40} />
      </Link>

      <h1 className="text-4xl font-bold tracking-tighter text-center mb-6">
        CREATE NEW
      </h1>

      <div className="flex justify-center">
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <Input
            name="name"
            label="Name"
            placeholder="Name your coffee here"
            value={formData.name}
            styles={styles.inputs}
            onChange={handleChange}
          />

          <Input
            name="price"
            label="Price"
            type="number"
            placeholder="0.00"
            value={formData.price}
            styles={styles.inputs}
            onChange={handleChange}
          />

          <CustomRadioGroup
            fieldName="type"
            label="Type"
            value={formData.type}
            options={coffeeTypesOptions}
            onChange={(value) =>
              setFormData({
                ...formData,
                type: value,
              })
            }
          />

          <Input
            name="image_url"
            label="Upload image"
            type="url"
            placeholder="Paste image URL here"
            value={formData.image_url}
            styles={styles.inputs}
            disabled
          />

          <Input
            name="description"
            label="Description"
            placeholder="Add a description"
            value={formData.description}
            styles={styles.inputs}
            onChange={handleChange}
          />

          <div className="flex flex-col mt-20 gap-[10px]">
            <Button
              label="Discard"
              type="secondary"
              onClick={clearForm}
              styles={styles.buttons}
            />

            <Button
              label="Confirm"
              type="primary"
              onClick={handleSubmit}
              styles={styles.buttons}
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  inputs: {
    container: "flex flex-col gap-2",
    label: "text-sm font-medium text-[#9B9B9B]",
    input: "bg-[#2D2D2D] border border-gray-input rounded-lg h-10 pl-2 text-sm",
  },

  buttons: "h-[45px] w-full",
};

