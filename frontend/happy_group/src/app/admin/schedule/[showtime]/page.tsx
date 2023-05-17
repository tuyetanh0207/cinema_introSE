"use client"
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Admin_page/Sidebar/Sidebar";
import styles from "./id_movie.module.css"
import Image from "next/image";
import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
import { edit } from "@/assets/svgs";
import { Metadata, ResolvingMetadata } from "next";
import AdminAPI from "@/app/api/adminAPI";

type showtimeInterface = {
    id: string,
    movie: {title: string},
    theatreId: string,
    startDate: string,
    endDate: string

};

type Props = {
    params: {showtime: string},
    searchParams: {[key: string]: string}
}
export default function ShowtimeDetail_Admin ({params, searchParams}: Props){

    const id=params.showtime;
    const [isEditing, setIsEditing]=useState(false);
    const [showtime, setShowtime] = useState<showtimeInterface>();
    const [newShowtime, setNewShowtime]=useState<showtimeInterface>(undefined);
    const fetchShowtime = async () => {
        const res= await AdminAPI.getShowtime(id);
        setShowtime(res.data);
        console.log ("specific showtime: ", res.data)
    }

    useEffect(()=> {
        fetchShowtime()
        console.log("isedit", isEditing)
        setNewShowtime({
            ...showtime!,
 
        });
        console.log("neweshowing", newShowtime)
    },[])

    const handleChangeTitle = () => {
        let tempMovie = {
            ...newShowtime,
        }
        setNewShowtime(tempMovie);
    }


   
//    console.log("neweshowing", newsshowtime)

    return(

        <div className={styles.aa}>
            {/* <Sidebar/> */}
            <div className={styles.navbar}><div className={styles.navbar_title}>Showtime: 17/05/2023 Thu Duc </div> </div>
            <div className={styles.content}>
                <div className={styles.edit} onClick={() => {setIsEditing(!isEditing); console.log(isEditing)}}>
                    <Image src={edit} alt="" height={15} width={15} className={styles.edit_icon}/>
                    Edit schedule
                </div>
                {!isEditing? ( 
                <div className={styles.infor}>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Movie:</label> 
                    <input className={styles.input} placeholder="" id="hihi" name="hihi" value = "hihi" type="text" ></input></div>
                    {/* <div className={styles.title}><label htmlFor="" className={styles.label}>Theatre:</label>
                    <input className={styles.input} placeholder="" id="" value = {showtime?.}></input></div>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Datetime:</label>
                    <input className={styles.input} placeholder="" id="" value = {showtime?.}></input></div> */}
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Start of showing: </label>
                
                    <input className={styles.input} placeholder="" id="" value = {showtime?.startDate}></input></div>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>End of showing:</label>
                    <input className={styles.input} placeholder="" id="" value = {showtime?.endDate}></input> </div>
                </div>
                ):( <div className={styles.infor}>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Movie:</label> {showtime?.movie.title}</div>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Theatre:</label></div>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Datetime:</label> {showtime?.movie.title}</div>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>Start of showing: </label>{showtime?.startDate}</div>
                    <div className={styles.title}><label htmlFor="" className={styles.label}>End of showing:</label> {showtime?.endDate}</div>
                </div>)}
               
            
            </div>
          
            </div>
    )
    
}

export async function generateMetadata(
    {params, searchParams}: Props,
    parent?: ResolvingMetadata,
    ): Promise<Metadata>{

        const id= params.showtime;
        const res = await AdminAPI.getShowtime(id);
        const showtime= res.data;


    return {
        title: showtime.movie.title
    }

}

export async function generateStaticParams() {
    
    const res = await AdminAPI.getAllShowtime();
    const showtimes=res.data;
    console.log("showtimes: ", showtimes)
    return showtimes.map((showtime: showtimeInterface) => ({slug: showtime.id}))
}




{/* "movieId": {
      "_id": "6444f11de50cc0bfe26b3dfc",
      "title": "Spider-Man: No Way Home",
      "image": "https://www.themoviedb.org/t/p/w1280/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
      "language": [
        "English"
      ],
      "genre": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "director": "Jon Watts",
      "cast": [
        "Tom Holland",
        "Zendaya",
        "Jacob Batalon",
        "Marisa Tomei",
        "Alfred Molina",
        "Willem Dafoe"
      ],
      "description": "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "duration": 148,
      "rating": 8.5,
      "__v": 0
    },
    "theatreId": "6444144c5b1c5239b1d3825c",
    "startDate": "2023-04-15T17:00:00.000Z",
    "endDate": "2023-05-06T17:00:00.000Z",
    "isActive": true,
    "__v": 0 */}