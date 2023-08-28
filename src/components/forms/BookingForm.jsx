import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
  Center,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { act } from "@testing-library/react";


  const customStyles = {
    backgroundColor: '#f4ce14',
    color: '#000000',
  };

export default function BookingForm(props) {

  const [date, setDate] = useState(props.currentDate);
  const [time, setTime] = props.timeState;
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const validTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const validOccasions = ['Birthday', 'Anniversary'];

  let validationSchema = Yup.object({
    date: Yup.date()
      .required('required')
      .min(props.today, 'Date must be later than today'),
    time: Yup.string()
      .required()
      .oneOf(validTimes, 'Valid time is required'),
    guests: Yup.number()
      .required('required')
      .min(1, 'Number of guests should be at least more than 1')
      .max(10, 'Number of guests cannot be more than 10'),
    occasion: Yup.string()
      .required('required')
      .oneOf(validOccasions, 'Valid occasion is required')
  })

  // eslint-disable-next-line no-undef
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, setFieldValue} = useFormik({
    initialValues: {
        date: date,
        time: time,
        guests: guests,
        occasion: occasion,
    },

    validationSchema: validationSchema,

    onSubmit: () => {
      if(props.checkAvailability(date, time)) {
        act(()=>{
          props.reduceReservation(date, time);
          props.setIsSuccess(true);
  
          setTimeout(() => {
            props.setIsSuccess(false)
          }, 3000);
        })
      } else {
        alert("No more Booking Slots available");
      }
    },
  });

  useEffect(() => {
    setDate(values.date);
    setTime(values.time);
    setGuests(values.guests);
    setOccasion(values.occasion);
    // console.log("today: " + props.today + " f.date: " + values.date + " date: " + date);
  }, [values])


  return (
      <Box maxW="400px" m="0 auto" p="20px">
        <form onSubmit={handleSubmit} aria-label="Booking form">
          <FormControl isInvalid={errors.date && touched.date}>
            <FormLabel htmlFor="date">Choose date</FormLabel>
            <Input
              type="date"
              id="date"
              name="date"
              value={values.date}
              onBlur={handleBlur}
              onChange={
                (e) => {
                  setFieldValue('date', e.target.value);
                  props.changeDate(e.target.value);
                }
              }
              className={errors.date && touched.date ? "input-error" : ""}
              required="required"
            />
          <FormErrorMessage>{errors.date}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={errors.time && touched.time}>
            <FormLabel htmlFor="time">Choose time</FormLabel>
            <Select
              id="time"
              name="time"
              value={values.time}
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.time && touched.time ? "input-error" : ""}
              required="required"
            >
              <option>10:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </Select>
          <FormErrorMessage>{errors.time}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={errors.guests && touched.guests}>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              aria-valuemin={"1"}
              aria-valuemax={"10"}
              value={values.guests}
              onBlur={handleBlur}
              onChange={(e) => setFieldValue('guests', e.target.value)}
              className={errors.guests && touched.guests ? "input-error" : ""}
              required="required"
            />
          <FormErrorMessage>{errors.guests}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={errors.occasion && touched.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              id="occasion"
              name="occasion"
              value={values.occasion}
              onBlur={handleBlur}
              onChange={(e) => setFieldValue('occasion', e.target.value)}
              required="required"
              className={errors.occasion && touched.occasion ? "input-error" : ""}
            >
              <option>Work</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Select>
          <FormErrorMessage>{errors.occasion}</FormErrorMessage>
          </FormControl>
            <Center>
                <Button aria-label="On Click" mt={4} style={ customStyles } type="submit">
                    Make Your Reservation
                </Button>
            </Center>
        </form>
      </Box>
  );
}
