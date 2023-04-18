import styles from './header.module.css'
import { fbIcon,searchIcon, twitterIcon, instaIcon, logoIcon, logoutIcon } from '@/assets/svgs'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
// import Popup_Oauth from '../popup_oauth/login/popup_oauth_login'
import UserAPI from '@/app/api/userAPI';
import { logOut } from '@/redux/apiRequests';
import { createAxios } from '@/createInstance';
import { logOutSuccess } from '@/redux/authSlice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchComp from '../search/search';
export default function Header () {
    //const [user, setUser]=useState({})
    const user=useSelector((state:any)=> state.auth.login.currentUser)
 
   // const user=useSelector((state:any)=> state.auth.login.currentUser)
    //setUser(res);
   //console.log("my user: ", user.name);
   const router=useRouter();
   const handleLogout=(e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    const accessToken=user?.token;
    const id = user?.user._id
    console.log("token", accessToken)
    console.log("id", id)
    let axiosJWT=createAxios(user,dispatch,logOutSuccess);
    console.log("axios",axiosJWT)

    logOut(dispatch, id,accessToken, axiosJWT,router);
    console.log("dang xuat")

    
   }
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    
    console.log("dang xuat")
  
  
  }

    return (
        <div className={styles.header}>
            <div className={styles.subheader}>
                <div className={styles.logo}>
                    <Image src={logoIcon} alt=''></Image>     
                     Happy Group         
                </div>
                {/* <div className={styles.searchbar}>
                    <Image src ={searchIcon} className={styles.searchIcon} alt=''></Image>
                    Search here . . .
                </div> */}
                <SearchComp/>
                {user? 
                (<div className={styles.login}>Hi, {user.user.name}
                 <Link onClick={handleLogout} href={''}>
                    <Image src={logoutIcon} className={styles.loginIcon} alt=''></Image>
                    </Link> */
                </div>
                ):
                (<div className={styles.login} onClick={()=>router.push("/login")}>
                    <Image src={logoutIcon} className={styles.loginIcon} alt=''></Image>
                    Đăng nhập
                </div>)}
                
            </div>
            <div className={styles.navbar}>
                <ul className={styles.navbar_list}>
                    <li className={styles.navbar_item}><Link href={''}>Trang chủ</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Mua vé</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Phim</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Phim hot</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Góc điện ảnh</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Rạp/Giá vé</Link></li>
                    <li className={styles.navbar_item}><Link href={''}>Hỗ trợ</Link></li>

                </ul>
                <ul className={styles.navbar_list_icon}>
                <li className={styles.navbar_item_icon}>
                    <Image src={fbIcon} alt={''}></Image>
                </li>
                <li className={styles.navbar_item_icon}>
                    <Image src={twitterIcon} alt={''}></Image>
                </li>
                <li className={styles.navbar_item_icon}>
                    <Image src={instaIcon} alt={''}></Image>
                </li>
                </ul>
            </div>
            {/* <Popup_Oauth/> */}
        </div>
        
    )
}