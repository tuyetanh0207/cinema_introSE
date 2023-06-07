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

      function valid1() {
        var Select1 = document.getElementsByName("movie")[0] as HTMLInputElement;
        var Opt2 = document.getElementById("Opt2") as HTMLInputElement;
            if (Select1.value != "") {
            Opt2.disabled = false;
            console.log(Select1)
        }
    }

    function valid2() {
        var Select2 = document.getElementsByName("cinema")[0] as HTMLInputElement;
        var Opt3 = document.getElementById("Opt3") as HTMLInputElement;
            if (Select2.value != "") {
            Opt3.disabled = false;
        }
    }

    function valid3() {
        var Select3 = document.getElementsByName("date")[0] as HTMLInputElement;
        var Opt4 = document.getElementById("Opt4") as HTMLInputElement;
            if (Select3.value != "") {
            Opt4.disabled = false;
        }
    }


    


    const [slides, setslides] = useState<any[]>([]); ///
    const slide = async () => {
      const SlideData = await BannerAPI.getAllSlides();
      console.log("res: ", SlideData);
      setslides(SlideData.data);
      }

    const [movies, pickMovies] = useState<any[]>([]); ///
    const movie = async () => {
    const MovieData = await movieAPI.getNowShowingMovies();
        console.log("res: ", MovieData);
        pickMovies(MovieData.data);
        }

        const [qtickets, quickTickets] = useState<any[]>([]); ///
    const qTikcet = async (query: string) => {
    const TicketData = await movieAPI.quickBuyTicket(query);
        console.log("res: ", TicketData);
        pickMovies(TicketData.data);
        }


      useEffect(()=>{
        slide();
        movie();
        // qtickets();
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
                <form action="./booking">
                    <select name="movie" onChange={valid1}>
                        <option value="" hidden>Chọn phim</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.showtimeId}>{movie.movieTitle}</option>))}  

                    </select>   

                     <select name="theatre" id="Opt2" onChange={valid2} disabled>
                        <option value="" hidden>Chọn rạp</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.language}>{movie.language}</option>))}
                    </select>
                     <select name="date" id="Opt3" onChange={valid3} disabled>
                        <option value="" hidden>Chọn ngày</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.title}>{movie.title}</option>))}
                    </select>
                    <select name="time" id="Opt4" disabled>
                        <option value="" hidden>Chọn suất</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.title}>{movie.title}</option>))}
                    </select> 
                    <button type="submit" className={styles.buy_btn}>Mua vé</button>
                </form>

            </div>
        {/* Form end */}
        </div>
    )
}