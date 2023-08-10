import React, { useState } from "react";
import "./style.css";
import Seat from './Seat'

const SeatMap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}-${seatIndex}`;
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter(id => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const rows = [
    { totalSeats: 5, bookedSeats: [1, 3] },
    { totalSeats: 2, bookedSeats: [] },
    { totalSeats: 5, bookedSeats: [] },
  ];

  return (
    <div className="seat-map">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {Array.from({ length: row.totalSeats }, (_, seatIndex) => {
            const status = row.bookedSeats.includes(seatIndex) ? 'booked' : 'available';
            const isSelected = selectedSeats.includes(`${rowIndex}-${seatIndex}`);
            const seatNumber = seatIndex + 1;
            return (
              <Seat
                key={seatIndex}
                number={seatNumber}
                status={status}
                onSelect={() => handleSeatClick(rowIndex, seatIndex)}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;
