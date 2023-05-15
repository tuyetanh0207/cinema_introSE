"use client"
import styles from "./schedule.module.css"
import AdminAPI from "@/app/api/AdminAPI";
 import { useEffect, useState } from 'react';//
 import React from 'react';
 import Image from 'next/image'


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
      <th>ID</th>
      <th>Name</th>
      <th>Cinesta</th>
      <th>Room</th> 
      <th>Date</th>
      <th>Start</th>
      <th>End</th>
      <th>opt</th>
    </tr>
  </thead>
  <tbody>
    {Schedules.map((schedule, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{schedule.movieId._id}</td>
        <td>{schedule.movieId.title}</td>
        <td>{schedule.cinesta}</td>
        <td>{schedule.room}</td>
        <td>{schedule.date}</td>
        <td>{schedule.startDate}</td>
        <td>{schedule.endDate}</td>
        <td></td>
      </tr>
    ))}
  </tbody>
</table>



      </div> 
    )
}