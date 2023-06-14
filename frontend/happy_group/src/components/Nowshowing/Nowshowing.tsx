import movieAPI from '@/app/api/movieAPI'
import { useEffect,useState } from 'react'

import styles from './Nowshowing.module.css'
import { fbIcon, searchIcon } from '@/assets/svgs'
import Image from 'next/image'

export default function ListFilm () {
    
    const [movies, pickMovies] = useState<any[]>([]); 

    const mov = async () => {
    const MovieData = await movieAPI.getNowShowingMovies();
    console.log("res: ", MovieData);
    pickMovies(MovieData.data);

    }
    
    useEffect(()=>{
        mov();
    },[])

    const handleMovieClick = (showtimeId: string) => {
        window.location.href = `/movie/${showtimeId}`;
      };
    
    return (
        <>
        
        

        <div className={styles.body}>
            <div className={styles.body_head_tag}>
                <div className={styles.head_tag}>
                    <div className={styles.text_tag}>phim đang chiếu</div>
                </div>
            </div>




            <div className={styles.listfilm}>
                {
    
                movies.slice(0, 4).map((movie, index) => (
                    <div className={styles.movie_item}>
                        <img src={movie.movieImage} alt="Hình ảnh không được hiển thị" data-src={movie.movieImage} className={styles.img} data-was-processed="true"></img>
                        <div className={styles.upper_text}>{movie.movieTitle}</div>
                        <button
                className={`${styles.btn_more} ${styles.upper_text}`}
                onClick={() => handleMovieClick(movie.showtimeId)} // Pass movie.showtimeId as an argument
              >
                Xem chi tiết
              </button>
                    </div>
                    ))
                }
            </div>

        </div>
        </>   
    )
}