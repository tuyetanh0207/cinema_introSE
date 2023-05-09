import React from "react";
import styles from "./layout.module.css"
import Sidebar from "@/components/Admin_page/Sidebar/Sidebar";
import Movies_Admin from "./movies/page";
import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
import Schedule_Admin from "./schedule/page";
export default function Layout (){


    return(
        <div className={styles.layout_admin}>
            <Sidebar/>
            <div className={styles.content}>

            <Header_admin/>
            {/* <Movies_Admin/> */}
            <Schedule_Admin/>
            </div>
          
            </div>
    )
}