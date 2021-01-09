import styles from './input.module.css'
export default function Input({ onChange, type, placeholder = '&nbsp;', value }) {
    return (
        <div style={{
            position: 'relative'
        }}>
            <span className={styles.label}>{placeholder}</span>
            <input
                onChange={onChange}
                type={type}
                className={styles.origin}
                onFocus={e => e.target.previousElementSibling.className = styles.focus}
                onBlur={e => e.target.previousElementSibling.className = styles.label}
                value={value}
            >
            </input>
        </div>

    )
}