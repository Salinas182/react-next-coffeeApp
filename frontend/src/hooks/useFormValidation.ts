type FormValues = Record<string, string>;

export default function useFormValidation(initialValues: FormValues) {
  const validateForm = () => {
    const valid = Object.values(initialValues).every(
      (value) => value.trim() !== ""
    );
    return { valid };
  };

  return { validateForm };
}
