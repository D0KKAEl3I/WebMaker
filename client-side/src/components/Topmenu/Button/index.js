import styles from './button.module.css'
export default function Button({ children, title, style, onClick }) {
    return (
        <div className={styles.container} style={style}>
            <button onClick={onClick} className={styles.button}>{children}</button>
            <span className={styles.title}>{title}</span>
        </div>
    )
} 