"use client"
import axios from "axios"
import React,{useState, useEffect, FC} from "react";
import { getUsersData } from "@/app/state/actions/userActions";
import Loader from "../loader";
import { store } from "@/app/state/store/store";
import { useSelector, useDispatch, Provider } from "react-redux";
import s from './idfilm.module.css'
import Image from 'next/image'
import {clock} from '@/assets/svgs'


 function NewMovies  (){
    const movie=useSelector((state: any)=> state?.movie).UsersData
    const dispatch=useDispatch();
    const fetchUsers=async() =>{
        await axios.get("https://gokisoft.com/api/fake/1395/movies/nowShowing")
        .then((res)=>{
            dispatch(getUsersData(res.data))
            console.log(res.data)
        })
    }
    useEffect(()=>{
        fetchUsers();
    },[])
    return (
        <>
        <div className={s.idfilm}>
        <div className={s.title}>
            <a className={s.db} href="https://www.galaxycine.vn/">TRANG CHỦ</a>
            {
                (!movie || movie.length === 0) ? 
                    <Loader />:<div> &emsp;>&emsp;{movie[0].title}</div>
            }   
        </div>
       <div className={s.container}>
            <div className={s.leftcolumn}>
                <div className={s.frametop}>

                    <div className={s.a1}>
                        {
                            (!movie || movie.length === 0) ? 
                                <Loader />:
                                <img src={movie[0].image} alt="Mô tả ảnh"/>
                        }
                    </div>
                    
                    <div className={s.intro}>
                        {
                            (!movie || movie.length === 0) ? 
                                <Loader />:<div className={s.i1}>{movie[0].title}</div>
                        }

                        <div className={s.des}>
                            <div className={s.noknow}>C16</div>
                            <div className={s.clock}>
                                <Image src={clock} alt={''} className={s.icon} />
                                <div className={s.hour}>120 phút</div>
                            </div>
                        </div>


                        {
                            (!movie || movie.length === 0) ? 
                            <Loader />:<div className={s.i2}>Language: {movie[0].language[0]}, {movie[0].language[1]}</div>
                        }
                        {
                            (!movie || movie.length === 0) ? 
                            <Loader />:<div className={s.i2}>Genre: {movie[0].genre[0]}, {movie[0].genre[1]}, {movie[0].genre[2]} </div>
                        }
                        {
                            (!movie || movie.length === 0) ? 
                            <Loader />:<div className={s.i2}>Director: {movie[0].director}</div>
                        }
                        {
                            (!movie || movie.length === 0) ? 
                            <Loader />:<div className={s.i2}>Cast: {movie[0].cast[0]}, {movie[0].cast[1]}, {movie[0].cast[2]}</div>
                        }
                        {
                            (!movie || movie.length === 0) ? 
                            <Loader />:<div className={s.i2}>Release Date: {movie[0].releaseDate}</div>
                        }
                        
                        {
                            (!movie || movie.length === 0) ? 
                            <Loader />:<div className={s.i2}>Rating: {movie[0].rating}</div>
                        }
                        <div className={s.starvote}>
                            <div className={s.i2}>Rate: </div>
                            <div className={s.rating}>
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label for="star5" ></label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                <label for="star4" ></label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label for="star3" ></label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label for="star2"></label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                <label for="star1" ></label>
                            </div>

                        </div>
                       
                    </div>
                    
                </div>
                <div className={s.framebot}>
                    <div>
                        <div>
                            <div className={s.j1}> DESCRIPTION</div>
                            {
                                (!movie || movie.length === 0) ? 
                                    <Loader />:<div className={s.j2}>{movie[0].description}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rightcolumn}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/biet-doi-rat-on">
                        {
                            (!movie || movie.length === 0) ? 
                                <Loader />:
                                <img className={s.img} src={movie[3].image} alt="Mô tả ảnh"/>
                        }
                        </a>
                    </div>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/sieu-lua-gap-sieu-lay">
                        {
                            (!movie || movie.length === 0) ? 
                                <Loader />:
                                <img className={s.img} src={movie[0].image} alt="Mô tả ảnh"/>
                        }
                        </a>
                    </div>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/trinh-cong-son">
                        {
                            (!movie || movie.length === 0) ? 
                                <Loader />:
                                <img className={s.img} src={movie[2].image} alt="Mô tả ảnh"/>
                        }
                        </a>
                    </div>
                    <div className={s.more}>
                        <a className={s.more} href="https://www.galaxycine.vn/phim-dang-chieu">XEM THÊM</a>
                    </div>
            </div>
       </div>
       <div className={s.mschedule}>
            <div> LỊCH CHIẾU</div>
            <div className={s.select}>
                <input type="date" className={s.datetime} value="2023-04-04"></input>
                <select  className={s.theater}>
                    <option>Tất cả các rạp</option>
                    <option>Galaxy Nguyễn Du</option>
                    <option>Galaxy Tân Bình</option>
                    <option>Galaxy Kinh Dương Vương</option>
                    <option>Galaxy Quang Trung</option>
                    <option>Galaxy Bến Tre</option>
                    <option>Galaxy Đà Nẵng</option>
                </select>
            </div>
            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Nguyễn Du
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Tân Bình
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Kinh Dương Vương
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Quang Trung
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Bến Tre
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

            <div className={s.box}>
                <div className={s.namett}>
                    Galaxy Đà Nẵng
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                            <div className={s.time}>14:45</div>
                            <div className={s.time}>17:15</div>
                            <div className={s.time}>19:45</div>
                            <div className={s.time}>20:30</div>
                            <div className={s.time}>22:00</div>
                        </div>
                </div>  
            </div>

       </div>
    </div>
        </>
    )

}


const App: FC = () => {
    // const router = useRouter();
    // useEffect(() => {
    //     const handleRouteChange = (url) => {
    //         gtag.pageview(url);
    //     };
    //     router.events.on('routeChangeComplete', handleRouteChange);
    //     return () => {
    //         router.events.off('routeChangeComplete', handleRouteChange);
    //     };
    // }, [router.events]);
  
    return (
      <Provider store={store}>
          <NewMovies/>
      </Provider>
    );
  };
  export default App;
