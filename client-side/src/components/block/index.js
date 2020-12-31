import styles from './block.module.css'

export default function block({ title, children }) {

    return (
        <div className={styles.block}>
            <h1>{title}</h1>
            <h4>{children}</h4>
        </div>
    )
}