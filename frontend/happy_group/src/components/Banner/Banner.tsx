import styles from './Banner.module.css'
import { pic1,pic2,pic3,pic4} from '@/assets/imgs'
import { right_arrow,left_arrow } from '@/assets/svgs'
import Image from 'next/image'
import { HtmlHTMLAttributes, useEffect, useState } from 'react';


  

export default function Banner () {

    const Bannerpic = [
        pic1,
        pic2,
        pic3,
        pic4,
    ];

    // let counter = 1;
    // setInterval(function() {
    //   const radio = document.getElementById('radio' + counter) as HTMLInputElement;
    //   if (radio !== null) {
    //     radio.checked = true;
    //   }
    //   counter++;
    //   if (counter > 4) {
    //     counter = 1;
    //   }      
    // }, 5000);
    
  

    return (
        <div className={styles.Banner}>

        {/* slides begin */}
            <div className={styles.slides}>

            {/* btn begin*/}
                {Bannerpic.map((_, index) => (<input id={styles[`radio${index+1}`]} type={"radio"} name="radio-btn" key={index}/>))}
            {/* btn end*/}

            {/* <!--image begin */}
                {Bannerpic.map((image, index) => (<div className={styles.slide} id={index === 0 ? styles.first : ''} key={index}><Image src={image} alt={''}  /></div>))}
            {/* <!--image end */}

            {/* auto begin*/}
                <div className={styles.au_nav}>
                    {Bannerpic.map((_, index) => (<div className={styles[`auto_btn${index+1}`]} key={index}/>))}                  
                </div> 
            {/* auto end*/}

            {/* change btn begin */}
                <div className={styles.change_btn}id={styles.left}>
                    <Image className={styles.left_btn} src={left_arrow} alt=''></Image>
                </div>
                <div className={styles.change_btn} id={styles.right}>
                    <Image className={styles.right_btn} src={right_arrow} alt=''></Image>
                </div>
            {/* change btn end */}

            </div>
        {/* slides end*/}

        {/* manual begin*/}
            <div className={styles.manual_nav}>
                {Bannerpic.map((_, index) => (<label htmlFor={styles[`radio${index+1}`]} className={styles.manual_btn} key={index}></label>))}
            </div>
        {/* manual end*/}

        {/* Form begin */}
            <div className={styles.opt}>
                

            </div>
        {/* Form end */}

        </div>

    )
}