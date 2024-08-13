"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import httpAdapter from "@/adapters/httpAdapter";
import Input from "@/components/Input";
import Button from "@/components/Button";
import CustomRadioGroup from "@/components/RadioGroup";
import { COFFEE_TYPES } from "@/utils/constants";
import closeIcon from "../../../public/icons/close.png";
import backgroundImg from "../../../public/images/desktop/add.png";
import useFormValidation from "@/hooks/useFormValidation";
import useCoffees from "@/hooks/useCoffees";

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
      "https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png",
  });
  const [formCompleted, setFormCompleted] = useState(false);
  const { validateForm } = useFormValidation(formData);
  const { setSavingError, updateCoffees, savedCoffees } = useCoffees();
  const router = useRouter();

  useEffect(() => {
    const { valid } = validateForm();
    setFormCompleted(valid);
  }, [formData, validateForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePriceBlur = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      price: parseFloat(prevFormData.price as string).toFixed(2),
    }));
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
      await httpAdapter.post("/api/coffee", formData);
      setSavingError(false);
      updateCoffees((prevCoffees) => [...prevCoffees, formData]);
      router.push("/");
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error("An unknown error occurred");
      }
      setSavingError(true);
      router.push("/");
    }
  };

  return (
    <div className="relative flex flex-col text-white px-[25px] py-[50px] lg:my-32 lg:mx-60 2xl:mx-[600px] lg:bg-[#191919] lg:px-36 lg:h-[750px]">
      <Link
        href="/"
        className="relative left-[295px] mb-12 lg:left-[460px] lg:mb-6"
      >
        <Image src={closeIcon} alt="Go back" width={40} height={40} />
      </Link>

      <h1 className="text-4xl font-bold tracking-tighter text-center mb-6">
        CREATE NEW
      </h1>

      <div className="flex justify-center">
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-4 lg:flex-row">
            <Input
              name="name"
              label="Name"
              placeholder="Name your coffee here"
              value={formData.name}
              styles={{
                ...styles.inputs,
                container: "flex flex-col gap-2 w-full lg:basis-3/4 lg:w-3/4",
              }}
              onChange={handleChange}
            />

            <Input
              name="price"
              label="Price"
              type="number"
              placeholder="0.00 €"
              value={formData.price}
              styles={{
                ...styles.inputs,
                container: "flex flex-col gap-2 w-full lg:basis-1/4 lg:w-1/4",
              }}
              onChange={handleChange}
              onBlur={handlePriceBlur}
            />
          </div>

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

          <div className="flex flex-col mt-20 gap-[10px] lg:flex-row lg:w-full lg:justify-center lg:mt-6">
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
              disabled={!formCompleted}
            />
          </div>
        </form>
      </div>

      <Image
        src={backgroundImg}
        alt="Background image"
        style={{ objectFit: "contain" }}
        width={251.33}
        height={168.04}
        className="hidden lg:block absolute bottom-[-20px] left-0"
      />
    </div>
  );
}

const styles = {
  inputs: {
    container: "flex flex-col gap-2 w-full",
    label: "text-sm font-medium text-[#9B9B9B]",
    input: "bg-[#2D2D2D] border border-gray-input rounded-lg h-10 pl-2 text-sm",
  },
  
  buttons: "h-[45px] w-full lg:w-[115px]",
};
