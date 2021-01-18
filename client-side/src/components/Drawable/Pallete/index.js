import styles from './pallete.module.css'

export default function Pallete({ children, style, onClick, className }) {
    return (
        <div id="web" onClick={onClick} className={`${styles.outline} ${className}`} style={style}>
            {children}
        </div>
    )
}