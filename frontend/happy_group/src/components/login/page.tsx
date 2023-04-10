
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './login.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Popup_Oauth_Signup from '@/components/popup_oauth/signup/popup_oauth_signup'
import React, { FC } from 'react'
import { callbackify } from 'util'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Login () {
    
    const handleSubmit = async (event:any)=>{
        event.preventDefault();
        // get data from the form
        const infor ={
            username:event.target.username.value,
            pwd: event.target.pwd.value
        }
        console.log(infor)
        const options = {
            // The method is POST because we are sending data.
            method: 'GET',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            }
            // Body of the request is the JSON data we created above.
          }

        // const JSONdata=
        // const apiUser='http://localhost:3004/users'
        // const response = await fetch(apiUser,options);
        // const result=await response.json();
        // console.log(result)
        // result.forEach((element: { username: any; password: any }) => {
        //     if(element.username==infor.username && element.password == infor.pwd){
        //         alert("dang nhap thanh cong")
        //     }
        // });
    }
   

  return (
    // <React.Fragment>
      <div>
       <div className={styles.parent}>
        <div className={styles.popup} >
            <button className={styles.btn_exit}>Thoát</button>
            <div className={styles.header}>
                <h1 className={styles.h1}>Đăng nhập </h1>
                <span className={styles.btn_switch}>Đăng ký</span>

            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input}> <input type="text" id='username' placeholder='Tên đăng nhập' className={styles.username} />
                <input type="text" id ='pwd' placeholder='Mật khẩu' className={styles.username} /></div>
               
                <div className={styles.footer}>
                    <div className={styles.forget_pwd}>
                     <Link href={''} className={styles.link}>Quên mật khẩu?</Link>
                    </div>
                    <button className={styles.btn}>Đăng nhập</button>
                </div> 
            </form>
     
            <div className={styles.rectangles}>      
            <div className={styles.rec3}></div>    
            <div className={styles.rec2}></div>
                <div className={styles.rec1}></div>


            </div>
        </div>
        </div>
      </div>
    // </React.Fragment>
  )
}

