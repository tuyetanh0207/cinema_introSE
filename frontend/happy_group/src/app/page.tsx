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

import { useState } from 'react'
import Filmcomment from '@/components/filmcomment/filmcomment'
import Idfilm from '@/app/idfilm/page'
import { ClassificationTypeNames } from 'typescript'



export default function Home() {


  return (
      <>
    
      <Banner/>
      <Filmcomment/>
      {/* <Idfilm/> */}
      </>

  

  )
}
