import styles from './pallete.module.css'

export default function Pallete({ children, style, onClick, className }) {
    return (
        <div onClick={onClick} className={`${styles.outline} ${className}`} style={style}>
            {/* <div onClick={onClick} className={styles.pallete}> */}
            {children}
            {/* </div> */}
        </div>
    )
}