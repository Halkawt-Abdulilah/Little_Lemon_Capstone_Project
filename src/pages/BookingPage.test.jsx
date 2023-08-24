import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
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
  test("timesReducer and initialTime test", () => {
          render(
            <BrowserRouter>
              <BookingPage />
            </BrowserRouter>
          );

    expect(screen.queryByText("Table Booked Successfully!")).toBeNull();
    // Find the "20" value by its text content
    const availableReservations20 = screen.getByText("20");
  
    // Assert that the element is in the document
    expect(availableReservations20).toBeInTheDocument();
  
    const dateInput = screen.getByLabelText(/Choose date/);
    //change it to current date for the availableReservations20 to work, else comment out
    fireEvent.change(dateInput, {target: {"value": "2023-08-24"}});
  
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  
    const availableReservations19 = screen.getByText("19");
    expect(availableReservations19).toBeInTheDocument();
  
    expect(screen.getByText("Table Booked Successfully!")).toBeInTheDocument();
   })
})
