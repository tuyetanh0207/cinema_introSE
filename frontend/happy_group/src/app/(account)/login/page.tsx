 "use client"

import Image from 'next/image'
 import styles from './login.module.css'
import React,  { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import UserAPI from '../../api/userAPI'
import { useSelector,useDispatch } from 'react-redux'
// import { getUsersData } rom '../state/actions/userActions'
import { loginUser } from '@/redux/apiRequests'
import authSlice from '@/redux/authSlice'
import { useRouter } from 'next/navigation'
import { useNavigate } from 'react-router-dom'



export default function Login_Form () {

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const router=useRouter();
  const handleSubmit =  (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
loginUser(newUser, dispatch,router);
   // eslint-disable-next-line react-hooks/rules-of-hooks
   //const user=useSelector((state: any)=> state.auth.login.currentUser)
  //  router.push("/")
  }

   

  return (
   
            <form className={styles.form} onSubmit={handleSubmit} >
              <div className={styles.input}> <input type="text" id='username' onChange={(e)=> setUsername(e.target.value)} placeholder='Tên đăng nhập' className={styles.username} />
                <input type="text" id ='password' onChange={(e)=> setPassword(e.target.value)} placeholder='Mật khẩu' className={styles.username} /></div>
               
                <div className={styles.footer}>
                    <div className={styles.forget_pwd}>
                     <Link href={''} className={styles.link}>Quên mật khẩu?</Link>
                    </div>
                    <button className={styles.btn}>Đăng nhập</button>
                </div> 
            </form>
     
        
  )
}

