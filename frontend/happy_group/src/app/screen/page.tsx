"use client"
import React, { useEffect, useState } from 'react';
import styles from './seat.module.css';
import movieAPI from '@/app/api/movieAPI';
import screenAPI from '../api/screenAPI';
import {food1,food2,food3,food4,picS1} from '@/assets/imgs'
import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import showtimeAPI from '../api/showtimeAPI';
import { showtimeInterface } from '../api/apiResponse';
import { toASCII } from 'punycode';
import { Sree_Krushnadevaraya } from 'next/font/google';
import PopupResult from '@/components/popup_result/popup_result';

export default function Seat () {
  const user = useSelector((state: any)=> state.auth.login.currentUser)
  const userId= user.user._id
  const [seats, setSeats] = useState<any[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const [selectedDoubleSeats, setSelectedDoubleSeats] = useState<any[]>([]);
  const [isChoosingSeat, setIsChoosingSeat] =useState(1)
  const [time,setTime] = useState("14:00")
  const [scheduleId, setScheduleID]= useState("6480b4c5d6b19729a6efd158")
  const [seatArr, setSeatArr]= useState<any[]>([])
  const price =[50000,90000]
  const movieImg = picS1;
  const movieName = "chuaw cos"
  const theatreName = "chua co"
  const [bookedseats, setBookedSeats] = useState<any[]>([])
  const [screenInfo, setScreenInfo] = useState<any>()
  const showtimeId="6480756e0f9d8b1e1ff3818a"
  const [showtime, setShowtime]=useState<showtimeInterface>()
  useEffect(() => {
    const fetchScreen = async () => {
      try {
        const response = await screenAPI.getScreenByInfo(scheduleId, "12:00")
        setScreenInfo(response.data[0])
         setSeatArr(response.data[0].seatArray);
        setSeats(seatArr);
      } catch (error) {
      }
    };
    const fetchShowtime = async ()=>{
      const res = await showtimeAPI.getShowtime(showtimeId);
      setShowtime(res.data)

    }

    fetchScreen();
    fetchShowtime();
  }, []);

  const convert2Alphabet = (seat:any[])=>{
    const alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R"]
    const row = seat[0]
    return [alp[row], (seat[1]+1).toString()]  ;  
  }
 
  const setBookedSeatss = async function (id: string, data: any){
    const res = await screenAPI.setBookedSeat(screenInfo._id,data, user.token)
    const dt =res.data
    let seats:string[]
    seats=bookedseats
    for (let i=0;i<dt.bookedList.length;i++){
      seats.push(dt.bookedList[i]._id.toString() );
    }
    setBookedSeats(seats)
    return seats;
    //  res.data.bookedList.map((seat:any, index:number)=>{return seat._id})
  }
  const handleSeatClick = (arr:any[]) => {
    if (arr[0]!== seatArr.length-1){
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.some(ar => ar.toString() ===arr.toString())) {
          // Nếu seat đã được chọn, xóa khỏi danh sách selectedSeats
          setTotalPrice((selectedSeats.length-1)*price[0] + selectedDoubleSeats.length*price[1])

          return prevSelectedSeats.filter((id) => id.toString()!==arr.toString());
        } else {
          // Nếu seat chưa được chọn, thêm vào danh sách selectedSeats
          setTotalPrice((selectedSeats.length+1)*price[0] + selectedDoubleSeats.length*price[1])

            return [...prevSelectedSeats, arr];
        
        }
      });
    }
    else {
      setSelectedDoubleSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.some(ar => ar.toString() ===arr.toString())) {
          // Nếu seat đã được chọn, xóa khỏi danh sách selectedSeats
          setTotalPrice((selectedSeats.length)*price[0] + (selectedDoubleSeats.length-1)*price[1])

          return prevSelectedSeats.filter((id) => id.toString()!==arr.toString());
        } else {
          // Nếu seat chưa được chọn, thêm vào danh sách selectedSeats
          setTotalPrice((selectedSeats.length)*price[0] + (selectedDoubleSeats.length+1)*price[1])

          return [...prevSelectedSeats, arr];
        }
      });
    }
    setTotalPrice(selectedSeats.length*price[0] + selectedDoubleSeats.length*price[1])
   
  };
  const handlecreatebtn = async()=>{
    const res = await screenAPI.createScreen(screenInfo.scheduleId, "12:00")
    setScreenInfo(res.data)
  }
  const [noti, setNoti]= useState("")
  const [modelOpen, setModalOpen]=useState(false)
  const [totalPrice, setTotalPrice]=useState(selectedSeats.length*price[0] + selectedDoubleSeats.length*price[1])
  const handleBookingBtn = async() => {
    setBookedSeats([])
      const res  = setBookedSeatss(screenInfo._id, selectedSeats)
      setTotalPrice(selectedSeats.length*price[0] + selectedDoubleSeats.length*price[1])
      const newReservation ={
        userId: userId,
        showtimeId: showtimeId,
        seats: bookedseats,
        totalPrice: totalPrice
      }

    const res1 = screenAPI.createReservation(userId, newReservation, user.token)
    const res2 = screenAPI.bookReservation((await res1).data._id, user.token)
    setNoti((await res2).data.message)
      setModalOpen(true)
    setSelectedDoubleSeats([])
    setSelectedSeats([])
    setTotalPrice(0)
  }
  return (
    <div className=''>
    {
      isChoosingSeat?(
        <div className={styles.body}>
        <div className={styles.movie_container}>
          <div className={styles.container}>
            {seatArr.map((row, indexrow) => (
              <div key={row}>
                <div className={styles.row}>
                  {row.map((seat:any, index:number) => (
                    <div
                      key={seat}
                      className={`${
                        indexrow !== seatArr.length-1
                          ? `${styles.seat} ${
                              index === 1 ? styles['margin-right'] : ''
                            } ${
                              index === row.length - 2
                                ? styles['margin-left']
                                : ''
                            }`
                          : ''
                      } ${
                        indexrow === seatArr.length-1
                          ? `${styles.doubleSeat} ${
                              index === 0 ? styles['margin-right'] : ''
                            } ${
                              index === row.length - 1
                                ? styles['margin-left']
                                : ''
                            }`
                          : ''
                      } ${seat===0 ? '' : styles.occupied} ${
                        selectedSeats.some(arr => arr.toString()===([indexrow,index]).toString()) ||selectedDoubleSeats.some(arr => arr.toString()===([indexrow,index]).toString())  ? styles.selected : ''
                      }`}
                      onClick={() => handleSeatClick([indexrow, index])}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
            <p className={styles.text}>
              Số lượng ghế đơn là{' '}
              <span id="count">
                {selectedSeats.length}
              </span>
            </p>

            <p className={styles.text}>
              Số lượng ghế đôi là{' '}
              <span id="countdouble">
                {selectedDoubleSeats.length}
              </span>
            </p>
            <p className={styles.text}>
              Vị trí ghế là{' '}
              <span id="address">
                {selectedSeats.map((seatId) => {
                  const seat = seatArr.find((seat) => seat[0] === seatId[0] && seat[1] ===seatId[1]);
                    
                    return `${convert2Alphabet(seatId)[0]}${convert2Alphabet(seatId)[1]}`;

                }).join(', ')}, 
                 {selectedDoubleSeats.map((seatId) => {
                  const seat = seatArr.find((seat) => seat[0] === seatId[0] && seat[1] ===seatId[1]);
                    
                    return `${convert2Alphabet(seatId)[0]}${convert2Alphabet(seatId)[1]}`;

                }).join(', ')}
              </span>
            </p>
          </div>

          <button className={styles.ripple} onClick={()=>{setIsChoosingSeat(0);}}>
            Tiếp theo
          </button>
        </div>
      </div>
      ):(
        <>
         <div className={styles.lay1}>
            <div className={styles.lay2}> 
                <div className={styles.content}>
                    <h5 className={styles.content1}>Loại vé</h5>
                    <h5 className={styles.content2}>Số lượng</h5>
                    <h5 className={styles.content2}>Giá (VNĐ)</h5>  
                    <h5 className={styles.content2}>Tổng (VNĐ)</h5>
                </div>
                <div className={styles.ticketBox}>
                <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>2D</small></sup></h5>
                        <div  className={styles.inputNum}   >{selectedSeats.length}</div>
                        <div className={styles.price}  >{price[0]}</div>
                        <div  className={styles.outputNum}    > {selectedSeats.length*price[0]}</div>
                    </div>
                    <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>3D</small></sup></h5>
                        <div className={styles.inputNum}    >0</div>
                        <div className={styles.price}   >{price[1]}</div>
                        <div   className={styles.outputNum}    >0</div>
                    </div>
                    <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>2D-bao gồm 2 vé</small></sup></h5>
                        <div className={styles.inputNum}   >{selectedDoubleSeats.length}</div>
                        <div className={styles.price}  >{price[1]}</div>
                        <div   className={styles.outputNum}    >{selectedDoubleSeats.length*price[1]}</div>
                    </div>


                </div>

                <div className={styles.content}>
                    <h5 className={styles.content1}>Bắp/Nước</h5>
                    <h5 className={styles.content2}>Số lượng</h5>
                    <h5 className={styles.content2}>Giá (VNĐ)</h5>
                    <h5 className={styles.content2}>Tổng (VNĐ)</h5>
                </div>
                <div className={styles.food}>
                    <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food3} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}   defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={50000} />
                          <div    className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food1} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack </small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}    defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={90000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food4} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div className={styles.divNum}     defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={90000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food2} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}     defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={100000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                </div>


            </div>
            <div className={styles.mvDetails}>
                <Image src={showtime?.movie?.image} alt='dd' width={100} height={250}></Image>
                <h5>Tên: {showtime?.movie?.title}</h5>
                <h5>Rạp : {theatreName}</h5>
                <h5>Suất chiếu : {time} | {}</h5>    
                <div className={styles.cost}>
                  <h5>Tổng: {totalPrice} </h5>
                  <div      defaultValue={0} />
          
                </div>
                {/* <button className={styles.ripple} onClick={()=> setIsChoosingSeat(1)}>QUAY LẠI</button>
                <button onClick={()=> handleBookingBtn()}>THANH TOÁN</button>
               */}
            </div>
            <div className={styles.mvDetails1}>
            <div className={styles.input}> 
                <input type="text" id='username'  placeholder='Ngân hàng' className={styles.username} />
                <input type="text" id ='password'  placeholder='Số tài khoản' className={styles.username} />
            </div>
               
                <button className={styles.ripple} onClick={()=> setIsChoosingSeat(1)}>QUAY LẠI</button>
                  {/* <button onClick={()=> handlecreatebtn()}>taoj cr</button> */}
                <button onClick={()=> handleBookingBtn()}>THANH TOÁN</button>
              
            </div>
        </div> 
        </>
      )
      
    }
   
      <PopupResult message={noti} button={["Về trang chủ", "Xem lại vé"]} urls={["/", "/"]}
      modalOpen={modelOpen} setModalOpen={setModalOpen}  />
 
       
     

      
    </div>
  );
}
