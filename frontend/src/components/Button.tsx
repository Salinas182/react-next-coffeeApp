"use client";

interface Props {
  label: string;
  styles?: string;
  type?: "primary" | "secondary";
  disabled?: boolean;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({
  label,
  styles,
  type = "primary",
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      className={`rounded-[34px] text-white ${
        styles ?? "w-[115px] h-[45px] left-[236px]"
      } ${buttonStyles[type]} ${disabled && buttonStyles.disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

const buttonStyles = {
  primary: "bg-brand-primary",
  secondary: "bg-black border-brand-primary border-solid border-[1px]",
  disabled: "cursor-not-allowed opacity-50",
};
