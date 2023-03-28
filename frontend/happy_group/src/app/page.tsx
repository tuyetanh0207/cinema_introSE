import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.title}>
      <p>hello world</p>
    </div>
  )
}
