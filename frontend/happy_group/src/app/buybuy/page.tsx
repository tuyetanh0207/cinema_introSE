"use client"
import styles from './Buy_ticket.module.css'
import {food1,food2,food3,food4,picS1} from '@/assets/imgs'
import Image from 'next/image'
import { HtmlHTMLAttributes, useEffect, useState,useRef } from 'react';//
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { time } from 'console';


export default function Buybuy (){



return(
  <>
        <div className={styles.lay1}>
            <div className={styles.lay2}> 
                <div className={styles.content}>
                    <h5 className={styles.content1}>Loại vé</h5>
                    <h5 className={styles.content2}>Số lượng</h5>
                    <h5 className={styles.content2}>Giá (VNĐ)</h5>  
                    <h5 className={styles.content2}>Tổng (VNĐ)</h5>
                </div>
                <div className={styles.ticketBox}>
                <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>2D</small></sup></h5>
                        <div  className={styles.inputNum}   >{}</div>
                        <div className={styles.price}  ></div>
                        <div  className={styles.outputNum}    ></div>
                    </div>
                    <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>3D</small></sup></h5>
                        <div className={styles.inputNum}    ></div>
                        <div className={styles.price}   ></div>
                        <div   className={styles.outputNum}    ></div>
                    </div>
                    <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>2D-bao gồm 2 vé</small></sup></h5>
                        <div className={styles.inputNum}   ></div>
                        <div className={styles.price}  ></div>
                        <div   className={styles.outputNum}    ></div>
                    </div>


                </div>

                <div className={styles.content}>
                    <h5 className={styles.content1}>Bắp/Nước</h5>
                    <h5 className={styles.content2}>Số lượng</h5>
                    <h5 className={styles.content2}>Giá (VNĐ)</h5>
                    <h5 className={styles.content2}>Tổng (VNĐ)</h5>
                </div>
                <div className={styles.food}>
                    <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food3} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}   defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={50000} />
                          <div    className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food1} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack </small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}    defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={90000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food4} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div className={styles.divNum}     defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={90000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food2} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}     defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={100000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                </div>


            </div>
            <div className={styles.mvDetails}>
                <Image src={picS1} alt=''></Image>
                {/* <h5>Tên: {movieId}</h5> */}
                {/* <h5>Rạp : {theatreId}</h5> */}
                <h5>Suất chiếu : {} | {}</h5>    
                <div className={styles.cost}>
                  <h5>Tổng: </h5>
                  <div      defaultValue={0} />
                </div>
                
                <Link href=''>
                  Tiếp Theo
                </Link>
            </div>
        </div>
        </>
)
}










