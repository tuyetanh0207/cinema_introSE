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
import Filmcomment from '@/components/filmcomment/filmcomment'
import { ClassificationTypeNames } from 'typescript'
import { useSelector } from 'react-redux'
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
        const res=await movieAPI.getMovie("6444f11de50cc0bfe26b3dfc");
        setMovies(res.data);
        console.log("movie: ",res.data)
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
      <Filmcomment/>
      {/* <Idfilm/> */}
      </>

  

  )
}
