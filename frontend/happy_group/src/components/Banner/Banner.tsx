"use client"
import styles from './Banner.module.css'
import {pic1,pic2,pic3,pic4} from '@/assets/imgs'
import { right_arrow,left_arrow } from '@/assets/svgs'
import Image from 'next/image'
import { HtmlHTMLAttributes, useEffect, useState } from 'react';//
import BannerAPI from '@/app/api/BannerAPI';
import { getUsersData } from '@/app/state/actions/userActions';//
import { useSelector, useDispatch } from 'react-redux'//
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import movieAPI from '@/app/api/movieAPI'



export default function Banner () {

    let indexValue = 1;  

    showImg(indexValue); 

    // setInterval(() => {
    //     side_slide(+1);
    //   }, 5000);

    function btn_dot(e: number){
      showImg(indexValue = e);
    }
  
    function side_slide(e: number){
      showImg(indexValue += e);
    }
  
    function showImg(e: number){
        let i;      
         const img = document.querySelectorAll<HTMLImageElement>('#pic img');
        const sliders = document.querySelectorAll<HTMLSpanElement>('#dot span');
        if (e > img.length){indexValue=1}
        if (e < 1 ){indexValue=img.length}

      
        for(i=0;i<img.length;i++){
                img[i].style.display="none";
                // img[i].style.opacity = "0";

        }
        for(i=0;i<sliders.length;i++){
            sliders[i].style.background="#C0EEF2";

          }

            if (img[indexValue - 1]) {
                img[indexValue - 1].style.display = "block";
                // img[indexValue - 1].style.opacity = '1';
              }

              if (sliders[indexValue - 1]) {
                sliders[indexValue - 1].style.background = "#537fe7";
              }
      }


      const [selectedShowtimeId, setSelectedShowtimeId] = useState("");
      const [selectedDate, setSelectedDate] = useState("");
      const [selectedTheatreId, setSelectedTheatreId] = useState("");
      const [selectedTime, setSelectedTime] = useState("");
      

      const handleMovieChange = (event) => {
        const selectedId = event.target.value;
        setSelectedShowtimeId(selectedId);
        qTikcet(selectedId);
      };


      const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate)
        qTikcet1(selectedShowtimeId, selectedDate);
      };

      const handleTheatreChange = (event) => {
        const selectedTheatreId = event.target.value;
        setSelectedTheatreId(selectedTheatreId);
        qTikcet2(selectedShowtimeId, selectedDate,selectedTheatreId);
      };

      
      const handleTimeChange = (event) => {
        const selectedTime = event.target.value;
        setSelectedTime(selectedTime);
      };

      


    


    const [slides, setslides] = useState<any[]>([]); ///
    const slide = async () => {
      const SlideData = await BannerAPI.getAllSlides();
      // console.log("res: ", SlideData);
      setslides(SlideData.data);
      }

    const [movies, pickMovies] = useState<any[]>([]); ///
    const movie = async () => {
    const MovieData = await movieAPI.getNowShowing();
        // console.log("res: ", MovieData);
        pickMovies(MovieData.data);
        }

    const [qtickets, quickTickets] = useState<any[]>([]); ///
    const qTikcet = async (id: string) => {
      const TicketData = await movieAPI.getDateOfShowtime(id);
      // console.log("res: ", TicketData);
      quickTickets(TicketData.data.dates);
    }



    const [qtickets1, quickTickets1] = useState<any[]>([]);
    const qTikcet1 = async (id: string, date: string) => {
      const TicketData1 = await movieAPI.getTheatreOfShowtime(id, date);
      // console.log("res: ", TicketData1);

  const ticketIds = TicketData1.data.theatres;
  const ticketNames = TicketData1.data.theatreIds;

  const combinedData = ticketIds.map((name: any, index: number) => {
    return {
      name,
      id: ticketNames[index]
    };
  });

  // console.log("combinedData: ", combinedData);

  quickTickets1(combinedData);
}

function isButtonDisabled() {
  const movieId = document.getElementsByName('movieId')[0]?.value;
  const date = document.getElementsByName('date')[0]?.value;
  const theatreId = document.getElementsByName('theatreId')[0]?.value;
  const time = document.getElementsByName('time')[0]?.value;

  console.log(movieId);
  console.log(date);
  console.log(theatreId);
  console.log(time);

  // Kiểm tra nếu một trong các select không được chọn
  if (!movieId || !date || !theatreId || !time) {
    return true; // Vô hiệu hóa nút "Mua vé"
  }

  return false; // Kích hoạt nút "Mua vé"
}



    const [qtickets2, quickTickets2] = useState<any[]>([]); ///
    const qTikcet2 = async (id: string,date: string,theatre: string) => {
      const TicketData2 = await movieAPI.getTimeOfShowtime(id,date,theatre);
      // console.log("res: ", TicketData2);
      quickTickets2(TicketData2.data.times[0]);
    }


      useEffect(()=>{
        slide();
        movie();
        // qTikcet("showtimeId");
    },[])



    return (
        <div className={styles.Banner}>
        {/* slides begin */}
            <div className={styles.slides} id={'pic'}>
            {/* <!--image begin */}
                {slides.map((slide, index) => (<div className={styles.slide} key={index}><img src={slide.imageUrl} alt={''} /></div>))}

            </div>
        {/* slides end*/}
            <div onClick={() => side_slide(1)} className={styles.change_btn} id={styles.left}>
                <Image className={styles.left_btn} src={left_arrow} alt='' />
            </div>

            <div onClick={() => side_slide(-1)} className={styles.change_btn} id={styles.right}>
                <Image className={styles.right_btn} src={right_arrow} alt='' />
            </div>


            <div className={styles.btn_dots} id={'dot'}>
                {slides.map((slide, index) => (<span key={index} onClick={() => btn_dot(index + 1)}></span>))}
            </div>




        {/* Form begin */}
            <div className={styles.opt}>
                <label>MUA VÉ NHANH</label>
                <form action="./buy_ticket">
                    <select name="movieId" onChange={handleMovieChange}>
                        <option value="" hidden>Chọn phim</option> 
                        {movies.map((mvName, index) => (<option key={index} value={mvName.showtimeId}>{mvName.movieTitle}</option>))} 
                    </select>   
                    
                     <select name="date" onChange={handleDateChange} >
                        <option value="" hidden>Chọn ngày</option> 
                        {qtickets.map((dates, index) => (<option key={index} value={dates}>{dates}</option>))}
                    </select>
        
                    <select name="theatreId" onChange={handleTheatreChange} > 
                        <option value="" hidden>Chọn rạp</option> 
                        {qtickets1.map((theatres, index) => (<option key={index} value={theatres.id}>{theatres.name}</option>))}
                    </select> 

                    <select name="time"  onChange={handleTimeChange}> 
                        <option value="" hidden>Chọn suất chiếu</option> 
                        {qtickets2.map((times, index) => (<option key={index} value={times}>{times}</option>))}
                    </select> 
                    {/* <button type="submit" className={styles.buy_btn}>Mua vé</button> */}
                    <button type="submit" className={styles.buy_btn} disabled={isButtonDisabled()}>Mua vé</button>
                </form>

            </div>
        {/* Form end */}
        </div>
    )
}