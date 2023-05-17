"use client"
import { useEffect, useState } from 'react';
import styles from './Seat.module.css';
import movieAPI from '@/app/api/movieAPI';

export default function Seat() {
  const [seats, setSeats] = useState<any[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await movieAPI.getIDSeat();
        const seatArr = response.data;
        console.log("res: ", seatArr);
        setSeats(seatArr);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };

    fetchSeats();
  }, []);

  const seatsByRow: { [row: string]: any[] } = {};

  seats.forEach((seat) => {
    const { row } = seat;
    if (!seatsByRow[row]) {
      seatsByRow[row] = [];
    }
    seatsByRow[row].push(seat);
  });

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        // Nếu seat đã được chọn, xóa khỏi danh sách selectedSeats
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        // Nếu seat chưa được chọn, thêm vào danh sách selectedSeats
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const handleNextClick = () => {
    selectedSeats.forEach((selectedSeat) => {
      const seatIndex = seats.findIndex((seat) => seat._id === selectedSeat);
      if (seatIndex >= 0) {
        seats[seatIndex].isAvailable = false;
      }
    });
    setSelectedSeats([]);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.movie_container}>
          <div className={styles.container}>
            {Object.keys(seatsByRow).map((row) => (
              <div key={row}>
                <div className={styles.row}>
                  {seatsByRow[row].map((seat, index) => (
                    <div
                      key={seat._id}
                      className={`${
                        seat.type === 1
                          ? `${styles.seat} ${
                              index === 1 ? styles['margin-right'] : ''
                            } ${
                              index === seatsByRow[row].length - 2
                                ? styles['margin-left']
                                : ''
                            }`
                          : ''
                      } ${
                        seat.type === 2
                          ? `${styles.doubleSeat} ${
                              index === 0 ? styles['margin-right'] : ''
                            } ${
                              index === seatsByRow[row].length - 1
                                ? styles['margin-left']
                                : ''
                            }`
                          : ''
                      } ${seat.isAvailable ? '' : styles.occupied} ${
                        selectedSeats.includes(seat._id) ? styles.selected : ''
                      }`}
                      onClick={() => handleSeatClick(seat._id)}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
            <p className={styles.text}>
              Số lượng ghế đơn là{' '}
              <span id="count">
                {seats.filter((seat) => seat.type === 1 && selectedSeats.includes(seat._id)).length}
              </span>
            </p>

            <p className={styles.text}>
              Số lượng ghế đôi là{' '}
              <span id="countdouble">
                {seats.filter((seat) => seat.type === 2 && selectedSeats.includes(seat._id)).length}
              </span>
            </p>
            <p className={styles.text}>
              Vị trí ghế là{' '}
              <span id="address">
                {selectedSeats.map((seatId) => {
                  const seat = seats.find((seat) => seat._id === seatId);
                  if (seat) {
                    const seatNumber = parseInt(seat.seatnumber);
                    return `${seat.row}${seat.seatNumber}`;
                  }
                  return '';
                }).join(', ')}
              </span>
            </p>
          </div>

          <button className={styles.bt} onClick={handleNextClick}>
            Tiếp theo
          </button>
        </div>
      </div>
    </>
  );
}
