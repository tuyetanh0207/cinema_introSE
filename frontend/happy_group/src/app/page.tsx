import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
// import Popup_Oauth_Signup from '@/components/popup_oauth/signup/popup_oauth_signup'
import NewMovies from '@/components/newmovies'

import Banner from '@/components/Banner/Banner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Banner />
  )
}
