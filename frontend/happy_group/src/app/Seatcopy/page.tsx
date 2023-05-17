"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './Seat.module.css';
import movieAPI from '@/app/api/movieAPI'

export default function Seat() {
	const [seats, setSeats] = useState<any[]>([]);
  
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
	

    return (
		<>
		
		

        <div className={styles.body}>
            <div className = {styles.movie_container}>
		
			<ul className = {styles.showcase}>
			<li>
				<div className = {styles.seat}  ></div>
				<small>Trống</small>
			</li>
			
			<li>
				<div className={`${ styles.seat} ${styles.selected}`}></div>
				<small>Đang chọn</small>
			</li>
			<li>
			<div className={`${ styles.seat} ${styles.occupied}`}></div>
				<small>Đã chọn</small>
			</li>    
			</ul>
		
		<div className = {styles.container}>
		  <div className = {styles.screen}>SCREEN</div>
		  
		{Object.keys(seatsByRow).map((row) => (
			<div key={row}>
				<div className = {styles.row}>
					{seatsByRow[row].map((seat) => (
						<div key={seat._id}>
							{seat.type === 1 ?<div className = {styles.seat}></div> : null}


							{seat.type === 2 ? <div className={`${ styles.doubleSeat} ${styles.occupied}`}></div> : null}
							{seat.isAvailable ? null : <div className={`${ styles.seat} ${styles.occupied}`}></div>}
						</div>
					))}
				</div>
			</div>
      	))}
		  
		  
		  <p className = {styles.text}>
			Giá tiền khi bạn đặt <span id="count">0</span> ghế là <span id="total">0</span> ngàn đồng.
		  </p>

		  <p>Địa chỉ các ghế: <span id="address"></span></p>

		</div>
	  </div>
        </div>
        </>
    )
}
