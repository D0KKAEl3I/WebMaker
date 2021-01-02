import { useState } from 'react'
import styles from './toggle_button.module.css'

export default function ToggleButton({ offholder, onholder }) {
    const [on, setOn] = useState(false)
    function toggle() {
        setOn(!on)
    }
    return (
        <div className={styles.controller}>
            <span className={`${styles.offspan} ${on ? styles.hide : ""}`}>{offholder}</span>
            <span className={`${styles.onspan} ${on ? "" : styles.hide}`} > {onholder}</span>
            <div onClick={toggle} className={`${styles.lever} ${on ? styles.leverActive : ""}`}></div>
        </div>
    )
}