import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../components/ContactForm"

test("renders contact form without crashing", () => {
  render(<ContactForm />);
});

describe("user can type in all inputs", () => {
  it("can type in first name input", () => {
    const form = render(<ContactForm />)
    const input = form.getByPlaceholderText(/edd/i)

    userEvent.type(input, "123456789012345")

    expect(input.value).toBe('123456789012345')
    
  })

  it("can type in last name input", () => {
    const form = render(<ContactForm />)
    const input = form.getByPlaceholderText(/burke/i)

    userEvent.type(input, "123456789012345")

    expect(input.value).toBe('123456789012345')
  })

  it("can type in email input", () => {
    const form = render(<ContactForm />)
    const input = form.getByTestId("emailInput")

    userEvent.type(input, "JohnDoe@JohnDoe.com")

    expect(input.value).toBe('JohnDoe@JohnDoe.com')
  })

  it("can type in email input", () => {
    const form = render(<ContactForm />)
    const input = form.getByTestId("messageInput")

    userEvent.type(input, "This is an example of speech synthesis in English.")

    expect(input.value).toBe('This is an example of speech synthesis in English.')
  })
})