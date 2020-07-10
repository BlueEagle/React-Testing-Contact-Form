import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../components/ContactForm"
import { act } from 'react-dom/test-utils'

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


test("form submits and returns values", async () => {
  const form = render(<ContactForm />)
  const firstNameInput = form.getByTestId("firstName")
  const lastNameInput = form.getByTestId("lastName")
  const emailInput = form.getByTestId("emailInput")

  userEvent.type(firstNameInput, "John")
  userEvent.type(lastNameInput, "Doe")
  userEvent.type(emailInput, "JohnDoe@JohnDoe.com")
  fireEvent.click(form.getByTestId("submit"))

  expect(await form.findByTestId("result")).toBeInTheDocument()
})

// test("first names longer of at least 15 characters are allowed", async () => {
//   const form = render(<ContactForm />)
//   const input = form.getByPlaceholderText(/edd/i)
//   const otherInput = form.getByPlaceholderText(/burke/i)
//   // const firstNameError = form.queryByTestId('firstNameError')

//   userEvent.type(input, "121231231")
//   fireEvent.click(otherInput)

//   // console.log(firstNameError.queryByTextMatch(/like/i))
//   // console.log(form.findByTestId('firstNameError'))
//   // console.log(form.getByText(/like/i))
//   // console.log(await findByText(/like/i))
//   const error = await screen.findByText(/like/i)
//   // expect(screen.findByText(/looks like there was an error/i)).toBeInTheDocument()
//   expect(error).not.toBeInTheDocument()
//   // expect(screen.findByTestId('firstNameError')).not.toBeTruthy()
// })