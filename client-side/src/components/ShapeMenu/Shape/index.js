import styles from './shape.module.css'
export default function Shape({ title, type, className, style, onClick }) {
    function setType() {
        if (type == "square") {
            return styles.square;
        } else if (type == "roundsquare") {
            return styles.roundsquare;
        } else if (type == "round") {
            return styles.round;
        } else if (type == "capsule") {
            return styles.capsule;
        } else if (type == "diamond") {``
            return styles.diamond;
        }
    }
    return (
        <div className={styles.container} onClick={e => { onClick(type) }}>
            <div className={`${styles.shape} ${setType()} ${className}`} style={style}></div>
            <p className={styles.title}>{title}</p>
        </div>
    )

}