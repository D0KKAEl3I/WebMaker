import styles from './pallete.module.css'

export default function Pallete({ children, style, onClick }) {
    return (
        <div onClick={onClick} className={styles.outline} style={style}>
            <div onClick={onClick} className={styles.pallete}>
                {children}
            </div>
        </div>
    )
}