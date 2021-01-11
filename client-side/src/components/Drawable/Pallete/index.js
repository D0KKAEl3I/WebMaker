import styles from './pallete.module.css'

export default function Pallete({ children }) {
    return (
        <div className={styles.outline}>
            <div className={styles.pallete}>
                {children}
            </div>
        </div>
    )
}