import React from "react";
import Sidebar from "@/components/Admin_page/Sidebar/Sidebar";
import styles from "./id_movie.module.css"
import Image from "next/image";
import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
import { edit } from "@/assets/svgs";
export default function mm (){


    return(
        <div className={styles.aa}>
            {/* <Sidebar/> */}
            <div className={styles.navbar}><div className={styles.navbar_title}>Conan movie 26: </div> </div>
            <div className={styles.content}>
                <div className={styles.edit}>
                    <Image src={edit} alt="" height={15} width={15}/>
                    Edit movie
                </div>
                <div className={styles.infor}>
                <div className={styles.title}>Vietnamese Name:</div>
                <div className={styles.title}>International name:</div>
                <div className={styles.title}>Length:</div>
                <div className={styles.title}>Start of showing:</div>
                <div className={styles.title}>End of showing:</div>
                <div className={styles.title}>Genre</div>
                <div className={styles.title}>Director:</div>
                <div className={styles.title}>Actor:</div>
                <div className={styles.title}>Produce Date:</div>
                <div className={styles.title}>Movie ID:</div>
                <div className={styles.title}>Description</div>
</div>
            
            </div>
          
            </div>
    )
}