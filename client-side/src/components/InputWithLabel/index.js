import styles from './inputwithlabel.module.css'
export default function InputWithLabel({ type, label, name, value, placholder, readOnly }) {
    return (
        <div>
            <span className={styles.label}>{label}</span>
            <input readOnly={value == ''} className={styles.input} name={name} value={value} placeholder={placholder} type={type}></input>
        </div>
    )
}