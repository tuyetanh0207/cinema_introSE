/* eslint-disable react/jsx-key */
"use client"
import styles from "./schedule.module.css";
// import AdminAPI from 
 import { useEffect, useState } from 'react';//
 import React from 'react';
 import Image from 'next/image'
import AdminAPI from "@/app/api/adminAPI";
import { add_ad } from "@/assets/svgs";
import theatreAPI from "@/app/api/theatreAPI";
import movieAPI from "@/app/api/movieAPI";



export default function Schedule_Admin (){
   const [isAddingSchedule, setIsAddingSchedule]= useState(0) // 0: khong, 1: co
   const [movieList, setMovieList] = useState([]);
   const [theatreList, setTheatreList]= useState([])
   const [Schedules, take] = useState<any[]>([]); ///
   const Schedule = async () => {
     const ScheduleData = await AdminAPI.getAllShowtime();
     console.log("res: ", ScheduleData);
     take(ScheduleData.data);
     }

     useEffect(()=>{
      Schedule();
  },[])
  // fetch data
  useEffect (()=> {
    const fetchTheatreList= async()=> {
      const res= await theatreAPI.getAllTheatres();
      setTheatreList(res.data)
      console.log("theatres : ", res.data);
    }
    const fetchMovieList = async() => {
      const res =await movieAPI.getAllMovies();
      setMovieList(res.data);
      console.log("Movies : ", res.data);
    }

    fetchMovieList();
    fetchTheatreList();
  },[])
  /// new schedule
  const [newsch_movieID, setNewsch_movieID] = useState("")
  const [newsch_startDate, setNewsch_startDate]= useState("");
  const [newsch_endDate, setNewsch_endDate]= useState("");
  const [newsch_times, setNewsch_times]= useState([]);
  const [numdays, setNumdays] = useState(0)
  const [days, setDays] = useState([])
  const [theatre, setTheatre] = useState([])
  const [times, setTimes] = useState([])
  const handleAddScheduleButton = () => {
    setIsAddingSchedule(1);
   
  }
  const handleSaveAddingButton = () => {

  }


    return(
      <div  className={styles.lay1}>
        <div className={styles.addmovie} onClick={()=>{handleAddScheduleButton(); console.log("isadding:", isAddingSchedule)}}>
                    <Image src={add_ad} alt="" width={15} height={15}/> Add schedule
                </div>
        <table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      {/* <th>ID</th> */}
      <th>Name</th>
      <th>Start</th>
      <th>End</th>
      <th>Date</th>
      <th>Theatre</th>
    
      <th>Time</th>
      <th>opt</th>
    </tr>
  </thead>
  <tbody>
    {/** add schedule row */}
  {/* {Schedules.map((schedule, index) => (
    schedule.times.map((timeSlot, timeIndex) => ( */}
       {/* <tr key={`${index}-${timeIndex}`}></tr> */}
      <tr key="">
        {/* {timeIndex === 0 ? ( */}
          <>
            <td ></td>
            {/* <td >{schedule.movieId._id}</td> */}
            {/* name */}
            <td >
              {/* <label htmlFor="">Choose movie</label> */}
              <select name="movies" id="movies">
                {movieList.map((movie: any)=> (
                  <option key = {movie}>{ movie.title}</option>
                ))}
              </select>
              </td>
            <td ><input className={styles.input}  type="text"/></td>
            <td ><input  className={styles.input} type="text"/></td>
          
            {days.map((day: any, index:any)=>(
              <td ><input value={day} onChange={()=> handleDayRowChange(index, e.target.value)} className={styles.input} type="text"/> 
                        {
                          index===0?(<>
                          < Image src={add_ad} onClick={()=>handleIncreaseDays()} alt="" className={styles.add_row_img} width={20} height={20}/>

                          </>):(<></>)
                        } 

              </td>
            ))}
            
          </>
        
        <td className= {styles.add_sheet}>
        <select name="theatres" id="theatres">
                {theatreList.map((theatre: any)=> (
                  <option key = {theatre}>{ theatre.name}</option>
                ))}
              </select>
        < Image src={add_ad}
        onClick={()=>handleIncreaseDays()}
        alt="" className={styles.add_row_img} width={20} height={20}/></td>
        
        {/* < Image src={add_ad} alt="" className={styles.add_row_img} width={20} height={20}/> */}
        <td className= {styles.add_sheet}> 
       
        <input type="text"/> 
        <Image src={add_ad} 
        onClick={()=>handleIncreaseDays()}
        alt="" className={styles.add_row_img} width={20} height={20}/>
          {/* <ul>
             {timeSlot[0].time.map((time, index) => (
              <li key={index}>
                <span key={index}>{time} </span>
              </li>
            ))} 
      
              <li key="">
                <span key=""><input type="text"/> time</span>
              </li>
       
          </ul> */}
        </td>
        <td><button onClick={handleSaveAddingButton}>Save</button></td>
      </tr>
    {/* ))
  ))} */}
  {Schedules.map((schedule, index) => (schedule.startDate ==="2023-05-09T17:00:00.000Z")?( 
    
    schedule.times.map((timeSlot:any, timeIndex:any) => (
      <tr key={`${index}-${timeIndex}`}>
        {timeIndex === 0 ? (
          <>
            <td rowSpan={schedule.times.length}>{index + 1}</td>
            {/* <td rowSpan={schedule.times.length}>{schedule.movieId._id}</td> */}
            <td rowSpan={schedule.times.length}>{schedule.movie}</td>
            <td rowSpan={schedule.times.length}>{schedule.startDate.substring(0,10)}</td>
            <td rowSpan={schedule.times.length}>{schedule.endDate.substring(0,10)}</td>
          </>
        ) : null}
       <td>{timeSlot.date}</td>
        <td>{timeSlot.theatreName}</td>
       
        <td>
          <ul>
            {timeSlot.time.map((time, index) => (
              <li key={index}>
                <span key={index}>{time} </span>
              </li>
            ))}
          </ul>
        </td>
        <td>opt</td>
      </tr>
    ))
  ):(<></>))}
</tbody>
</table>



      </div> 
    )
}

