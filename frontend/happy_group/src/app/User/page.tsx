"use client"
import styles from './User.module.css'
import {movie_img} from '@/assets/imgs'
import Image from 'next/image'


export default function User (){

    return(
        <div className={styles.body}>
            <div className={styles.Box1}>
                <div className={styles.ibox}>
                    <div className={styles.name}> Bùi Quang Tùng</div>
                    <div className={styles.info}>
                        <ul className={styles.infoList}>
                            <li>Giới Tính: </li>
                            <li>SĐT: </li>
                            <li>Ngày Sinh: </li>
                            <li>Email: </li>
                            <li>Địa chỉ: </li>
                        </ul>
                    </div>
                </div>
                <Image className={styles.pic} src={movie_img}></Image>
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
                    <th>Chi Tiết</th>
                </tr>
                <tr>
                    <td>Avengers: Endgame</td>
                    <td>Rạp A</td>
                    <td>2023-06-10</td>
                    <td>18:00</td>
                    <td>$20</td>
                    <td><a href="/user/reservation/"reservationID >chi tiết</a></td>
                </tr>
                <tr>
                    <td>Jurassic Park</td>
                    <td>Rạp B</td>
                    <td>2023-06-12</td>
                    <td>20:30</td>
                    <td>$15</td>
                    <td><a href="/user/reservation/"reservationID >chi tiết</a></td>
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