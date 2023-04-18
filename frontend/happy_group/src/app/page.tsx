"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
// import Popup_Oauth_Signup from '@/components/popup_oauth/signup/popup_oauth_signup'
import NewMovies from '@/components/newmovies'
import Loader from '@/components/loader'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersData } from './state/actions/userActions'
import Login from '@/components/login/page'
// import MovieAPI from './api/movieAPI';
import BannerAPI from './api/BannerAPI'
import Banner from '@/components/Banner/Banner'

import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


    const [slides2, setslides] = useState([]); ///
    const slide1 = async () => {
      const moviesData = await BannerAPI.getNowShowingMovies();
      console.log("res: ", moviesData);
      setslides(moviesData.data);
      }

      useEffect(()=>{
          slide1();
      },[])

    //   const fetchUsers = async () => {
    //     const moviesData = await BannerAPI.getAllSlides();
    //     console.log("res: ", moviesData);
    //     setMovies(moviesData.data);
    //     }
    //     useEffect(()=>{
    //         fetchUsers();
    //     },[])
  return (
      <>
      {/* {
          (!slides2 && slides2 == undefined)? // xử lí lỗi
          <> 
          <Loader/>
          </>
          :
          slides2.map((slide3:any,index)=> {
              return(
                  <>
                    <div className={styles.slide} id={index === 0 ? styles.first : ''} key={index}>
                        <img src={slide3.image} alt='Error pic' />
                        </div>
                  </>
              )
          })
      } */}
      <Banner/>
      
      </>
  )
}
