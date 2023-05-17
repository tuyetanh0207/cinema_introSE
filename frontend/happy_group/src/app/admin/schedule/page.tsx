import styles from "./schedule.module.css"
import React from "react"


export default function Schedule_Admin (){


    return(
<table className={styles.table}>
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
   <tr>
      <td>01</td>
      <td>S00001</td>
      <td>Conan</td>
      <td>Thủ Đức</td>
      <td>06</td>
      <td>01/04/2022</td>
      <td>13:00</td>
      <td>15:00</td>
      <td></td>
   </tr>
   <tr>
      <td><input type="number" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="number" /></td>
      <td><input type="date" /></td>
      <td><input type="time" /></td>
      <td><input type="time" /></td>
      <td></td>
   </tr>

</table>


    )
}