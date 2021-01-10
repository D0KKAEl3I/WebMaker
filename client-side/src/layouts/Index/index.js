import axios from 'axios'
import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Div from 'components/Drawable/Div'

export default function Index() {

    const [divs, setDivs] = useState([]);

    function makeDiv(shape) {
        setDivs(arr => [...arr, <Div shape={shape} width={60} height={30} />])
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