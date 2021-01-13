import styles from './input.module.css'
export default function Input({ type, placeholder = '', value = '', className, name }) {
    return (
        <input placeholder={placeholder}
            type={type}
            className={styles.origin + " " + className}
            value={parseInt(value.replace('px', ''))}
            name={name}
        >
        </input>
    )
}
