import styles from './inputwithlabel.module.css'
export default function  InputWithLabel({type, label}){
    return(
        <div>
            <span className={styles.label}>{label}</span>
            <input className={styles.input} type={type}></input>
        </div>
    )
}