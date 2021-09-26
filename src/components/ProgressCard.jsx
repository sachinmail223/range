import React, { useState } from 'react'
import styles from './ProgressCard.module.css'

const ProgressCard = () => {

    const [sizeRight, setSizeRight] = useState(45)
    const [sizeLeft, setSizeLeft] = useState(90-45)

    const changeSize = (e)=>{
        setSizeRight(e.target.value)
        setSizeLeft(90-e.target.value)
    }
    return (
        <div className={styles.progressCard}>
            <img className={styles.center} src="./img/center.svg" alt="center" />
            <div className={styles.cardTop}>
                
                <span className={styles.firstChild}><span>02%</span></span>

                <div className={styles.secondChild}>
                    <span>I focus</span>
                    <p>Question 1/6</p>
                </div>
            </div>
            
            
            <p className={styles.heading}>Think of individuals like you, people you instinctively compare yourself to. What is the likelihood that each of the following events will happen to you personally as compared to them?</p>
            <p className={styles.heading2}>Being publicly recognized for a professional or personal achievement</p>


{/* slider div  */}
            <div className={styles.range}>
            <img className={styles.humanRight}  style={{height: `${sizeRight}%`}} src="./img/human.svg" alt="Vector" />
            <img className={styles.humanLeft} style={{height: `${sizeLeft}%`}} src="./img/human.svg" alt="Vector" />
            <input className={styles.input} type="range" min="20" max="70" onChange={changeSize} value={sizeRight}/>
            <p className={styles.sliderHeading}>Move the slider to indicate your opinion</p>
            </div>

{/* bottom background */}
            <img className={styles.background} src="./img/background.svg" alt="Vector" />

{/* buttons in buttom */}

            <div className={styles.buttonDiv}>
               
               <button>
                   <img src="./img/arrow.svg" alt="" />
               </button>
               <button>
                   <img src="./img/activeArrow.svg" alt="" />
               </button>
            </div>

        </div>
    )
}

export default ProgressCard
