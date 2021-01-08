import styles from './shapemenu.module.css'
import {useState} from 'react'
export default function ShapeMenu({children}) {
    const [show, setShow] = useState(true)

    function toggle() {
        setShow(!show)        
    }
    
    return(
        <div>

        <div className={styles.text} style={{display:` ${
            show?
            "block":
            "none"
        }`}}>
            
        </div>
        <button className = {styles.button} onClick = {toggle} >보기</button>
        </div>
    )
}