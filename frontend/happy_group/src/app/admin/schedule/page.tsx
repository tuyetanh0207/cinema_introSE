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
  const maxtheatre=10
  const [newsch_movieID, setNewsch_movieID] = useState("")
  const [newsch_startDate, setNewsch_startDate]= useState("");
  const [newsch_endDate, setNewsch_endDate]= useState("");
  const [newsch_times, setNewsch_times]= useState([]);
  const [newnumtimes, setNewNumTimes] = useState(0)
  const [newtimes, setNewTimes] = useState([1, 2,3,4 ])
  const [newTheatre, setNewTheatre] = useState([])
  const [newNumTime, setNewNumTime] = useState<any[]>([3,3])
  const [newTime, setNewTime] = useState<any[][]>([[1,2,3], [2,3,4]])
  // const [times, setTimes] = useState([])
  const handleAddScheduleButton = () => {
    setIsAddingSchedule(1);
   
  }
  const handleSaveAddingButton = () => {

  }
  const handleIncreaseDays=()=>{
    console.log("day", newnumtimes)
    setNewNumTimes(newnumtimes+1);
    let temptimes= newtimes;
    temptimes.push(1)
    setNewTimes(temptimes)
    console.log("day affter", newnumtimes)
  }
  const handleIncreaseTime=(idxtimes: number) =>{
    // const a= document.getElementById('ll')
    // var linknode = document.createElement("li");

    // a?.appendChild(linknode)
    console.log("day", newNumTime[idxtimes])
    console.log("day 1", newTime[idxtimes])

    let tempnumtime=newNumTime
    let temptime=newTime
    tempnumtime[idxtimes]=newNumTime[idxtimes]+1
    temptime[idxtimes].push(1)
    setNewTime(temptime)
    setNewNumTime(tempnumtime)
    console.log("day aff", newNumTime[idxtimes])
    console.log("day 1 af", newTime[idxtimes])
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

      {
        newtimes.map((etimes, idxtimes)=>(
          <tr key="">
            {
              true?(
            <>
              {/* stt */}
              <td ></td>

              {/* name */}
              <td >
                {/* <label htmlFor="">Choose movie</label> */}
                <select name="movies" id="movies">
                  {movieList.map((movie: any)=> (
                    <option key = {movie}>{ movie.title}</option>
                  ))}
                </select>
              </td>
              {/* start date */}
              <td ><input className={styles.input} value={newsch_startDate} onChange={(e)=>handleStartDateChange( e.target.value)} type="text"/></td>
              {/* end date */}
              <td ><input  className={styles.input} value={newsch_endDate} onChange={(e)=>handleEndDateChange( e.target.value)} type="text"/></td>
            </>
              ):null}
              {/* date */}

                  <td >
                    <input value={etimes} onChange={(e)=> handleDayRowChange(idxtimes, e.target.value)} className={styles.input} type="text"/>   
                  </td>
                  <td className= {styles.add_sheet}>
                    <select name="theatres" id="theatres">
                            {theatreList.map((theatre: any)=> (
                              <option key = {theatre}>{ theatre.name}</option>
                            ))}
                          </select>
                          {idxtimes!==newtimes.length?(<></>):(
                            < Image src={add_ad}
                            onClick={()=>handleIncreaseDays()}
                            alt="" className={styles.add_row_img} width={20} height={20}/>
                          )}
                   
                  </td>
  
          
          {/* < Image src={add_ad} alt="" className={styles.add_row_img} width={20} height={20}/> */}
          <td className= {styles.add_sheet}> 
         
          <input type="text"/> 
          <Image src={add_ad} 
          onClick={()=>handleIncreaseTime(idxtimes)}
          alt="" className={styles.add_row_img} width={20} height={20}/>
            <ul id ="ll">
               {newTime[idxtimes]?.map((etime, idxtime) => (
                <li key={idxtime} id={`${idxtimes}-${idxtime}`}>
                  <input value={etime} onClick={(e)=> handleTimeChange(idxtimes, idxtime, e.target.value)} key={idxtime}/>
                </li>
              ))} 
        
         
            </ul>
          </td>
          <td><button onClick={handleSaveAddingButton}>Save</button></td>
        </tr>
        )
        )
      }
     
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