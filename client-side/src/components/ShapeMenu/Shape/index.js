import styles from './shape.module.css'
export default function  Shape({title, type}) {
    function setType() {
        if(type=="square"){
            return styles.square;
        }else if(type=="roundsquare"){
            return styles.roundsquare;
        }else if(type=="round"){
            return styles.round;
        }else (type=="capsule")
            return styles.capsule;
    
    
    }
    return(
        <div>
            <div className={styles.shape+" " + setType()}></div>
            <span>{title}</span>
        </div>
    )
    
}