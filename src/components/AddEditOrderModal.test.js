import React, { act }  from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddEditOrderModal from "../components/AddEditOrderModal";

it("renders the order modal and allows input", () => {  
  act(() => {
    render(<AddEditOrderModal onClose={jest.fn()} />);
  });  
  
  const descriptionInput = screen.getByPlaceholderText("Description");
  fireEvent.change(descriptionInput, { target: { value: "Oil change" } });
  expect(descriptionInput.value).toBe("Oil change");
});

it("closes modal when cancel is clicked", () => {
  const onClose = jest.fn();
  act(() => {
    render(<AddEditOrderModal onClose={onClose} />);
  });  
  fireEvent.click(screen.getByText("Cancel"));
  expect(onClose).toHaveBeenCalled();
});