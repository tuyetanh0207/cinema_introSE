"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NewMovies from '@/components/newmovies'
import Loader from '@/components/loader'
import axios from 'axios'
import { useEffect } from 'react'
import BannerAPI from './api/BannerAPI'
import Banner from '@/components/Banner/Banner'
import movieAPI from './api/movieAPI'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  // const [slides2, setslides] = useState([]); ///
  // const slide1 = async () => {
  //   const moviesData = await BannerAPI.getAllSlides();
  //   console.log("res: ", moviesData);
  //   setslides(moviesData.data);
  //   }

  //   useEffect(()=>{
  //       slide1();
  //   },[])

  return (
      <>
    {/* {
          slides2.map((slide3:any,index)=> {
              return(
                  <>
                    <h3>{slide3.imageUrl}</h3>
                  </>
              )
          })
      } */}
      <Banner/>
      
      </>
  )
}
