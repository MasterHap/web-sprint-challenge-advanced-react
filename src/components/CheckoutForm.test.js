import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
    const form = screen.queryByText("Checkout Form");
    expect(form).toBeInTheDocument();
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstnameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstnameInput, "Jake");

    const lastnameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastnameInput, "Happel");

    const AddressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(AddressInput, "2000 Stevie Dr");

    const CityInput = screen.getByLabelText(/City:/i);
    userEvent.type(CityInput, "Floyds Knobs");

    const StateInput = screen.getByLabelText(/State:/i);
    userEvent.type(StateInput, "Indiana");

    const ZipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(ZipInput, "47119");

    const button = screen.getByRole("button");
    userEvent.click(button)

    const element = screen.getByTestId('successMessage')
    expect(element).toBeInTheDocument();
});
