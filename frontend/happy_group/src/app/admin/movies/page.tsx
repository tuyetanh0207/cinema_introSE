import React from "react";
import styles from "./Movies.module.css"
import { add_ad, help_ad, home_ad, logo_ad, movie_ad, msg_ad, person_ad, pwd_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
export default function Movies_Admin (){


    return(
        <>
        {/* <Header_admgit cin/>
        <Movies_Admin/> */}
        <div className={styles.movies_part}>
            {/* filter to date */}
            <div className={styles.header}>
                <div className={styles.addmovie}>
                    <Image src={add_ad} alt="" width={15} height={15}/> Add movie
                </div>
                <div className={styles.timing}> Start:   </div>
                <div className={styles.header__date}>31/07/2022</div>
            
                <div className={styles.timing}>End:      </div>
                <div className={styles.header__date}>31/07/2022</div>
      
                </div>
            {/* table */}
            <div className={styles.movies_table}>
                <div className={styles.movies_table_header}>
                <div className={styles.movies_table_col}>No.</div>
                <div className={styles.movies_table_col}>ID</div>
                <div className={styles.movies_table_col}>Name</div>
                <div className={styles.movies_table_col}>Genre</div>
                <div className={styles.movies_table_col}>Length</div>
                <div className={styles.movies_table_col}>Start date</div>
                <div className={styles.movies_table_col}>End date</div>
                <div className={styles.movies_table_col}>Rating</div>
                <div className={styles.movies_table_col}>Actions</div>
            
                </div>
               </div>
        </div>
        </>
    )
}