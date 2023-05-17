"use client"
import styles from "./schedule.module.css";
// import AdminAPI from 
 import { useEffect, useState } from 'react';//
 import React from 'react';
 import Image from 'next/image'
import AdminAPI from "@/app/api/adminAPI";



export default function Schedule_Admin (){

   const [Schedules, take] = useState<any[]>([]); ///
   const Schedule = async () => {
     const ScheduleData = await AdminAPI.getAllShowtime();
     console.log("res: ", ScheduleData);
     take(ScheduleData.data);
     }

     useEffect(()=>{
      Schedule();
  },[])


    return(
      <div  className={styles.lay1}>
        <table className={styles.table}>
  <thead>
    <tr>
      <th>No.</th>
      {/* <th>ID</th> */}
      <th>Name</th>
      <th>Start</th>
      <th>End</th>
      <th>Theatre</th>
      <th>Time</th>
      <th>opt</th>
    </tr>
  </thead>
  <tbody>
  {Schedules.map((schedule, index) => (
    schedule.times.map((timeSlot, timeIndex) => (
      <tr key={`${index}-${timeIndex}`}>
        {timeIndex === 0 ? (
          <>
            <td rowSpan={schedule.times.length}>{index + 1}</td>
            {/* <td rowSpan={schedule.times.length}>{schedule.movieId._id}</td> */}
            <td rowSpan={schedule.times.length}>{schedule.movieId.title}</td>
            <td rowSpan={schedule.times.length}>{schedule.startDate}</td>
            <td rowSpan={schedule.times.length}>{schedule.endDate}</td>
          </>
        ) : null}
     
        <td>{timeSlot[0].theatreId}</td>
        <td>
          <ul>
            {timeSlot[0].time.map((time, index) => (
              <li key={index}>
                <span key={index}>{time} </span>
              </li>
            ))}
          </ul>
        </td>
        <td>opt</td>
      </tr>
    ))
  ))}
</tbody>
</table>



      </div> 
    )
}