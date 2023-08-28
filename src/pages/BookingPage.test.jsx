import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";
import BookingPage from "./BookingPage";


describe("Test Cases for Booking Functionality", () => {

  test("Form being rendered in the BookingForm Component", () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const dateInput = screen.getByLabelText(/Choose date/);
    const timeInput = screen.getByLabelText(/Choose time/);
    const guestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionInput).toBeInTheDocument();
  });
  test("timesReducer and initialTime test", async () => {
          render(
            <BrowserRouter>
              <BookingPage />
            </BrowserRouter>
          );

    const dateInput = screen.getByLabelText(/Choose date/);
    //change it to current date or later
    fireEvent.change(dateInput, {target: {"value": "2023-08-28"}});

    const submitButton = screen.getByText("Make Your Reservation");
    fireEvent.click(submitButton);

    let success = await screen.findByText("Table Booked Successfully!");

    expect(success).toBeInTheDocument()

   });

test("Invalid date input test", async () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

const dateInput = screen.getByLabelText(/Choose date/);

fireEvent.change(dateInput, {target: {"value": "2023-08-25"}});

const submitButton = screen.getByText("Make Your Reservation");
fireEvent.click(submitButton);

let dateValidation = await screen.findByText("Date must be later than today");

expect(dateValidation).toBeInTheDocument()

});

test("Invalid time input test", async () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

const timeInput = screen.getByLabelText(/Choose time/);
// note: for the purposes of this test, an invalid option (10:00) was added as to
// mimic the user adding it through inspect, same goes for the Occasion field test
fireEvent.change(timeInput, { target: { value: '10:00' } });

const submitButton = screen.getByText("Make Your Reservation");
fireEvent.click(submitButton);

let timeValidation = await screen.findByText("Valid time is required");

expect(timeValidation).toBeInTheDocument()

});

test("Number of guests less than 1 input test", async () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

const guestInput = screen.getByLabelText(/Number of guests/);

fireEvent.change(guestInput, {target: {"value": "0"}});

const submitButton = screen.getByText("Make Your Reservation");
fireEvent.click(submitButton);

let guestValidation = await screen.findByText("Number of guests should be at least more than 1");

expect(guestValidation).toBeInTheDocument()

});
test("Number of guests more than 10 input test", async () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

const guestInput = screen.getByLabelText(/Number of guests/);

fireEvent.change(guestInput, {target: {"value": "11"}});

const submitButton = screen.getByText("Make Your Reservation");
fireEvent.click(submitButton);

let guestValidation = await screen.findByText("Number of guests cannot be more than 10");

expect(guestValidation).toBeInTheDocument()

});

test("Invalid occasion input test", async () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

const occasionTest = screen.getByLabelText(/Occasion/);
fireEvent.change(occasionTest, { target: { value: 'Work' } });

const submitButton = screen.getByText("Make Your Reservation");
fireEvent.click(submitButton);

let occasionValidation = await screen.findByText("Valid occasion is required");

expect(occasionValidation).toBeInTheDocument()

});

  it('should have the correct attributes for date input field', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

      const dateInput = screen.getByLabelText('Choose date'); // Find the date input field by label text

      expect(dateInput).toHaveAttribute('type', 'date'); // Check the type attribute
      expect(dateInput).toHaveAttribute('id', 'date'); // Check the id attribute
    });

    it('should have the correct attributes for time select field', () => {
      render(
        <BrowserRouter>
          <BookingPage />
        </BrowserRouter>
      );

      const timeSelect = screen.getByLabelText('Choose time'); // Find the time select field by label text

      expect(timeSelect).toHaveAttribute('id', 'time'); // Check the id attribute
      // Add more attribute checks as needed
    });
})
