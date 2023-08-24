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


export default function BookingPage() {

  const currentDate = getCurrentDate(new Date());


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
        if(state.bookingDates[selectedDate] === undefined) {
            state.bookingDates[selectedDate] = {
                "17:00": 25,
                "18:00": 25,
                "19:00": 25,
                "20:00": 25,
                "21:00": 25,
                "22:00": 25
            }
            setActiveDay(selectedDate);
        }
        else
            setActiveDay(selectedDate);
      };

    const [state, dispatch] = useReducer(timesReducer, initialTime);

    let [activeDay, setActiveDay] = useState(currentDate);

    const reduceReservation = (date, time) => {
        dispatch({ type: 'REDUCE_AVAILABLE_RESERVATION', date, time });
      };


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
                <BookingForm
                    timeState={[availableTime, setAvailableTime]}
                    currentDate={currentDate}
                    changeDate={changeDate}
                    reduceReservation={reduceReservation}
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