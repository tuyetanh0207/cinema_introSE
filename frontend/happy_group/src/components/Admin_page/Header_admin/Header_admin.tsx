import React from "react";
import styles from "./Header_admin.module.css"
import { help_ad, home_ad, logo_ad, movie_ad, msg_ad, open_ad, person_ad, pwd_ad, search_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
import { avt_ad } from "@/assets/imgs";
export default function Header_admin (){


    return(
        <div className={styles.header}>
            {/* sub header  */}
            <div className={styles.sub_header}>
                <div className={styles.icon}>   <Image src={open_ad} alt=""/></div>
                <div className={styles.search_bar}>
                    <Image src={search_ad} alt="" width={20} height={20}/>
                    {/* <input type="text" placeholder="Search here . . ." className={styles.input} /> */}
                </div>
                <div className={styles.avatar}>
                    <Image src={avt_ad} alt="" width={20} height={20}/>
                    Hi, 
                </div>
            </div>
            {/* navigate */}
            <div className={styles.navbar}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}>All</li>
                <li className={styles.nav_item}>Now showing</li>
                <li className={styles.nav_item}>Coming soon</li>
            </ul>
            <div className={styles.search_bar_nav}>
                    <Image src={search_ad} alt=""/>
                    <input type="text" placeholder="Enter movie name to search movie. . ." className={styles.input} />
                </div>
            </div>
        </div>
    )
}