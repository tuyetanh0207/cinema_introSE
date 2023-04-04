import styles from './Banner.module.css'
import { pic1,pic2,pic3,pic4} from '@/assets/imgs'
import Image from 'next/image'

const  bannerPic= [
    { src: pic1, alt:'' },
    { src: pic2, alt:'' },
    { src: pic3, alt:'' },
    { src: pic4, alt:'' },
    { src: pic1, alt:'' },
    //... nếu có nhiều hơn 4 ảnh thì thêm vào đây
  ];
  

export default function Banner () {

    return (
        <div className={styles.Banner}>
            <div className={styles.slides}>

            {/* btn*/}
                <input id={styles.radio1} type={"radio"} name="radio-btn"/>
                <input id={styles.radio2} type={"radio"} name="radio-btn"/>
                <input id={styles.radio3} type={"radio"} name="radio-btn"/>
                <input id={styles.radio4} type={"radio"} name="radio-btn"/>

            {/* btn*/}

            {/* <!--image--> */}

                <div className={styles.slide} id={styles.first}>
                    <Image src={pic1} alt={''}  />
                </div>
                <div className={styles.slide}>
                    <Image src={pic2} alt={''}  />
                </div>
                <div className={styles.slide}>
                    <Image src={pic3} alt={''}  />
                </div>
                <div className={styles.slide}>
                    <Image src={pic4} alt={''}  />
                </div>


            {/* <!--image--> */}

            {/* auto */}
                <div className={styles.au_nav}>
                    <div className={styles.auto_btn1}></div>
                    <div className={styles.auto_btn2}></div>
                    <div className={styles.auto_btn3}></div>
                    <div className={styles.auto_btn4}></div>
                </div> 
            {/* auto*/}
            </div>

            {/* manual */}
            <div className={styles.manual_nav}>
                <label htmlFor={styles.radio1} className={styles.manual_btn}></label>
                <label htmlFor={styles.radio2} className={styles.manual_btn}></label>
                <label htmlFor={styles.radio3} className={styles.manual_btn}></label>
                <label htmlFor={styles.radio4} className={styles.manual_btn}></label>
            </div>
            {/* manual */}

        </div>

    )
}