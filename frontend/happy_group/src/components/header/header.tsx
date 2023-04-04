import styles from './header.module.css'
import { fbIcon,searchIcon, twitterIcon, instaIcon, logoIcon, logoutIcon } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
// import Popup_Oauth from '../popup_oauth/login/popup_oauth_login'
export default function Header () {
    return (
        <div className={styles.header}>
            <div className={styles.subheader}>
                <div className={styles.logo}>
                    <Image src={logoIcon} alt=''></Image>     
                     Happy Group         
                </div>
                <div className={styles.searchbar}>
                    <Image src ={searchIcon} className={styles.searchIcon} alt=''></Image>
                    Search here . . .
                </div>
                <div className={styles.login}>
                    <Image src={logoutIcon} className={styles.loginIcon} alt=''></Image>
                    Đăng nhập
                </div>
            </div>
            <div className={styles.navbar}>
                <ul className={styles.navbar_list}>
                    <li className={styles.navbar_item}><Link href={''}>Trang chủ</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Mua vé</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Phim</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Phim hot</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Góc điện ảnh</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Rạp/Giá vé</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Hỗ trợ</Link></li>

                </ul>
                <ul className={styles.navbar_list_icon}>
                <li className={styles.navbar_item_icon}>
                    <Image src={fbIcon} alt={''}></Image>
                </li>
                <li className={styles.navbar_item_icon}>
                    <Image src={twitterIcon} alt={''}></Image>
                </li>
                <li className={styles.navbar_item_icon}>
                    <Image src={instaIcon} alt={''}></Image>
                </li>
                </ul>
            </div>
            {/* <Popup_Oauth/> */}
        </div>
        
    )
}