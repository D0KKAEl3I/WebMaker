import styles from './profile.module.css'

export default function Profile({ id, title, children }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.id}>{id}</h1>
            <h2 className={styles.title}>{title}</h2>
            <span>{children}</span>
        </div>
    )
}