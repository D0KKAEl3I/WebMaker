import styles from './pallete.module.css'
import Div from 'components/Drawable/Div'

import { useState } from 'react'


export default function pallete() {
    const [divs, setDivs] = useState([]);

    function makeDiv(shape) {
        setDivs(arr => [...arr, <Div shape={shape} width={60} height={30} />])
    }
    return (
        <div className={styles.outline}>
            <button onClick={() => makeDiv('square')}>square</button>
            <button onClick={() => makeDiv('round')}>round</button>
            <div className={styles.pallete}>
                {divs.map(i => i)}
            </div>
        </div>
    )
}