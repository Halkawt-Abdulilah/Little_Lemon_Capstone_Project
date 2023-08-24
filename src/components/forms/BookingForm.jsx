import React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Center,
} from "@chakra-ui/react";


  const customStyles = {
    backgroundColor: '#f4ce14',
    color: '#000000',
  };

export default function BookingForm(props) {

  const [date, setDate] = useState(props.currentDate);
  const [time, setTime] = props.timeState;
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.reduceReservation(date, time);
    props.setIsSuccess(true);

    setTimeout(() => {
      props.setIsSuccess(false)
    }, 3000);
  };

  // console.log(props.bookedData);

  return (
      <Box maxW="400px" m="0 auto" p="20px">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="res-date">Choose date</FormLabel>
            <Input
              type="date"
              id="res-date"
              value={date}
              onChange={
                (e) => {
                  setDate(e.target.value);
                  props.changeDate(e.target.value);
                  // console.log(props.bookedData)
                }
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="res-time">Choose time</FormLabel>
            <Select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </Select>
          </FormControl>
            <Center>
                <Button mt={4} style={ customStyles } type="submit">
                    Make Your Reservation
                </Button>
            </Center>
        </form>
      </Box>
  );
}
