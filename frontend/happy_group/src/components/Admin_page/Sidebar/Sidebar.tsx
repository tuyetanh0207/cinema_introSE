import React from "react";
import styles from "./Sidebar.module.css"
import { help_ad, home_ad, logo_ad, movie_ad, msg_ad, person_ad, pwd_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
export default function Sidebar (){


    return(
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <Image src={logo_ad} alt=""/>
                US Happy 
            </div>
            <div className={styles.menu}>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={home_ad} alt=""/>
                    Dashboard</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={movie_ad} alt=""/>
                    Movies</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={person_ad} alt=""/>
                    Schedules</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={msg_ad} alt=""/>
                    Messages</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={setting_ad} alt=""/>
                    Settings</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={pwd_ad} alt=""/>
                    Password</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={help_ad} alt=""/>
                    Help</div>
                <div className={styles.menu_item}>
                    <Image  className={styles.icon} src={signout_ad} alt=""/>
                    Sign <output></output></div>
            </div>
        </div>
    )
}