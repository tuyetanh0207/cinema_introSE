"use client"
import s from './Film_manager.module.css'
import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import NextIcon from '@mui/icons-material/KeyboardArrowRight'
import BeforeIcon from '@mui/icons-material/KeyboardArrowLeft'
import axios, { AxiosRequestConfig } from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaTimes} from 'react-icons/fa';
import movieAPI from '@/app/api/movieAPI';
import { ResolvingMetadata, Metadata } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import showtimeAPI from '@/app/api/showtimeAPI';


type Props = {
  params: { movie: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
type DateRange= {
  start: string;
  end: string;
};
type Schedule ={
  _id: string;
  showtimeId: string;
  date: string;
  theatre: string;
  time: string[];
  __v: number;
};

type addSchedule ={
  No: number;
  date: string;
  theatre: string;
  time: string[];
};

type stData ={
  id: string;
  movieId: string;
  movieName: string;
  dateRange: DateRange;
  isActive: boolean;
  schedules: Schedule[];
};
type films = {
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
  

export default function Film_manager ({params, searchParams}: Props) {
  // id của phim
      const id=params.movie
      const user=useSelector((state:any)=> state.auth.login.currentUser)
      const token=user?.token
      const [films, setfilms] = useState<films>();

      const stt = async () => {
        const res11 = await movieAPI.getMovie(id,token)
        setfilms(res11.data)
        const title=encodeURIComponent(res11.data.title)
        const ress= await showtimeAPI.searchShowtimes(title)
        const res3= await showtimeAPI.getSchebyShowtime(ress.data[0].showtimeId)
        setAllSche(res3.data)
        setSche(res3.data.slice(0,5))
      }    
      useEffect(()=>{
          stt();
      },[])

      const myFilm: films = {
        _id: "123",
        title: "Example Film",
        image: "example.jpg",
        language: ["English"],
        genre: ["Action", "Adventure"],
        director: "John Doe",
        cast: ["Actor 1", "Actor 2"],
        description: "This is an example film.",
        duration: 120,
        rating: 4.5,
        __v: 1,
      };
      const stt1 = async () => {
        const respond=await movieAPI.postMovie(myFilm,token);
        console.log('respond ne: ', respond)
      }    
      useEffect(()=>{
          stt1();
      },[])


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
      const [isEditing, setIsEditing] = useState(false);
      const [text, setText] = useState<films>();;

      const handleEditClick = () => {
        setText(films);
        setIsEditing(true);
      };
      const handleInputChange1 = (e) => {
        setText(e.target.value);
        films.title=e.target.value;
      };
      const handleInputChange2 = (e) => {
        setText(e.target.value.split(", "));
        films.genre=e.target.value.split(", ");
      };
      const handleInputChange3 = (e) => {
        setText(e.target.value);
        films.director=e.target.value;
      };
      const handleInputChange4 = (e) => {
        setText(e.target.value.split(", "));
        films.cast=e.target.value.split(", ");
      };
      const handleInputChange5 = (e) => {
        setText(e.target.value);
        films.duration=e.target.value;
      };
      const handleInputChange6 = (e) => {
        setText(e.target.value.split(", "));
        films.language=e.target.value.split(", ");
      };
      const handleInputChange7 = (e) => {
        setText(e.target.value);
        films.rating=e.target.value;
      };
      const handleInputChange8 = (e) => {
        setText(e.target.value);
        films.description=e.target.value;
      };

      const handleSaveClick = () => {
        setIsEditing(false);
   
        // axios.delete(urlfilm+'/'+i.toString())
        // .then(response => {
        //   toast.success('Thay đổi thành công!', toastOptions);
        //   axios.post(urlfilm, films[i])
        //     .then(response => {
        //       console.log('Post thành công dữ liệu: ', response.data);
        //       })
        //     .catch(error => {
        //       toast.success('ERROR POST!', toastOptionsError);
        //       return
        //     });
        //   // Xử lý khi xóa thành công
        // })
        // .catch(error => {
        //   // Xử lý khi xóa thất bại hoặc có lỗi
        //   toast.success('ERROR DELETE!', toastOptionsError);
        //   return
        // }); 
      };
   
      //PART 2

      const [allsche, setAllSche] = useState<Schedule[]>([]);
      const [sche, setSche] = useState<Schedule[]>([]);
       
      
        // NúT TRƯỚC
        const handleBefore = () => {
          let page=((allsche.indexOf(sche[0])+1-1)/5)-1
          if (page===-1) {
            console.log("da la trang dau")
            return; 
          }
          console.log('trang truoc: ', page)
          setSche(allsche.slice(0+page*5,5+page*5));
        };
        // Nút SAU
        const handleNext = () => {
          let page=~~(allsche.indexOf(sche[0])/5+1)
          if (page > ~~(allsche.length/5) || (page)*5==allsche.length){
            console.log("da la trang cuoi")
            return; 
          }
          console.log('page sau ne: ', page)
          setSche(allsche.slice(0+page*5,5+page*5));
        };
        



        

        //PART 3
        const [data, setData] = useState<addSchedule[]>([]);
        const handleDeleteRow = (No: number) => {
          setData(prevData => prevData.filter(row => row.No !== No));
        };
      
        const handleChangeField = (id: number, field: keyof addSchedule, value: string) => {
          setData(prevData =>
            prevData.map(row => (row.No === id ? { ...row, [field]: value } : row))
          );
          console.log('Change')
        };  

        //Nút ADD ROW
        const handleAddRow = () => {
          const newRow: addSchedule = {
            date: '', theatre: '', time: [],
            No: data.length + 1
          };
          setData(prevData => [...prevData, newRow]);
        };

        //Nút SAVE
        const handleSaveSche = () => {       
          toast.success('Đã thêm thành công!', toastOptions);
        };
      
    
    return (
    <div className={s.body}>

      <div className={s.title}>
        <div>
          {isEditing ? (
            <input className={s.name} type="text" value={text?.title} />
          ) : (
            <div>
              {
                (!films ) ? 
                <div></div>:<div className={s.name}>{films.title}</div>
              }
            </div>
          )}
        </div>
      </div>


      <div className={s.flex}>
        <div className={s.info}> Title: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.title} onChange={handleInputChange1} />
          ) : (
            <div>
              {
                (!films ) ? 
                <div></div>:<div className={s.data}>{films.title}</div>
              }
            </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Genre: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.genre} onChange={handleInputChange2} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.genre.join(", ")}</div>
            }
          </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Director: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.director} onChange={handleInputChange3} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.director}</div>
            }
          </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Cast: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.cast} onChange={handleInputChange4} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.cast.join(", ")}</div>
            }
          </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Duration: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.duration} onChange={handleInputChange5} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.duration}</div>
            }
          </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Language: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.language} onChange={handleInputChange6} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.language.join(", ")}</div>
            }
          </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Rating: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.rating} onChange={handleInputChange7} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.rating}</div>
            }
          </div>
          )}
        </div>
      </div>

      <div className={s.flex}>
        <div className={s.info}> Description: </div>
        <div>
          {isEditing ? (
            <input className={s.data} type="text" value={text?.description} onChange={handleInputChange8} />
          ) : (
            <div>
            {
              (!films ) ? 
              <div></div>:<div className={s.data}>{films.description}</div>
            }
          </div>
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
                <TableCell  style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>ID</TableCell>
                <TableCell  style={{ width: '100px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Date</TableCell>
                <TableCell  style={{ width: '100px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Theatre</TableCell>
                <TableCell  style={{ width: '200px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Time</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sche.map(row => (
                <TableRow key={row._id}>
                  <TableCell style={{textAlign: 'center'}}>{row._id}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.date}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.theatre}</TableCell>
                  <TableCell style={{textAlign: 'center'}}>{row.time.join(", ")}</TableCell>
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
            <TableCell style={{ width: '300px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Date</TableCell>
            <TableCell  style={{ width: '300px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Theatre</TableCell>
            <TableCell  style={{ width: '300px', fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>Time</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(row => (
            <TableRow key={row.No}>
              <TableCell style={{textAlign: 'center'}}>{row.No}</TableCell>

              <TableCell>
                <TextField 
                  value={row.date}
                  onChange={e => handleChangeField(row.No, 'date', e.target.value)}
                />
              </TableCell>
              
              <TableCell>
              <TextField
                  value={row.theatre}
                  onChange={e => handleChangeField(row.No, 'theatre', e.target.value)}
                />
              </TableCell>
                
                <TableCell>
                <TextField
                  value={row.time}
                  onChange={e => handleChangeField(row.No, 'time', e.target.value)}
                />
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



export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.movie;
 
  const res= await movieAPI.getMovie(id) ;
  const movie=res.data  
  return {
  title: movie.title

  };
}

export async function generateStaticParams() {
  const res= await movieAPI.getAllMovies();
  const movies=res.data
  return movies.map((movie:any) => ({
    slug: movie._id,
  }));
}