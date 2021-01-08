import axios from 'axios'
import { useState, useEffect } from 'react'
import Div from 'components/Drawable/Div'

export default function Index() {
    const [status, setStatus] = useState([]);

    function makeDiv(shape) {
        setStatus(arr => [...arr, <Div shape={shape} />])
    }

    return (
        <div>
            <button onClick={() => makeDiv('square')}>square</button>
            <button onClick={() => makeDiv('round')}>round</button>
            {status.map(i => i)}
            <Div shape={'round'} />
        </div>
    )
}