"use client"
import { useState } from 'react';
import styles from './layout.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/redux/apiRequests';
import { useNavigate } from 'react-router';
import { usePathname } from "next/navigation"
import Login_Form from './login/page';
import Signup_Form from './signup/page';


export default function Auth_Layout() {
 
    const pathname=usePathname();
    const router=useRouter();

    return (
        <div className={styles.parent}>
        <div className={styles.popup}>
            <button className={styles.btn_exit} onClick={()=>router.push("/")}>Thoát</button>
        {pathname==="/login"? (
            <div className={styles.header}>
                <span className={styles.h1}>Đăng nhập </span>
                <span className={styles.btn_switch} onClick={()=>router.push("/signup")}>Đăng ký</span>
            </div>
        ):(
            <div className={styles.header}>
                <span className={styles.btn_switch} onClick={()=>router.push("/login")}>Đăng nhập </span>
                <span className={styles.h1}>Đăng ký</span>
            </div>
        )}
     {pathname==="/login"?(<Login_Form/>):( <Signup_Form/>)}
        
      
            <div className={styles.rectangles}>      
            <div className={styles.rec3}></div>    
            <div className={styles.rec2}></div>
            <div className={styles.rec1}></div>


            </div>
        </div>
        </div>


    )
}