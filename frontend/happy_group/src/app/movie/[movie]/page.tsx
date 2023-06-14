"use client"
import movieAPI from "../../api/movieAPI";
import axios from "axios";
import s from './idfilm.module.css'
import Loader from "@/components/loader";
import {clock} from '@/assets/svgs';
import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
import { useEffect, useState } from "react";
type movieInterface = {
    _id: string,
    duration: number,
    title: string,
    image: string,
    language: [],
    genre : [],
    director: string,
    cast : [],
    // releaseDate: string,
    rating: number,
    description: string,
    releaseDate: string
}
type Props = {
    params: { movie: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };



export default function MoviesPage( {params, searchParams}: Props) {
    console.log("hihi");
    console.log("prarams only",params);
    console.log("pros",params.movie);
   
    const [movie, setMovie]= useState<movieInterface>()
    const fetchMovie = async () => {
      const res= await movieAPI.getMovie(id);
      setMovie(res.data)
    }
    useEffect(()=> {
      fetchMovie();
  },[])
// console.log("ket qua", specificMovie)
    
    return (
      <>
      <div className={s.idfilm}>
      <div className={s.title}>
          <a className={s.db} href="https://www.galaxycine.vn/">TRANG CHỦ</a>
          {
              (!movie ) ? 
                  <Loader />:<div> {movie.title}</div>
          }   
      </div>
       <div className={s.container}>
            <div className={s.leftcolumn}>
                <div className={s.frametop}>

                    <div className={s.a1}>
                        {
                            (!movie ) ? 
                                <Loader />:
                                <img src={movie.image} alt="Mô tả ảnh"/>
                        }
                    </div>
                    
                    <div className={s.intro}>
                        {
                            (!movie ) ? 
                                <Loader />:<div className={s.i1}>{movie.title}</div>
                        }

                        <div className={s.des}>
                            <div className={s.noknow}>C16</div>
                            <div className={s.clock}>
                                <Image src={clock} alt="" className={s.icon} />
                                <div className={s.hour}>120 phút</div>
                            </div>
                        </div>


                         {
                            (!movie ) ? 
                            <Loader />:<div className={s.i2}>Language: {movie.language[0]}, {movie.language[1]}</div>
                        }
                        {
                            (!movie ) ? 
                            <Loader />:<div className={s.i2}>Genre: {movie.genre[0]}, {movie.genre[1]}, {movie.genre[2]} </div>
                        }
                        {
                            (!movie ) ? 
                            <Loader />:<div className={s.i2}>Director: {movie.director}</div>
                        }
                        {
                            (!movie ) ? 
                            <Loader />:<div className={s.i2}>Cast: {movie.cast[0]}, {movie.cast[1]}, {movie.cast[2]}</div>
                        }
                        {
                            (!movie ) ? 
                            <Loader />:<div className={s.i2}>Release Date: {movie.releaseDate}</div>
                        }
                        
                        {
                            (!movie ) ? 
                            <Loader />:<div className={s.i2}>Rating: {movie.rating}</div>
                        } 
                        <div className={s.starvote}>
                            <div className={s.i2}>Rate: </div>
                            <div className={s.rating}>
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label htmlFor="star5" ></label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                <label htmlFor="star4" ></label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label htmlFor="star3" ></label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label htmlFor="star2"></label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                <label htmlFor="star1" ></label>
                            </div>

                        </div>
                       
                    </div>
                    
                </div>
                <div className={s.framebot}>
                    <div>
                        <div>
                            <div className={s.j1}> DESCRIPTION</div>
                            {
                                (!movie ) ? 
                                    <Loader />:<div className={s.j2}>{movie.description}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.rightcolumn}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/biet-doi-rat-on">
                        {
                            (!movie ) ? 
                                <Loader />:
                                <img className={s.img} src={movie.image} alt="Mô tả ảnh"/>
                        }
                        </a>
                    </div>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/sieu-lua-gap-sieu-lay">
                        {
                            (!movie ) ? 
                                <Loader />:
                                <img className={s.img} src={movie.image} alt="Mô tả ảnh"/>
                        }
                        </a>
                    </div>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/dat-ve/trinh-cong-son">
                        {
                            (!movie ) ? 
                                <Loader />:
                                <img className={s.img} src={movie.image} alt="Mô tả ảnh"/>
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



export async function generateMetadata(
    { params, searchParams }: Props,
    parent?: ResolvingMetadata,
  ): Promise<Metadata> {
    // read route params
    const id = params.movie;
   
    const res= await movieAPI.getMovie(id) ;
    const movie=res.data  
console.log("Movie: ", movie)

    return {
    title: movie.title

    };
  }

export async function generateStaticParams() {
  const res= await movieAPI.getAllMovies();
  const movies=res.data
  // console.log("Movies path: ", movies)
  return movies.map((movie:any) => ({
    slug: movie._id,
  }));
}