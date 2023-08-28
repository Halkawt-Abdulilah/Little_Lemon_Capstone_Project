import { React, useState, useReducer } from "react";
import BookingForm from "../components/forms/BookingForm"
import BookingSlot from "../components/views/BookingSlot";
import {
    Box,
    ChakraProvider,
    Flex,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from "@chakra-ui/react";
import { act } from "@testing-library/react";

const timesReducer = (state, action) => {
    switch (action.type) {
      case 'REDUCE_AVAILABLE_RESERVATION':
        return {
          ...state,
          bookingDates: {
            ...state.bookingDates,
            [action.date]: {
              ...state.bookingDates[action.date],
              [action.time]: state.bookingDates[action.date][action.time] - 1,
            },
          },
        };
      default:
        return state;
    }
  };

const getCurrentDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

//to stimulate "real" data from API
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function BookingPage() {

  const currentDate = getCurrentDate(new Date());


  //today's date (as the initial for the form)
  const initialTime = {
    bookingDates: {
    [currentDate]: {
      "17:00": 20,
      "18:00": 25,
      "19:00": 25,
      "20:00": 25,
      "21:00": 25,
      "22:00": 25,
    },
    },
  };

  const changeDate = (selectedDate) => {
    // if there is no such date in the initialTime JSON Object, create a new entry with randomized available Bookings
    if(state.bookingDates[selectedDate] === undefined) {
        state.bookingDates[selectedDate] = {
            "17:00": getRandomInt(0,25),
            "18:00": getRandomInt(0,25),
            "19:00": getRandomInt(0,25),
            "20:00": getRandomInt(0,25),
            "21:00": getRandomInt(0,25),
            "22:00": getRandomInt(0,25)
        }
        setActiveDay(selectedDate);
    }
    else
        setActiveDay(selectedDate);
  };

  let [activeDay, setActiveDay] = useState(currentDate);

  const [state, dispatch] = useReducer(timesReducer, initialTime);

  const reduceReservation = (date, time) => {
    act(()=>{
      dispatch({ type: 'REDUCE_AVAILABLE_RESERVATION', date, time });
    })
    };

  const checkAvailability = (date, time) => {
    return state["bookingDates"][date][time] > 0;
  }


    const [availableTime, setAvailableTime] = useState("17:00");
    const [isSuccess, setIsSuccess] = useState(false);


    return (
        <ChakraProvider>
            {isSuccess && (
            <Alert status="success">
            <AlertIcon />
            <AlertTitle mr={2}>Success</AlertTitle>
            <AlertDescription>
                Table Booked Successfully!
            </AlertDescription>
            </Alert>
            )}
        <Flex justifyContent="center" alignItems="center">
            <Box w="100%">
        <h1 className="title ct">Book a Table</h1>
                <BookingForm
                    timeState={[availableTime, setAvailableTime]}
                    currentDate={currentDate}
                    today={getCurrentDate(new Date())}
                    changeDate={changeDate}
                    reduceReservation={reduceReservation}
                    checkAvailability = {checkAvailability}
                    setActiveDay={setActiveDay}
                    bookedData={state}
                    setIsSuccess={setIsSuccess}
                />
            </Box>
            <Box w="40%">
                <BookingSlot
                    bookedData={state}
                    activeDay={activeDay}
                />
            </Box>
        </Flex>
        </ChakraProvider>
    )
}