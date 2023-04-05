import styles from './Banner.module.css'
import { pic1,pic2,pic3,pic4} from '@/assets/imgs'
import Image from 'next/image'

  

export default function Banner () {

    const Bannerpic = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic1,
        pic2,
        pic3,
        pic4,
    ];

    return (
        <div className={styles.Banner}>
            <div className={styles.slides}>

            {/* btn*/}

                {Bannerpic.map((_, index) => (<input id={styles[`radio${index+1}`]} type={"radio"} name="radio-btn" key={index}/>))}

            {/* btn*/}

            {/* <!--image--> */}

                {Bannerpic.map((image, index) => (<div className={styles.slide} id={index === 0 ? styles.first : ''} key={index}><Image src={image} alt={''}  /></div>))}

            {/* <!--image--> */}

            {/* auto */}
                <div className={styles.au_nav}>

                    {Bannerpic.map((_, index) => (<div className={styles[`auto_btn${index+1}`]} key={index}/>))}
                    
                </div> 
            {/* auto*/}
            </div>

            {/* manual */}
            <div className={styles.manual_nav}>

                {Bannerpic.map((_, index) => (<label htmlFor={styles[`radio${index+1}`]} className={styles.manual_btn} key={index}></label>))}
                
            </div>
            {/* manual */}

        </div>

    )
}