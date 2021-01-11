import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'

export default function Index() {

    const [divs, setDivs] = useState([]);

    function makeDiv(type) {
        setDivs(arr => [...arr, <Shape className={styles.shape} type={type} width={60} height={30} />])
    }

    return (
        <div>
            <button onClick={() => makeDiv('square')}>square</button>
            <button onClick={() => makeDiv('round')}>round</button>
            <Pallete>
                {
                    divs.map(i => i)
                }
            </Pallete>
        </div>
    )
}