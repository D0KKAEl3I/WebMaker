import styles from './input.module.css'
export default function Input({ onChange, type, placeholder = '', value ,className}) {
    return (
         
            <input placeholder={placeholder}
                onChange={onChange}
                type={type}
                className={styles.origin + " " + className}
                value={value}
            >
            </input>
   
    )
}
