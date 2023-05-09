import React from "react";
import styles from "./Sidebar.module.css"
import { help_ad, home_ad, logo_ad, movie_ad, msg_ad, person_ad, pwd_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
export default function Sidebar (){


    return(
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <Image width={40}height={40}src={logo_ad} alt="" className={styles.header_icon}/>
                US Happy 
            </div>
            <div className={styles.menu}>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={home_ad} alt=""/>
                    Dashboard</div>
                <div className={`${styles.menu_item} ${styles.menu_item_focus_custom}`}>
                    <Image  className={styles.icon} width={30}height={30}src={movie_ad} alt=""/>
                    Movies</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={person_ad} alt=""/>
                    Schedules</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={msg_ad} alt=""/>
                    Messages</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={setting_ad} alt=""/>
                    Settings</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={pwd_ad} alt=""/>
                    Password</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={help_ad} alt=""/>
                    Help</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} width={30}height={30}src={signout_ad} alt=""/>
                    Sign <output></output></div>
            </div>
        </div>
    )
}