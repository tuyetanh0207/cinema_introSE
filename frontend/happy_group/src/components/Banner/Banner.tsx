"use client"
import styles from './Banner.module.css'
import {pic1,pic2,pic3,pic4} from '@/assets/imgs'
import { right_arrow,left_arrow } from '@/assets/svgs'
import Image from 'next/image'
import { HtmlHTMLAttributes, useEffect, useState } from 'react';//
import BannerAPI from '@/app/api/BannerAPI';
import { getUsersData } from '@/app/state/actions/userActions';//
import { useSelector, useDispatch } from 'react-redux'//
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

  

export default function Banner () {

    // const [movies, setMovies] = useState([]);

    // const fetchUsers = async () => {
    //   const moviesData = await MovieAPI.getNowShowingMovies();
    //   console.log("res: ", moviesData);
    //   setMovies(moviesData.data);
    //   }
    //   useEffect(()=>{
    //       fetchUsers();
    //   },[])

    // const router = useRouter();
    // const id = router.query.id;
    // const name = router.query.name;
    // const age = router.query.age;


    const Bannerpic = [
        pic1,
        pic2,
        pic3,
        pic4,
    ];

    const MovieName = [
        'Name',
        'Super Mario',
        'Power Ranger',
        'America Tho',
        'Super Mario',
        'Power Ranger',
        'America Tho',
    ]

    return (
        <div className={styles.Banner}>

        {/* slides begin */}
            <div className={styles.slides}>

            {/* btn begin*/}
                


                {Bannerpic.map((_, index) => (<input id={styles[`radio${index+1}`]} type={"radio"} name="radio-btn" key={index}/>))}
            {/* btn end*/}

            {/* <!--image begin */}
                {Bannerpic.map((image, index) => (<div className={styles.slide} id={index === 0 ? styles.first : ''} key={index}><Image src={image} alt={''}  /></div>))}
            {/* <!--image end */}

            {/* auto begin*/}
                <div className={styles.au_nav}>
                    {Bannerpic.map((_, index) => (<div className={styles[`auto_btn${index+1}`]} key={index}/>))}                  
                </div> 
            {/* auto end*/}

            {/* change btn begin */}
                <div className={styles.change_btn}id={styles.left}>
                    <Image className={styles.left_btn} src={left_arrow} alt=''></Image>
                </div>
                <div className={styles.change_btn} id={styles.right}>
                    <Image className={styles.right_btn} src={right_arrow} alt=''></Image>
                </div>
            {/* change btn end */}

            </div>
        {/* slides end*/}

        {/* manual begin*/}
            <div className={styles.manual_nav}>
                {Bannerpic.map((_, index) => (<label htmlFor={styles[`radio${index+1}`]} className={styles.manual_btn} key={index}></label>))}
            </div>
        {/* manual end*/}

        {/* Form begin */}
            <div className={styles.opt}>
                <label>MUA VÉ NHANH</label>
                <form action=''>
                    <select>
                    {MovieName.map((name, index) => (<option key={index} value={name}>{name}</option>))}
                    </select>
                    <select>
                    {MovieName.map((name, index) => (<option key={index} value={name}>{name}</option>))}
                    </select>
                    <select>
                    {MovieName.map((name, index) => (<option key={index} value={name}>{name}</option>))}
                    </select>
                    <select>
                    {MovieName.map((name, index) => (<option key={index} value={name}>{name}</option>))}
                    </select>
                </form>
                {/* <button className={styles.buy_btn}>Mua vé</button> */}
                {/* <Link href={`/buy_ticket?MvName=abcd`} passHref>
                        <button className={styles.buy_btn}>Mua vé</button>
                </Link> */}
                <Link href={'./buy_ticket'}>
                    <button className={styles.buy_btn}>Mua vé</button>
                </Link>

            </div>
        {/* Form end */}

        {/*buy_btn_layer_nd begin*/}
            {/* <div className={styles.back}>
                <div className={styles.box}>
                </div>
            </div> */}
        {/*buy_btn_layer_nd end*/}


        </div>
    )
}