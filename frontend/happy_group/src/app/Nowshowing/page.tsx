"use client"
import movieAPI from '@/app/api/movieAPI'
import Loader from '@/components/loader'
import { useEffect,useState } from 'react'

import styles from './Nowshowing.module.css'
import { fbIcon, searchIcon } from '@/assets/svgs'
import Image from 'next/image'

export default function ListFilm () {
    
    const [movies, pickMovies] = useState<any[]>([]); ///
    const mov = async () => {
    const MovieData = await movieAPI.getNowShowingMovies();
    console.log("res: ", MovieData);
    pickMovies(MovieData.data);

    }
    
    useEffect(()=>{
        mov();
    },[])


    
    return (
        <>
        
        

        <div className={styles.body}>
            <div className={styles.body_head_tag}>
                <div className={styles.head_tag}>
                    <div className={styles.text_tag}>đang chiếu</div>
                </div>
            </div>




            <div className={styles.listfilm}>
                {
    
                movies.slice(0, 4).map((movie, index) => (
                    <div className={styles.movie_item}>
                        <img src={movie.movieImage} alt="Hình ảnh không được hiển thị" data-src={movie.movieImage} className={styles.img} data-was-processed="true"></img>
                        <div className={styles.upper_text}>{movie.movieTitle}</div>
                    </div>
                    ))
                }
            </div>

        </div>
        </>   
    )
}