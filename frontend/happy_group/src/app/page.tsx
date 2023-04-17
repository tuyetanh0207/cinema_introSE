import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Filmcomment from '@/components/filmcomment/filmcomment'
import Idfilm from '@/components/idfilm/idfilm'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Idfilm/>
      </div>
  )
}
