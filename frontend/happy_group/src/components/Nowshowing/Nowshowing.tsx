import movieAPI from '@/app/api/movieAPI'
import Loader from '../loader'
import { useEffect,useState } from 'react'

import styles from './Nowshowing.module.css'
import { fbIcon, searchIcon } from '@/assets/svgs'
import Image from 'next/image'

export default function ListFilm () {
    
    const [users, setslides] = useState([]); ///
    const mov = async () => {
    const moviesData = await movieAPI.getNowShowingMovies();
    console.log("res: ", moviesData);
    setslides(moviesData.data);
    }
    
    useEffect(()=>{
        mov();
    },[])

    
    return (
        <>
        
        

        <div className={styles.body}>
            <div className={styles.body_head_tag}>
                <div className={styles.head_tag}>
                    <div className={styles.text_tag}>danh sách phim</div>
                </div>
            </div>
            
            


            <div className={styles.listfilm}>
                {
                    (!users && users == undefined)? 
                    <> 
                    <Loader/>
                    </>
                    :
                    users.map((user:any)=> {
                        return(
                            <>
                            <div className={styles.movie_item}>
                                <img src={user.image} alt="Hình ảnh không được hiển thị" data-src={user.image} className={styles.img} data-was-processed="true"></img>
                                <div className={styles.upper_text}>{user.title}</div>
                            </div>
                            
                            </>
                        )
                    })
                }
            </div>

        </div>
        </>   
    )
}