import { useEffect, useRef, useState } from 'react';
import styles from './Seat.module.css';
import movieAPI from '@/app/api/movieAPI'

export default function Seat() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const seatsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
//   const doubleSeatsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
// //   const countRef = useRef<HTMLSpanElement>(null);
// //   const totalRef = useRef<HTMLSpanElement>(null);
// //   const addressRef = useRef<HTMLSpanElement>(null);
    
    
//     const countRef = useRef<HTMLSpanElement | null>(null);
//     const totalRef = useRef<HTMLSpanElement | null>(null);
//     const addressRef = useRef<HTMLSpanElement | null>(null);

//   const [ticketPrice, setTicketPrice] = useState<number>(80);
//   const [doubleSeatPrice, setDoubleSeatPrice] = useState<number>(140);
//   const [selectedSeatsCount, setSelectedSeatsCount] = useState<number>(0);
//   const [selectedSeatAddress, setSelectedSeatAddress] = useState<string>('');


//   const updateSelectedCount = () => {
//     const selectedSeats = Array.from(containerRef.current?.querySelectorAll('.row .seat.selected, .row .doubleSeat.selected') || []);
//     if (selectedSeats.length > 0) {
//       setSelectedSeatsCount(selectedSeats.length);
//       setSelectedSeatAddress(selectedSeats.map((seat) => seat.getAttribute('data-address') || '').join(', '));
  
//       let totalPrice = 0;
//       let hasDoubleSeat = false;
  
//       for (const seat of selectedSeats) {
//         if (seat.classList.contains('doubleSeat')) {
//           hasDoubleSeat = true;
//           totalPrice += doubleSeatPrice;
//         } else {
//           totalPrice += ticketPrice;
//         }
//       }
  
//       if (hasDoubleSeat) {
//         totalRef.current!.innerText = totalPrice.toString();
//       } else {
//         totalRef.current!.innerText = (selectedSeats.length * ticketPrice).toString();
//       }
  
//       countRef.current!.innerText = selectedSeats.length.toString();
//       addressRef.current!.innerText = selectedSeatAddress;
//     }
//   };
  
// //   const updateSelectedCount = () => {
// //     const selectedSeats = containerRef.current?.querySelectorAll('.row .seat.selected, .row .doubleSeat.selected');
// //     if (selectedSeats) {
// //       setSelectedSeatsCount(selectedSeats.length);
// //       setSelectedSeatAddress(Array.from(selectedSeats).map((seat) => seat.getAttribute('data-address') || '').join(', '));

// //       let totalPrice = 0;
// //       let hasDoubleSeat = false;

// //       for (const seat of selectedSeats) {
// //         if (seat.classList.contains('doubleSeat')) {
// //           hasDoubleSeat = true;
// //           totalPrice += doubleSeatPrice;
// //         } else {
// //           totalPrice += ticketPrice;
// //         }
// //       }

// //       if (hasDoubleSeat) {
// //         totalRef.current!.innerText = totalPrice.toString();
// //       } else {
// //         totalRef.current!.innerText = (selectedSeats.length * ticketPrice).toString();
// //       }

// //       countRef.current!.innerText = selectedSeats.length.toString();
// //       addressRef.current!.innerText = selectedSeatAddress;
// //     }
// //   };

//   const handleSeatClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const target = e.target as HTMLDivElement;
//     if (
//       target.classList.contains('seat') ||
//       target.classList.contains('doubleSeat') &&
//       !target.classList.contains('occupied')
//     ) {
//       const selectedSeats = containerRef.current?.querySelectorAll('.row .seat.selected, .row .doubleSeat.selected');
//       if (selectedSeats) {
//         setSelectedSeatsCount(selectedSeats.length);

//         target.classList.toggle('selected');

//         setSelectedSeatAddress(Array.from(selectedSeats).map((seat) => seat.getAttribute('data-address') || '').join(', '));
//       } else {
//         setSelectedSeatAddress('');
//       }

//       updateSelectedCount();
//     }
//   };

