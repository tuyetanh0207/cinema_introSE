import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
import Sidebar from "@/components/Admin_page/Sidebar/Sidebar";
import styles from "./layout.module.css";
export default function Layout ({children}:any){


    return(
        <div className={styles.layout_admin}>
            <Sidebar/>
            <div className={styles.content}>
                <Header_admin/>
                {children}
            </div>
          
        </div>
    )
}