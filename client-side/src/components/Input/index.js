import styles from './input.module.css'
export default function Input({ onChange, type, placeholder = '', value }) {
    return (
         
            <input placeholder={placeholder}
                onChange={onChange}
                type={type}
                className={styles.origin}
                value={value}
            >
            </input>
   
    )
}
