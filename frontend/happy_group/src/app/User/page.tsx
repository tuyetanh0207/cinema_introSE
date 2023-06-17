"use client"
import { useEffect,useState } from 'react'
import styles from './User.module.css'
import {movie_img} from '@/assets/imgs'
import Image from 'next/image'
import movieAPI from "@/app/api/movieAPI";
import { movieInterface } from "@/app/api/apiResponse";
import { useSelector } from "react-redux";

export default function User (){

    const [movies, setMovies] = useState<movieInterface[]>([])
    const user = useSelector((state: any)=>state.auth.login.currentUser)
    const tabname=["All", "Now Showing", "Coming Soon"]
    const [tabidx, setTabidx]=useState(0)
    const fetchMovies = async () => {
        const res = await movieAPI.getAllMovies (user?.token);
        setMovies(res.data)
    }
    const handleCreateBtn=(id: string)=>{

    }
        useEffect(()=>{
        fetchMovies()
    },[])

    return(
        <div className={styles.body}>
            <div className={styles.Box1}>
                <div className={styles.ibox}>
                    <h1>haha</h1>
                    {movies.map((movie:movieInterface, index) => (
                        <div>{movie.genre[0]} haha</div>
                        
                    ))
                    }

                    <div className={styles.name}> Bùi Quang Tùng</div>
                    <div className={styles.info}>
                        
                    
                        <ul className={styles.infoList}>
                            <li>Giới Tính:{} </li>
                            <li>SĐT: </li>
                            <li>Ngày Sinh: </li>
                            <li>Email: </li>
                            <li>Địa chỉ: </li>
                        </ul>
                    </div>
                </div>
                <Image className={styles.pic} src={movie_img} alt='er'></Image>
            </div>

            <div className={styles.Box2}>
                <div className={styles.hbox}>
                    <table className={styles.hisTable}>
                <tr>
                    <th>Tên phim</th>
                    <th>Tên rạp</th>
                    <th>Ngày xem</th>
                    <th>Suất chiếu</th>
                    <th>Tổng tiền</th>
                </tr>
                <tr>
                    <td>Avengers: Endgame</td>
                    <td>Rạp A</td>
                    <td>2023-06-10</td>
                    <td>18:00</td>
                    <td>$20</td>
                </tr>
                <tr>
                    <td>Jurassic Park</td>
                    <td>Rạp B</td>
                    <td>2023-06-12</td>
                    <td>20:30</td>
                    <td>$15</td>
                </tr>
            </table>
                </div>

                <div className={styles.his}>
                        Lịch sử xem phim
                </div>
            </div>




        </div>
    )
}