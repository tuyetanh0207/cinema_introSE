import s from './Film_manager.module.css'
import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import NextIcon from '@mui/icons-material/KeyboardArrowRight'
import BeforeIcon from '@mui/icons-material/KeyboardArrowLeft'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaTimes} from 'react-icons/fa';

interface DataRow {
    No: number;
    ID: string;
    Name: string;
    Cinesta: string;
    Room: string;
    Date: Date | number;
    Start: Date | number;
    End: Date | number;
  }
interface films{
  VN: string;
  IN: string;
  ID: string;
  S: string;
  E: string;
  G: string;
  D: string;
  L: string;
  id: number;
}

export default function Film_manager () {
    
      const urlsche='https://643d49466afd66da6af2b0df.mockapi.io/api/schedules'
      const urlfilm='https://643d49466afd66da6af2b0df.mockapi.io/api/film'
      const toastOptionsError = {
        position: 'top-center',
        autoClose: 2000, // Thời gian tự động đóng thông báo (ms)
        hideProgressBar: true, // Ẩn thanh tiến trình
        closeOnClick: true, // Đóng thông báo khi nhấp chuột vào nó
        pauseOnHover: true, // Tạm dừng tự động đóng thông báo khi di chuột qua
        draggable: true, // Có thể kéo thông báo
        progress: undefined, // Tùy chọn thanh tiến trình tùy chỉnh (ví dụ: progress: <MyProgressBar />)
        style: {
          color: 'black',
          backgroundColor: '#FFAEA2',
          fontWeight: '500',
        },
        icon: <FaTimes style={{color:'red'}}/>
        
      };
      const toastOptions = {
        position: 'top-center',
        style: {
          color: 'black',
          backgroundColor: '#8BFF92',
        },
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true, // 
        pauseOnHover: true, // 
        draggable: true, // 
        progress: undefined, 
      };

      //PART 1
      const i=1; //film index
      const [films, setfilm] = useState<films[]>([]);
      const mov = async () => 
      {
        const filmsData = await axios.get(urlfilm);
        setfilm(filmsData.data);
      }    
      useEffect(()=>{
          mov();
      },[])

      const [isEditing, setIsEditing] = useState(false);
      const [text, setText] = useState<films>();;
    
      const handleEditClick = () => {
        setText(films[i]);
        setIsEditing(true);
      };

      const handleInputChange1 = (e) => {
        setText(e.target.value);
        films[i].VN=e.target.value;
      };
      const handleInputChange2 = (e) => {
        setText(e.target.value);
        films[i].IN=e.target.value;
      };
      const handleInputChange3 = (e) => {
        setText(e.target.value);
        films[i].ID=e.target.value;
      };
      const handleInputChange4 = (e) => {
        setText(e.target.value);
        films[i].S=e.target.value;
      };
      const handleInputChange5 = (e) => {
        setText(e.target.value);
        films[i].E=e.target.value;
      };
      const handleInputChange6 = (e) => {
        setText(e.target.value);
        films[i].G=e.target.value;
      };
      const handleInputChange7 = (e) => {
        setText(e.target.value);
        films[i].D=e.target.value;
      };
      const handleInputChange8 = (e) => {
        setText(e.target.value);
        films[i].L=e.target.value;
      };

      const handleSaveClick = () => {
        setIsEditing(false);
   
        axios.delete(urlfilm+'/'+i.toString())
        .then(response => {
          toast.success('Thay đổi thành công!', toastOptions);
          axios.post(urlfilm, films[i])
            .then(response => {
              console.log('Post thành công dữ liệu: ', response.data);
              })
            .catch(error => {
              toast.success('ERROR POST!', toastOptionsError);
              return
            });
          // Xử lý khi xóa thành công
        })
        .catch(error => {
          // Xử lý khi xóa thất bại hoặc có lỗi
          toast.success('ERROR DELETE!', toastOptionsError);
          return
        }); 
      };
   
      //PART 2
        const [allschedules, setAllSchedules] = useState<DataRow[]>([]);
        const [schedules, setSchedules] = useState<DataRow[]>([]);
        const sc = async () => 
        {
          const scheData = await axios.get(urlsche);
          for (let i=0; i < scheData.data.length ; i++){
            scheData.data[i].Start=new Date(Number(scheData.data[i].Start)*1000)
            scheData.data[i].Date=new Date(Number(scheData.data[i].Date)*1000)
            scheData.data[i].End=new Date(Number(scheData.data[i].End)*1000)
          }
          setSchedules(scheData.data.slice(0,5));
          setAllSchedules(scheData.data)
        }
        useEffect(()=>{
            sc();
        },[])
        
      
        // NúT TRƯỚC
        const handleBefore = () => {
          let page=((schedules[0].No-1)/5)-1
          if (page===-1) {
            return; 
          }
          setSchedules(allschedules.slice(0+page*5,5+page*5));
        };
        // Nút SAU
        const handleNext = () => {
          let page=~~(schedules[0].No/5+1)
          if (page > ~~(allschedules.length/5) || (page)*5==allschedules.length){
            return; 
          }
          setSchedules(allschedules.slice(0+page*5,5+page*5));
        };
        

        //PART 3
        const [data, setData] = useState<DataRow[]>([]);
        const handleDeleteRow = (No: number) => {
          setData(prevData => prevData.filter(row => row.No !== No));
        };
      
        const handleChangeField = (id: number, field: keyof DataRow, value: string) => {
          setData(prevData =>
            prevData.map(row => (row.No === id ? { ...row, [field]: value } : row))
          );
          console.log('Change')
        };  

        //Nút ADD ROW
        const handleAddRow = () => {
          const newRow: DataRow = { No: data.length + 1, ID: '', Name: '', Cinesta: '', Room: '', Date: new Date(), Start: new Date(), End: new Date()};
          setData(prevData => [...prevData, newRow]);
        };

        //Nút SAVE
        const handleSaveSche = () => {       
          for (let i = 0; i < data.length; i++) {
            const newdata=data[i]
            if(newdata.Cinesta=='' || newdata.ID=='' || newdata.Name=='' || newdata.Room=='')
            {
              toast.success('ERROR! Có ô chưa điền giá trị', toastOptionsError);
            }
            else
            {
              newdata.Date=Math.floor( newdata.Date.getTime() / 1000)
              newdata.End=Math.floor( newdata.End.getTime() / 1000)
              newdata.Start=Math.floor( newdata.Start.getTime() / 1000)
              handleDeleteRow(i+1)
              axios.post(urlsche, newdata)
            .then(response => {
              toast.success('Đã thêm thành công!', toastOptions);
              console.log('Post thành công dữ liệu: ', response.data);
              })
            .catch(error => {
              toast.success('ERROR POST!', toastOptionsError);
            });}
          }
        };
      
    
    return (
    <div className={s.body}>

      <div className={s.title}>
          <div className={s.name}> Conan Movie 26: Tau Ngam Sat Den </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Vietnamese Name: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.VN} onChange={handleInputChange1} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.VN} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> International Name: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.IN} onChange={handleInputChange2} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.IN} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> ID: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.ID} onChange={handleInputChange3} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.ID} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Start: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.S} onChange={handleInputChange4} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.S} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> End: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.E} onChange={handleInputChange5} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.E} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Genre: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.G} onChange={handleInputChange6} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.G} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Description: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.D} onChange={handleInputChange7} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.D} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Length: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text.L} onChange={handleInputChange8} />
          ) : (
            <div>{films.map((film:any,index:number)=> {
              if (index===i)
              return(
                      <div className={s.data}> {film.L} </div>
                  )
              }
              )}</div>
          )}
        </div>
      </div>
   
        <Button variant="contained" startIcon={<EditIcon />} onClick={handleEditClick}>
          Edit
        </Button>
        <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveClick}>
        Save
        </Button>

        <div className={s.schedules}> All schedules </div>
        <TableContainer component={Paper}>
          <Table>
            
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '20px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>No</TableCell>
                <TableCell  style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>ID</TableCell>
                <TableCell  style={{ width: '300px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Name</TableCell>
                <TableCell  style={{ width: '100px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Cinesta</TableCell>
                <TableCell  style={{ width: '100px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Room</TableCell>
                <TableCell  style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Date</TableCell>
                <TableCell style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Start</TableCell>
                <TableCell style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>End</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {schedules.map(row => (
                <TableRow key={row.No}>
                  <TableCell style={{textAlign: 'center'}}>{row.No}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.ID}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.Name}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.Cinesta}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.Room}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.Date.toString()}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.Start.toString()}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.End.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button className= {s.edit} variant="contained" startIcon={<BeforeIcon />} onClick={handleBefore}>
          BEFORE
        </Button>
        <Button className= {s.edit} variant="contained" startIcon={<NextIcon />} onClick={handleNext}>
        NEXT
        </Button>

        <div className={s.schedules}> Add schedules </div>
        <TableContainer component={Paper}>
      <Table>
        
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '20px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>No</TableCell>
            <TableCell  style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>ID</TableCell>
            <TableCell  style={{ width: '300px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Name</TableCell>
            <TableCell  style={{ width: '100px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Cinesta</TableCell>
            <TableCell  style={{ width: '100px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Room</TableCell>
            <TableCell  style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Date</TableCell>
            <TableCell style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Start</TableCell>
            <TableCell style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>End</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(row => (
            <TableRow key={row.No}>
              <TableCell>{row.No}</TableCell>
              <TableCell>
                <TextField 
                  value={row.ID}
                  onChange={e => handleChangeField(row.No, 'ID', e.target.value)}
                />
              </TableCell>
              
              <TableCell>
              <TextField
                  value={row.Name}
                  onChange={e => handleChangeField(row.No, 'Name', e.target.value)}
                />
              </TableCell>
                
                <TableCell>
                <TextField
                  value={row.Cinesta}
                  onChange={e => handleChangeField(row.No, 'Cinesta', e.target.value)}
                />
                </TableCell>

                <TableCell>
                <TextField
                  value={row.Room}
                  onChange={e => handleChangeField(row.No,'Room', e.target.value)}
                />
                </TableCell>

                <TableCell>
                  <input className={s.input} type="date"  min="2023-06-01" max="2024-06-30"/>
                </TableCell>

                <TableCell>
                  <input className={s.input} type="date"  min="2023-06-01" max="2024-06-30"/>
                </TableCell>

                <TableCell>
                  <input className={s.input} type="date"  min="2023-06-01" max="2024-06-30"/>
                </TableCell>

              <TableCell>
                <IconButton onClick={() => handleDeleteRow(row.No)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddRow}>
        Add Row
      </Button>

      <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSaveSche}>
        Save
      </Button>
    </TableContainer>
      <ToastContainer />
    </div>
    );
}