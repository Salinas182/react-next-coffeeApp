"use client";

interface Props {
  label: string;
  styles?: string;
  type?: "primary" | "secondary";
}

export default function Button({ label, type = "primary", styles }: Props) {
  return (
    <button
      className={`rounded-[34px] text-white ${
        styles ?? "w-[115px] h-[45px] left-[236px]"
      } ${buttonStyles[type]} ${styles}`}
    >
      {label}
    </button>
  );
}

const buttonStyles = {
  primary: "bg-brand-primary",
  secondary: "bg-black border-brand-primary border-solid border-[1px]",
};
