import React, { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddEditCustomerModal from "../components/AddEditCustomerModal";

it("renders the customer modal and allows input", () => {
  act(() => {
    render(<AddEditCustomerModal onClose={jest.fn()} />);
  });
  const nameInput = screen.getByPlaceholderText("Name");
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  expect(nameInput.value).toBe("John Doe");
});

it("closes modal when cancel is clicked", () => {
  const onClose = jest.fn();
  act(() => {
    render(<AddEditCustomerModal onClose={onClose} />);
  });
  fireEvent.click(screen.getByText("Cancel"));
  expect(onClose).toHaveBeenCalled();
});