// "use client"
// import React, { useEffect, useState } from "react";
// import Sidebar from "@/components/Admin_page/Sidebar/Sidebar";
// import styles from "./id_movie.module.css"
// import Image from "next/image";
// import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
// import { edit } from "@/assets/svgs";
// import { Metadata, ResolvingMetadata } from "next";
// import AdminAPI from "@/app/api/adminAPI";

// type showtimeInterface = {
//     id: string,
//     movie: {title: string},
//     theatreId: string,
//     startDate: string,
//     endDate: string

// };

// type Props = {
//     params: {showtime: string},
//     searchParams: {[key: string]: string}
// }
// export default function ShowtimeDetail_Admin ({params, searchParams}: Props){

//     const id=params.showtime;
//     const [isEditing, setIsEditing]=useState(false);
//     const [showtime, setShowtime] = useState<showtimeInterface>();
//     const [newShowtime, setNewShowtime]=useState<showtimeInterface>(undefined);
//     const fetchShowtime = async () => {
//         const res= await AdminAPI.getShowtime(id);
//         setShowtime(res.data);
//         console.log ("specific showtime: ", res.data)
//     }

//     useEffect(()=> {
//         fetchShowtime()
//         console.log("isedit", isEditing)
//         setNewShowtime({
//             ...showtime!,
 
//         });
//         console.log("neweshowing", newShowtime)
//     },[])

//     const handleChangeTitle = () => {
//         let tempMovie = {
//             ...newShowtime,
//         }
//         setNewShowtime(tempMovie);
//     }


   
// //    console.log("neweshowing", newsshowtime)

//     return(

//         <div className={styles.aa}>
//             {/* <Sidebar/> */}
//             <div className={styles.navbar}><div className={styles.navbar_title}>Showtime: 17/05/2023 Thu Duc </div> </div>
//             <div className={styles.content}>
//                 <div className={styles.edit} onClick={() => {setIsEditing(!isEditing); console.log(isEditing)}}>
//                     <Image src={edit} alt="" height={15} width={15} className={styles.edit_icon}/>
//                     Edit schedule
//                 </div>
//                 {!isEditing? ( 
//                 <div className={styles.infor}>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Movie:</label> 
//                     <input className={styles.input} placeholder="" id="hihi" name="hihi" value = "hihi" type="text" ></input></div>
//                     {/* <div className={styles.title}><label htmlFor="" className={styles.label}>Theatre:</label>
//                     <input className={styles.input} placeholder="" id="" value = {showtime?.}></input></div>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Datetime:</label>
//                     <input className={styles.input} placeholder="" id="" value = {showtime?.}></input></div> */}
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Start of showing: </label>
                
//                     <input className={styles.input} placeholder="" id="" value = {showtime?.startDate}></input></div>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>End of showing:</label>
//                     <input className={styles.input} placeholder="" id="" value = {showtime?.endDate}></input> </div>
//                 </div>
//                 ):( <div className={styles.infor}>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Movie:</label> {showtime?.movie.title}</div>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Theatre:</label></div>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Datetime:</label> {showtime?.movie.title}</div>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>Start of showing: </label>{showtime?.startDate}</div>
//                     <div className={styles.title}><label htmlFor="" className={styles.label}>End of showing:</label> {showtime?.endDate}</div>
//                 </div>)}
               
            
//             </div>
          
//             </div>
//     )
    
// }

// export async function generateMetadata(
//     {params, searchParams}: Props,
//     parent?: ResolvingMetadata,
//     ): Promise<Metadata>{

//         const id= params.showtime;
//         const res = await AdminAPI.getShowtime(id);
//         const showtime= res.data;


//     return {
//         title: showtime.movie.title
//     }

// }

// export async function generateStaticParams() {
    
//     const res = await AdminAPI.getAllShowtime();
//     const showtimes=res.data;
//     console.log("showtimes: ", showtimes)
//     return showtimes.map((showtime: showtimeInterface) => ({slug: showtime.id}))
// }




// {/* "movieId": {
//       "_id": "6444f11de50cc0bfe26b3dfc",
//       "title": "Spider-Man: No Way Home",
//       "image": "https://www.themoviedb.org/t/p/w1280/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
//       "language": [
//         "English"
//       ],
//       "genre": [
//         "Action",
//         "Adventure",
//         "Science Fiction"
//       ],
//       "director": "Jon Watts",
//       "cast": [
//         "Tom Holland",
//         "Zendaya",
//         "Jacob Batalon",
//         "Marisa Tomei",
//         "Alfred Molina",
//         "Willem Dafoe"
//       ],
//       "description": "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
//       "duration": 148,
//       "rating": 8.5,
//       "__v": 0
//     },
//     "theatreId": "6444144c5b1c5239b1d3825c",
//     "startDate": "2023-04-15T17:00:00.000Z",
//     "endDate": "2023-05-06T17:00:00.000Z",
//     "isActive": true,
//     "__v": 0 */}