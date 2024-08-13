import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@/components/Input";

describe("Input component", () => {
  const defaultProps = {
    name: "test-input",
    label: "Test Input",
    placeholder: "Enter text",
    value: "default value",
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };

  it("should render the input with the correct label and placeholder", () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it("should call onChange when the input value changes", () => {
    render(<Input {...defaultProps} />);

    const inputElement = screen.getByLabelText(defaultProps.label);

    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("should call onBlur when the input loses focus", () => {
    render(<Input {...defaultProps} />);

    const inputElement = screen.getByLabelText(defaultProps.label);

    fireEvent.blur(inputElement);

    expect(defaultProps.onBlur).toHaveBeenCalled();
  });

  it("should be disabled when the disabled prop is true", () => {
    render(<Input {...defaultProps} disabled={true} />);

    const inputElement = screen.getByLabelText(defaultProps.label);

    expect(inputElement).toBeDisabled();
  });

  it("should render with custom styles, if provided", () => {
    const customStyles = {
      container: "custom-container",
      label: "custom-label",
      input: "custom-input",
    };

    render(<Input {...defaultProps} styles={customStyles} />);

    expect(screen.getByLabelText(defaultProps.label).className).toContain(
      customStyles.input
    );
  });
});
