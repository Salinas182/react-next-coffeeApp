'use client';

interface Props {
  name: string;
  label: string;
  styles?: {
    container?: string;
    label?: string;
    input?: string;
  };
  type?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Input({
  name,
  label,
  type = "text",
  placeholder = "",
  value = "",
  styles = defaultStyles,
  disabled = false,
  onChange,
}: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        disabled={disabled}
      />
    </div>
  );
}

const defaultStyles = {
  container: "flex flex-col gap-2",
  label: "",
  input: "bg-gray-input",
};
