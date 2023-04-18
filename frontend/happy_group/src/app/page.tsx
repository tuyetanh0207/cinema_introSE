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
import MovieAPI from './api/movieAPI';
import Search from '@/components/search/search'

export default function Home() {

  
//   const fetchUsers=async() =>{
//     // can chu y
//       const movies= await MovieAPI.getNowShowingMovies();
//       console.log("res: ",movies)
//   }
//   useEffect(()=>{
//       fetchUsers();
//   },[])


  return (
      <>
      <h1>Phim moi</h1>
      {/* {
          (!movies && users == undefined)? 
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
      } */}
      {/* <Search/> */}
      </>
  )
}
