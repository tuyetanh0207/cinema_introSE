"use client"
import movieAPI from "../../api/movieAPI";
import axios from "axios";
import s from './idfilm.module.css'
import Loader from "@/components/loader";
import {clock} from '@/assets/svgs';
import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import showtimeAPI from "@/app/api/showtimeAPI";

type movieInterface = {
    _id: string;
    title: string;
    image: string;
    language: string[];
    genre: string[];
    director: string;
    cast: string[];
    description: string;
    duration: number;
    rating: number;
    __v: number;
  };
  
type Props = {
    params: { movie: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };



export default function MoviesPage( {params, searchParams}: Props) {
    const id=params.movie
    console.log("hihi");
    console.log("prarams only",params);
    console.log("pros",params.movie);
   
    const [movie, setMovie]= useState<movieInterface>()
    const fetchMovie = async () => {
      const res= await showtimeAPI.getShowtime(id);
      console.log('data', res.data)
      setMovie(res.data.movie)
    }
    useEffect(()=> {
      fetchMovie();
  },[])

  const [selectedDate, setSelectedDate] = useState('2023-06-13');
  const [useDate, setUseDate]=useState('2023/06/13')
    function handleDateChange(event: ChangeEvent<HTMLInputElement>): void {
        setSelectedDate(event.target.value);
        const date = event.target.value.replace(/-/g, "/");
        setUseDate(event.target.value.replace(/-/g, "/"))   
    }

    const [selectedTheater, setSelectedTheater] = useState('Tất cả các rạp');

    const handleTheaterChange = (event) => {
        setSelectedTheater(event.target.value);
      };

     //showtime
     const fetchSche = async () => {
       const res= await showtimeAPI.quickbuy(id,'',useDate);
       res.data.forEach(item => {
             for (let i = 0; i < res.data.length; i++) {
                     if(item.theatre==='Happy Us Theatre Quận 1'){
                         setQ1(item.time)
                     }
                     if(item.theatre==='Happy Us Theatre Quận 2'){
                         setQ2(item.time)
                     }
                     if(item.theatre==='Happy Us Theatre Quận 3'){
                         setQ3(item.time)
                     }
                     if(item.theatre==='Happy Us Theatre Quận 4'){
                         setQ4(item.time)
                     }
                     if(item.theatre==='Happy Us Theatre Quận 5'){
                         setQ5(item.time)
                     }
               }
         }  
       );
     }
     useEffect(()=> {
       fetchSche();
   },[useDate])
   const [Q1, setQ1] = useState([]);
   const [Q2, setQ2] = useState([]);
   const [Q3, setQ3] = useState([]);
   const [Q4, setQ4] = useState([]);
   const [Q5, setQ5] = useState([]);

   const handleClick = (theatreName: string, time: string) => {
    const showtimeId=params.movie;
    theatreName=encodeURIComponent(theatreName);
    const date=selectedDate;
    time=encodeURIComponent(time);
    const link = `http://localhost:3000/screen?showtimeId=${showtimeId}&theatreName=${theatreName}&date=${date}&time=${time}&fbclid=IwAR34WyDJEGXy12f310JUJfyj62-do7hb8Bk4aoqu8Sjm5zMNU_8z9LAJx34`;

    window.location.href = link;

   
  };
  
    return (
      <>
      <div className={s.idfilm}>
      <div className={s.title}>
          <a className={s.db} href="https://www.galaxycine.vn/">TRANG CHỦ</a>
          {
              (!movie ) ? 
                  <Loader />:<div className={s.space}> {movie.title}</div>
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
                <input type="date" className={s.datetime} value={selectedDate} onChange={handleDateChange}></input>
                <select  className={s.theater} onChange={handleTheaterChange}>
                    <option>Tất cả các rạp</option>
                    <option>Happy Us Theatre Quận 1</option>
                    <option>Happy Us Theatre Quận 2</option>
                    <option>Happy Us Theatre Quận 3</option>
                    <option>Happy Us Theatre Quận 4</option>
                    <option>Happy Us Theatre Quận 5</option>
                </select>
            </div>
            <div className={s.box} style={{ display: selectedTheater === 'Happy Us Theatre Quận 1' || selectedTheater === 'Tất cả các rạp' ? 'block' : 'none' }}>
                <div className={s.namett}>
                Happy Us Theatre Quận 1
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                        {Q1.map((element, index) => (
                            <div key={index} className={s.time} onClick={() => handleClick('Happy Us Theatre Quận 1', element)}>
                            {element}
                            </div>
                        ))}
                        </div>
                </div>  
            </div>

            <div className={s.box} style={{ display: selectedTheater === 'Happy Us Theatre Quận 2' || selectedTheater === 'Tất cả các rạp' ? 'block' : 'none' }}>
                <div className={s.namett}>
                Happy Us Theatre Quận 2
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                        {Q2.map((element, index) => (
                            <div key={index} className={s.time} onClick={() => handleClick('Happy Us Theatre Quận 2', element)}>
                            {element}
                            </div>
                        ))}
                        </div>
                </div>  
            </div>

            <div className={s.box} style={{ display: selectedTheater === 'Happy Us Theatre Quận 3' || selectedTheater === 'Tất cả các rạp' ? 'block' : 'none' }}>
                <div className={s.namett}>
                Happy Us Theatre Quận 3
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                        {Q3.map((element, index) => (
                            <div key={index} className={s.time} onClick={() => handleClick('Happy Us Theatre Quận 3', element)}>
                            {element}
                            </div>
                        ))}
                        </div>
                </div>  
            </div>

            <div className={s.box} style={{ display: selectedTheater === 'Happy Us Theatre Quận 4' || selectedTheater === 'Tất cả các rạp' ? 'block' : 'none' }} >
                <div className={s.namett}>
                Happy Us Theatre Quận 4
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                        {Q4.map((element, index) => (
                            <div key={index} className={s.time} onClick={() => handleClick('Happy Us Theatre Quận 4', element)}>
                            {element}
                            </div>
                        ))}
                        </div>
                </div>  
            </div>

            <div className={s.box} style={{ display: selectedTheater === 'Happy Us Theatre Quận 5' || selectedTheater === 'Tất cả các rạp' ? 'block' : 'none' }}>
                <div className={s.namett}>
                Happy Us Theatre Quận 5
                </div>
                <div className={s.schedule}>
                        <div className={s.type}>
                        2D - Phụ đề
                        </div>
                        <div className={s.alltime}>
                        {Q5.map((element, index) => (
                            <div key={index} className={s.time} onClick={() => handleClick('Happy Us Theatre Quận 5', element)}>
                            {element}
                            </div>
                        ))}
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
  const res= await showtimeAPI.getAllShowtimes();
  const movies=res.data
  // console.log("Movies path: ", movies)
  return movies.map((movie:any) => ({
    slug: movie._id,
  }));
}