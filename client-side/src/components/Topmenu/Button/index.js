import styles from './button.module.css'
export default function Button({ children, title, style, onClick = () => { alert('미구현') } }) {
    return (
        <div className={styles.container} style={style}>
            <button onClick={onClick} className={styles.button}>
                {children}
                <span className={styles.title}>{title}</span>
            </button>
        </div>
    )
} 