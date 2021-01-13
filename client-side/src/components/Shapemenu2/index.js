import styles from './Shapemenu2.module.css'
export default function Shapemenu2({functions}){
    return(
        <div className={styles.rightmenu2}>
            <div onClick={()=>{functions.makeDiv('square')}} className={styles.square}></div>
            <div onClick={()=>{functions.makeDiv('roundsquare')}} className={styles.roundsquare}></div>
            <div onClick={()=>{functions.makeDiv('round')}} className={styles.round}></div>
            <div onClick={()=>{functions.makeDiv('textlogo')}} className={styles.textlogo}>T</div>
        </div>
    )}