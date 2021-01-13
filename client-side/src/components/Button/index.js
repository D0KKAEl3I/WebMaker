import styles from './button.module.css'
export default function Button({children,title}){
    return(
        <div>
        <button className = {styles.button}>{children}</button>
        <span className = {styles.title}>{title}</span>
        </div>
    )
}