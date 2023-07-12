/* eslint-disable @next/next/no-img-element */
"use client"
import showtimeAPI from "@/app/api/showtimeAPI";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import s from './idfilm.module.css';
import { Metadata, ResolvingMetadata } from "next";
import { showtimeInterface } from "@/app/api/apiResponse";

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
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

export default  function MoviesPage( {params, searchParams}: Props) {
    const id=params.slug

    const [movie, setMovie]= useState<movieInterface>()
    const fetchMovie = async () => {
      const res= await showtimeAPI.getShowtime(id);
      console.log('data', res.data)
      setMovie(res.data.movie)
    }
    useEffect(()=> {
      fetchMovie();
  },[])

  const [image, setimage] = useState<string[]>([]);
  const [showtime, setshowtime] = useState<string[]>([]);

  const transformId = async (id: string) => {
    return showtimeAPI.getShowtime(id)
    .then(data => String(data.data.movie.image));
  };

  const stt1 = async () => {
    const res11 = await showtimeAPI.getAllShowtimes()

    const ids1 = Object.values(res11.data).map((obj :any)=> obj.id);
    const results1 = await Promise.all(ids1);
    setshowtime(results1)

    const ids2 = Object.values(res11.data).map((obj:any) => transformId(obj.id));
    const results2 = await Promise.all(ids2);
    setimage(results2)
    
  }     
  useEffect(()=>{
      stt1();
  },[])

  const [selectedDate, setSelectedDate] = useState('2023-06-13');
  const [useDate, setUseDate]=useState('2023/06/13')
    function handleDateChange(event: ChangeEvent<HTMLInputElement>): void {
        setSelectedDate(event.target.value);
        setUseDate(event.target.value.replace(/-/g, "/"))   
    }

    const [selectedTheater, setSelectedTheater] = useState('Tất cả các rạp');

    const handleTheaterChange = (event:any) => {
        setSelectedTheater(event.target.value);
      };

     //showtime
     const fetchSche = async () => {
       const res= await showtimeAPI.quickbuy1(id,'',useDate);
       setQ1([])
       setQ2([])
       setQ3([])
       setQ4([])
       setQ5([])

       res.data.forEach((item:any)=> {
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
    const showtimeId=params.slug;
    theatreName=encodeURIComponent(theatreName);
    const date=selectedDate;
    time=encodeURIComponent(time);
    const link = `http://localhost:3000/screen?showtimeId=${showtimeId}&theatreName=${theatreName}&date=${date}&time=${time}&fbclid=IwAR34WyDJEGXy12f310JUJfyj62-do7hb8Bk4aoqu8Sjm5zMNU_8z9LAJx34`;
    window.location.href = link;
  };
   
  
  const clickbutton = () => {
    const scrollOptions: ScrollToOptions = { top: 1350, behavior: 'smooth' }; 
    window.scrollTo(scrollOptions); 
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollingRight, setIsScrollingRight] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
        if (isScrollingRight) {
          containerRef.current.scrollLeft += 270; 
        } else {
          containerRef.current.scrollLeft -= 270; 
        }
  
        if (scrollLeft === 0) {
          setIsScrollingRight(true);
        } else if (scrollWidth - clientWidth - scrollLeft<1) {
          setIsScrollingRight(false);
        }
      }
    }, 2500); // 1000 milliseconds = 1 second
  
    return () => {
      clearInterval(interval);
    };
  }, [isScrollingRight]);
    

    return (
      <></>
    )
};
// export async function generateStaticParams() {
//   const res= await showtimeAPI.getAllShowtimes();
//   const movies=res.data
//   // console.log("Movies path: ", movies)
//   return movies.map((movie:showtimeInterface) => ({
//     movie: movie.id,
//   }));
// }
// export async function generateStaticParams() {
//   const posts = [{slug:"1"},{slug:"2"},{slug:"3"}]
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }