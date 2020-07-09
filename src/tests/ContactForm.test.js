import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../components/ContactForm"

test("renders contact form without crashing", () => {
  render(<ContactForm />);
});

describe("text validation displays when a user begins typing", () => {
  it("displays validation for first name input", () => {
    const form = render(<ContactForm />)
    const input = form.getByPlaceholderText(/edd/i)

    userEvent.type(input, "123456789012345")

    expect(input.value).toBe('123456789012345')
  })
})