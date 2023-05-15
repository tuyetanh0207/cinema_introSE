"use client"
import styles from './Buy_ticket.module.css'
import {food1,food2,food3,food4,picS1} from '@/assets/imgs'
import Image from 'next/image'
import { HtmlHTMLAttributes, useEffect, useState,useRef } from 'react';//
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Buy_ticket (){



    const quantity2DRef = useRef(0);
    const price2DRef = useRef(null);
    const total2DRef = useRef(null);

    const quantity3DRef = useRef(null);
    const price3DRef = useRef(null);
    const total3DRef = useRef(null);

    const quantityCPRef = useRef(null);
    const priceCPRef = useRef(null);
    const totalCPRef = useRef(null);


    const quantityCB1Ref = useRef(null);
    const priceCB1Ref = useRef(null);
    const totalCB1Ref = useRef(null);

    const quantityCB2Ref = useRef(null);
    const priceCB2Ref = useRef(null);
    const totalCB2Ref = useRef(null);

    const quantityCB3Ref = useRef(null);
    const priceCB3Ref = useRef(null);
    const totalCB3Ref = useRef(null);

    const quantityCB4Ref = useRef(null);
    const priceCB4Ref = useRef(null);
    const totalCB4Ref = useRef(null);

    const billRef = useRef(null);

  function update2DTotal() {
    const quantity = quantity2DRef.current?.value;
    const price = price2DRef.current?.value;
    const total = quantity * price;
    total2DRef.current.value = total;
  }

  function update3DTotal() {
    const quantity = quantity3DRef.current?.value;
    const price = price3DRef.current?.value;
    const total = quantity * price;
    total3DRef.current.value = total;
  }

  function updateCPTotal() {
    const quantity = quantityCPRef.current?.value;
    const price = priceCPRef.current?.value;
    const total = quantity * price;
    totalCPRef.current.value = total;
  }

  function updateCB1Total() {
    const quantity = quantityCB1Ref.current?.value;
    const price = priceCB1Ref.current?.value;
    const total = quantity * price;
    totalCB1Ref.current.value = total;
  }

  function updateCB2Total() {
    const quantity = quantityCB2Ref.current?.value;
    const price = priceCB2Ref.current?.value;
    const total = quantity * price;
    totalCB2Ref.current.value = total;
  }

  function updateCB3Total() {
    const quantity = quantityCB3Ref.current?.value;
    const price = priceCB3Ref.current?.value;
    const total = quantity * price;
    totalCB3Ref.current.value = total;
  }

  function updateCB4Total() {
    const quantity = quantityCB4Ref.current?.value;
    const price = priceCB4Ref.current?.value;
    const total = quantity * price;
    totalCB4Ref.current.value = total;
  }

  function updateBill() {
    const total2D = parseFloat(total2DRef.current?.value) || 0;
    const total3D = parseFloat(total3DRef.current?.value) || 0;
    const totalCP = parseFloat(totalCPRef.current?.value) || 0;
    const totalCB1 = parseFloat(totalCB1Ref.current?.value) || 0;
    const totalCB2 = parseFloat(totalCB2Ref.current?.value) || 0;
    const totalCB3 = parseFloat(totalCB3Ref.current?.value) || 0;
    const totalCB4 = parseFloat(totalCB4Ref.current?.value) || 0;
    const billTotal = total2D + total3D + totalCP + totalCB1 + totalCB2 + totalCB3 + totalCB4;
    billRef.current.value = billTotal;
  }

  // const router = useRouter();
  // const {movie,cinema} = router.query;


  
  

  useEffect(() => {
    update2DTotal();
    update3DTotal();
    updateCPTotal();
    updateCB1Total();
    updateCB2Total();
    updateCB3Total();
    updateCB4Total();
    updateBill();
}, []);

return(
  <>
        <div className={styles.lay1}>
            <div className={styles.lay2}> 
                <div className={styles.content}>
                    <h3 className={styles.content1}>Loại vé</h3>
                    <h3 className={styles.content2}>Số lượng</h3>
                    <h3 className={styles.content2}>Giá (VNĐ)</h3>  
                    <h3 className={styles.content2}>Tổng (VNĐ)</h3>
                </div>
                <div className={styles.ticketBox}>
                <div className={styles.opt}>    
                        <h3 className={styles.content1}>Người lớn<br/><sup><small>2D</small></sup></h3>
                        <input ref={quantity2DRef} onChange={() => {update2DTotal();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                        <input ref={price2DRef} className={styles.price}type="number"name="quantity"  defaultValue={80000} readOnly/>
                        <input  ref={total2DRef} onChange={update2DTotal} className={styles.outputNum} type="number" name="quantity" readOnly/>
                    </div>
                    <div className={styles.opt}>    
                        <h3 className={styles.content1}>Người lớn<br/><sup><small>3D</small></sup></h3>
                        <input ref={quantity3DRef} onChange={() => {update3DTotal();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                        <input ref={price3DRef} className={styles.price}type="number"name="quantity"  defaultValue={100000} readOnly/>
                        <input  ref={total3DRef} onChange={update3DTotal} className={styles.outputNum} type="number" name="quantity" readOnly/>
                    </div>
                    <div className={styles.opt}>    
                        <h3 className={styles.content1}>Người lớn<br/><sup><small>2D-bao gồm 2 vé</small></sup></h3>
                        <input ref={quantityCPRef} onChange={() => {updateCPTotal();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                        <input ref={priceCPRef} className={styles.price}type="number"name="quantity"  defaultValue={120000} readOnly/>
                        <input  ref={totalCPRef} onChange={updateCPTotal} className={styles.outputNum} type="number" name="quantity" readOnly/>
                    </div>


                </div>

                <div className={styles.content}>
                    <h3 className={styles.content1}>Bắp/Nước</h3>
                    <h3 className={styles.content2}>Số lượng</h3>
                    <h3 className={styles.content2}>Giá (VNĐ)</h3>
                    <h3 className={styles.content2}>Tổng (VNĐ)</h3>
                </div>
                <div className={styles.food}>
                    <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food3} alt=""/>
                        <h3>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h3>
                        </div>
                        <div className={styles.content4}>
                          <input ref={quantityCB1Ref} onChange={() => {updateCB1Total();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                          <input ref={priceCB1Ref} className={styles.price}type="number"name="quantity"  defaultValue={50000} readOnly/>
                          <input  ref={totalCB1Ref} onChange={updateCB1Total} className={styles.outputNum} type="number" name="quantity" readOnly/>
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food1} alt=""/>
                        <h3>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack </small></sup></h3>
                        </div>
                        <div className={styles.content4}>
                          <input ref={quantityCB2Ref} onChange={() => {updateCB2Total();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                          <input ref={priceCB2Ref} className={styles.price}type="number"name="quantity"  defaultValue={90000} readOnly/>
                          <input  ref={totalCB2Ref} onChange={updateCB2Total} className={styles.outputNum} type="number" name="quantity" readOnly/>
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food4} alt=""/>
                        <h3>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h3>
                        </div>
                        <div className={styles.content4}>
                          <input ref={quantityCB3Ref} onChange={() => {updateCB3Total();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                          <input ref={priceCB3Ref} className={styles.price}type="number"name="quantity"  defaultValue={90000} readOnly/>
                          <input  ref={totalCB3Ref} onChange={updateCB3Total} className={styles.outputNum} type="number" name="quantity" readOnly/>
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food2} alt=""/>
                        <h3>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack</small></sup></h3>
                        </div>
                        <div className={styles.content4}>
                          <input ref={quantityCB4Ref} onChange={() => {updateCB4Total();updateBill();}} className={styles.inputNum} type="number" name="quantity" min="0" max="100" defaultValue={0}/>
                          <input ref={priceCB4Ref} className={styles.price}type="number"name="quantity"  defaultValue={100000} readOnly/>
                          <input  ref={totalCB4Ref} onChange={updateCB4Total} className={styles.outputNum} type="number" name="quantity" readOnly/>
                        </div>
                    
                </div>

                </div>


            </div>
            <div className={styles.mvDetails}>
                <Image src={picS1} alt=''></Image>
                <h5>tên: phim</h5>
                <h5>Rạp : Linh Trung, Thủ đức</h5>
                <h5>Suất chiếu : 12:00 | Thứ năm, 23/03/2023</h5>    
                <div className={styles.cost}>
                  <h5>Tổng: </h5>
                  <input ref={billRef} onChange={updateBill}  type="number" name="quantity" defaultValue={0} readOnly/>
                </div>
                
                <Link href=''>
                  <button>Tiếp theo</button>
                </Link>
            </div>
        </div>
        </>
)
}










