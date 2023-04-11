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
import MovieAPI from './api/movieAPI';
import BannerAPI from './api/BannerAPI'
import Banner from '@/components/Banner/Banner'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [movies, setMovies] = useState([]);

    const fetchUsers = async () => {
      const moviesData = await MovieAPI.getNowShowingMovies();
      console.log("res: ", moviesData);
      setMovies(moviesData.data);
      }
      useEffect(()=>{
          fetchUsers();
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
<h1>Phim moi</h1>
      {
          (!movies && movies == undefined)? 
          <> 
          <Loader/>
          </>
          :
          movies.map((movie:any)=> {
              return(
                  <>
                  <h3>Name: {movie.title}</h3>
                  </>
              )
          })
      }
      {/* <Banner/> */}
      </>
  )
}
