import React from 'react';

const Seat = ({ number, status, onSelect, isSelected }) => {
  let seatBackgroundColor = 'white';
  
  if (status === 'booked') {
    seatBackgroundColor = 'lightgrey';
  } else if (status === 'available') {
    seatBackgroundColor = isSelected ? 'green' : 'white';
  }
  
  return (
     <div
  className={`seat ${status} ${isSelected ? 'selected' : ''}`}
  style={{ backgroundColor: seatBackgroundColor }}
  onClick={onSelect}
>
  <span className="seat-number">{number}</span>
</div>
  );
};

export default Seat;


