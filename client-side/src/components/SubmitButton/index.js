import { useState, useEffect } from 'react'
import styles from './submit_button.module.css'


export default function SubmitButton({ placeholder }) {
    const [clicked, setClicked] = useState(false)

    function toggle() {
        setClicked(!clicked)
    }

    return (
        <button onClick={toggle} className={`${styles.button} ${clicked ? styles.active : ''}`}>
            {placeholder}
        </button>
    )
}