//   useEffect(() => {
//     if (containerRef.current) {
//         containerRef.current = document.querySelector('.container');
//       }
//     seatsRef.current = document.querySelectorAll('.row .seat:not(.occupied)');
//     doubleSeatsRef.current = document.querySelectorAll('.row .doubleSeat:not(.occupied)');
//     countRef.current = document.getElementById('count') as HTMLSpanElement;
//     totalRef.current = document.getElementById('total') as HTMLSpanElement;
//     addressRef.current = document.getElementById('address') as HTMLSpanElement;
//   }, []);



    return (
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
		  
		  <div className = {styles.row} >
			  <div className = {styles.seat}   data-address="A1" ></div>
			  <div className = {styles.seat}   data-address="A2" ></div>
			  <div className = {styles.seat}   data-address="A3" ></div>
			  <div className = {styles.seat}   data-address="A4" ></div>
			  <div className = {styles.seat}   data-address="A5" ></div>
			  <div className = {styles.seat}   data-address="A6" ></div>
			  <div className = {styles.seat}   data-address="A7" ></div>
			  <div className = {styles.seat}   data-address="A8" ></div>
			</div>
			<div className = {styles.row} >
			  <div className = {styles.seat}   data-address="B1" ></div>
			  <div className = {styles.seat}   data-address="B2" ></div>
			  <div className = {styles.seat}   data-address="B3" ></div>
              <div className={`${ styles.seat} ${styles.occupied}`}></div>
              <div className={`${ styles.seat} ${styles.occupied}`}></div>
            


			  <div className = {styles.seat}   data-address="B6" ></div>
			  <div className = {styles.seat}   data-address="B7" ></div>
			  <div className = {styles.seat}   data-address="B8" ></div>
			</div>
			<div className = {styles.row} >
			  <div className = {styles.seat}   data-address="C1" ></div>
			  <div className = {styles.seat}   data-address="C2" ></div>
			  <div className = {styles.seat}   data-address="C3" ></div>
			  <div className = {styles.seat}   data-address="C4" ></div>
			  <div className = {styles.seat}   data-address="C5" ></div>
			  <div className = {styles.seat}   data-address="C6" ></div>

              <div className={`${ styles.seat} ${styles.occupied}`}></div>
              <div className={`${ styles.seat} ${styles.occupied}`}></div>
			</div>
			<div className = {styles.row} >
			  <div className = {styles.seat}   data-address="D1" ></div>
			  <div className = {styles.seat}   data-address="D2" ></div>
			  <div className = {styles.seat}   data-address="D3" ></div>
			  <div className = {styles.seat}   data-address="D4" ></div>
			  <div className = {styles.seat}   data-address="D5" ></div>
			  <div className = {styles.seat}   data-address="D6" ></div>
			  <div className = {styles.seat}   data-address="D7" ></div>
			  <div className = {styles.seat}   data-address="D8" ></div>
			</div>
			<div className = {styles.row} >
			  <div className = {styles.seat}   data-address="E1" ></div>
			  <div className = {styles.seat}   data-address="E2" ></div>
			  <div className = {styles.seat}   data-address="E3" ></div>
              <div className={`${ styles.seat} ${styles.occupied}`}></div>
              <div className={`${ styles.seat} ${styles.occupied}`}></div>
			  <div className = {styles.seat}   data-address="E6" ></div>
			  <div className = {styles.seat}   data-address="E7" ></div>
			  <div className = {styles.seat}   data-address="E8" ></div>
			</div>
			<div className = {styles.row} >
			  <div className = {styles.doubleSeat} data-address="F1" ></div>
			  <div className = {styles.doubleSeat} data-address="F2" ></div>

              <div className={`${ styles.doubleSeat} ${styles.occupied}`}></div>

			  <div className = {styles.doubleSeat} data-address="F4" ></div>
			</div>
		  
		  <p className = {styles.text}>
			Giá tiền khi bạn đặt <span id="count">0</span> ghế là <span id="total">0</span> ngàn đồng.
		  </p>

		  <p>Địa chỉ các ghế: <span id="address"></span></p>

		</div>
	  </div>
        </div>
        
    )
}
