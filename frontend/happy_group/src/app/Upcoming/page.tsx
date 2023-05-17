"use client"
import movieAPI from '@/app/api/movieAPI'
import { useEffect,useState } from 'react'

import styles from './Upcoming.module.css'
import { fbIcon, searchIcon } from '@/assets/svgs'
import Image from 'next/image'

export default function ListFilm () {
    
    const [movies, pickMovies] = useState<any[]>([]); ///
    const mov = async () => {
    const MovieData = await movieAPI.getUpComingMovies();
    console.log("res: ", MovieData);
    pickMovies(MovieData.data);

    const loopCount = 4; // Number of times you want to run the loop

    }
    
    useEffect(()=>{
        mov();
    },[])


    
    return (
        <>
        
        

        <div className={styles.body}>
            <div className={styles.body_head_tag}>
                <div className={styles.head_tag}>
                    <div className={styles.text_tag}>phim sắp chiếu</div>
                </div>
            </div>




            <div className={styles.listfilm}>
                {
    
                movies.slice(0, 8).map((movie, index) => (
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