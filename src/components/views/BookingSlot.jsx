import { TableContainer, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function BookingSlot(props) {
  const { bookedData, activeDay } = props;

  // Filter the data for the active day
  const activeDayData = bookedData.bookingDates[activeDay];

  return (
    <TableContainer m={10}>
      <Table variant='simple' size='sm'>
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Available Reservations</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(activeDayData).map((time) => (
            <Tr key={time}>
              <Td>{time}</Td>
              <Td>{activeDayData[time]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
