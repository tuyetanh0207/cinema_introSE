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

    let counter = 1;
    setInterval(function()
    {
         const temp = document.getElementsByClassName('radio' + counter) as any;
         console.log(temp)
         temp[0].checked = true;
        counter++;
        if(counter > 7)
        {
            counter = 1;
        }      
    },5000);
    


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


        const router = useRouter()

        function handleSubmit(event) {
          event.preventDefault()
          const form = event.target
          const movie = form.elements.movie.value
          const cinema = form.elements.cinema.value
        //   const date = form.elements.date.value
        //   const session = form.elements.session.value
          router.push(`/buy_ticket?movie=${movie}&cinema=${cinema}`)
        }


      useEffect(()=>{
        slide();
        movie();
    },[])



    return (
        <div className={styles.Banner}>

        {/* slides begin */}
            <div className={styles.slides}>

            {/* btn begin*/}
                {slides.map((_, index) => (<input id={styles[`radio${index+1}`]} type={"radio"} name="radio-btn" className={`radio${index+1}`} key={index}/>))}
            {/* btn end*/}

            {/* <!--image begin */}

                {slides.map((slide, index) => (<div className={styles.slide} id={index === 0 ? styles.first : ''} key={index}><img src={slide.imageUrl} alt={''} /></div>))}

            {/* <!--image end */}

            {/* auto begin*/}
                <div className={styles.au_nav}>
                    {slides.map((_, index) => (<div className={styles[`auto_btn${index+1}`]} key={index}/>))}                  
                </div> 
            {/* auto end*/}

            {/* change btn begin */}
                <div className={styles.change_btn}id={styles.left}>
                    <Image className={styles.left_btn} src={left_arrow} alt=''></Image>
                </div>
                <div className={styles.change_btn} id={styles.right}>
                    <Image className={styles.right_btn} src={right_arrow} alt=''></Image>
                </div>
            {/* change btn end */}

            </div>
        {/* slides end*/}

        {/* manual begin*/}
            <div className={styles.manual_nav}>
                {slides.map((_, index) => (<label htmlFor={styles[`radio${index+1}`]} className={styles.manual_btn} key={index}></label>))}
            </div>
        {/* manual end*/}

        {/* Form begin */}
            <div className={styles.opt}>
                <label>MUA VÉ NHANH</label>
                {/* <form method="POST" action="./buy_ticket"> */}
                <form onSubmit={handleSubmit}>
                    <select name="movie">
                        <option value="" hidden>Chọn phim</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.title}>{movie.title}</option>))}
                    </select>

                     <select name="cinema">
                        <option value="" hidden>Chọn rạp</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.language}>{movie.language}</option>))}
                    </select>
                    {/* <select>
                        <option value="" hidden>Chọn ngày</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.title}>{movie.title}</option>))}
                    </select>
                    <select>
                        <option value="" hidden>Chọn suất</option> 
                        {movies.map((movie, index) => (<option key={index} value={movie.title}>{movie.title}</option>))}
                    </select> */}
                    <button type="submit" className={styles.buy_btn}>Mua vé</button>
                </form>
                {/* <Link href={'./buy_ticket'}>
                    <button className={styles.buy_btn}>Mua vé</button>
                </Link> */}

            </div>
        {/* Form end */}

        {/*buy_btn_layer_nd begin*/}
            {/* <div className={styles.back}>
                <div className={styles.box}>
                </div>
            </div> */}
        {/*buy_btn_layer_nd end*/}


        </div>
    )
}