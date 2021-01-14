import styles from './pallete.module.css'

export default function Pallete({ children, style }) {
    return (
        <div className={styles.outline} style={style}>
            <div className={styles.pallete}>
                {children}
            </div>
        </div>
    )
}