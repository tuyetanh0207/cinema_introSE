"use client"
import Image from 'next/image'
import { Amiri_Quran, Inter } from 'next/font/google'
import styles from './page.module.css'
import NewMovies from '@/components/newmovies'
import Loader from '@/components/loader'
import axios from 'axios'
import { useEffect } from 'react'
import BannerAPI from './api/BannerAPI'
import Banner from '@/components/Banner/Banner'
import Nowshowing from '@/components/Nowshowing/Nowshowing'
import Upcoming from '@/components/Upcoming/Upcoming'
import movieAPI from './api/movieAPI'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

import buy_ticket from '@/components/buy_ticket/buy_ticket'

import { useState } from 'react'
import Filmcomment from '@/components/filmcomment/filmcomment'
import { ClassificationTypeNames } from 'typescript'
import { useSelector } from 'react-redux'
import AdminAPI from './api/adminAPI'
type movieInterface = {
    _id: string,
    duration: number,
    title: string,
    image: string,
    language: [],
    genre : [],
    director: string,
    cast : [],
    // releaseDate: string,
    rating: number,
    description: string,
}

export default function Home() {

   const [movies, setMovies] =useState([]);
    const fetchMovies = async  () => {
        const res=await movieAPI.getAllMovies();
        setMovies(res.data);
        
 
    }
    useEffect(()=> {
        fetchMovies();
    },[])
    console.log("moviesss: ",movies)
    const [movie, setMovie] =useState([]);
    const fetchMovie = async  () => {
        const res=await AdminAPI.getAllShowtime();
        // const res1 = await AdminAPI.getAllShowtime("644e1fcf4fed9fdaf2ff74a5")
        // console.log("show time specific: ", res1.data)
        console.log("showtime: ",res.data)
        // console.log("movie: ",typeof(res.data))
    }
    useEffect(()=> {
        fetchMovie();
    },[])
   
    
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
      <Nowshowing/>
      <Upcoming/>
      <Filmcomment/>
      {/* <Idfilm/> */}
      </>

  

  )
}
