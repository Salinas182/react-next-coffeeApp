import { renderHook } from "@testing-library/react";
import useFormValidation from "@/hooks/useFormValidation";

describe("useFormValidation hook", () => {
  it("should return valid as true if all form fields are filled", () => {
    const initialValues = {
      name: "Mock name",
      description: "Mock description",
      type: "Arabica",
      price: "5.00",
      image_url: "https://mockurl.com/image.png",
    };

    const { result } = renderHook(() => useFormValidation(initialValues));
    const { validateForm } = result.current;

    const { valid } = validateForm();

    expect(valid).toBe(true);
  });

  it("should return valid as false if any form field is empty", () => {
    const initialValues = {
      name: "Mock name",
      description: "Mock description",
      type: "Arabica",
      price: "",
      image_url: "https://mockurl.com/image.png",
    };

    const { result } = renderHook(() => useFormValidation(initialValues));
    const { validateForm } = result.current;

    const { valid } = validateForm();

    expect(valid).toBe(false);
  });
});
