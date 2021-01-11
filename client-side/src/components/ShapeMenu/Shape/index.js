import styles from './shape.module.css'
export default function  Shape({title, type, className, style}) {
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
        <div className={styles.container}>
            <div className={`${styles.shape} ${setType()} ${className}`} style={style}></div>
            <p className={styles.title}>{title}</p>
        </div>
    )
    
}