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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const users=useSelector((state: any)=> state?.users).UsersData
  const dispatch=useDispatch();
  const fetchUsers=async() =>{
      await axios.get("https://gokisoft.com/api/fake/1395/movies/nowShowing")
      .then((res)=>{
          dispatch(getUsersData(res.data))
          console.log(res.data)
      })
  }
  useEffect(()=>{
      fetchUsers();
  },[])
  // console.log("res: ",users.UsersData)

  return (
      <>
      <h1>Phim moi</h1>
      {
          (!users && users == undefined)? 
          <> 
          <Loader/>
          </>
          :
          users.map((user:any)=> {
              return(
                  <>
                  <h3>Name: {user.title}</h3>
                  </>
              )
          })
      }
      </>
  )
}
