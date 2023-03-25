import styles from './header.module.css'
import { fbIcon, searchIcon } from '@/assets/svgs'
import Image from 'next/image'
export default function Header () {
    return (
        <div className={styles.header}>
            <p>Header</p>
            <Image src={searchIcon} alt={''} className={styles.icon} />
        </div>
    )
}