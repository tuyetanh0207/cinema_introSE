"use client"
import { useEffect,useState } from 'react'
import styles from './User.module.css'
import {movie_img} from '@/assets/imgs'
import Image from 'next/image'
import movieAPI from "@/app/api/movieAPI";
import { movieInterface } from "@/app/api/apiResponse";
import { useSelector } from "react-redux";

export default function User (){

  const user = useSelector((state: any) => state.auth.login.currentUser);
  console.log(user); // Kiểm tra thông tin người dùng trong console log
    

    return(
        <div className={styles.body}>
            <div className={styles.Box1}>
                <div className={styles.ibox}>


                    <div className={styles.name}> {user.user?.name}</div>

                    <div className={styles.infoList}>
                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>Số điện thoại:</span>
                            </div>
                            <div>
                            <span>{user.user?.phone}</span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>Email:</span>
                            </div>
                            <div>
                            <span>{user.user?.email}</span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>Vai trò:</span>
                            </div>
                            <div>
                            <span>{user.user?.role}</span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>User Name:</span>
                            </div>
                            <div>
                            <span>{user.user?.username}</span>
                            </div>
                        </div>
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
