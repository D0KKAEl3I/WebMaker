import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Index() {
    const [infoList, setInfoList] = useState([])
    const [loading, setLoading] = useState(false)

    function getpost() {
        setLoading(true)
        axios.get('http://localhost:8080').then(r => {
            setInfoList(r.data)
            setLoading(false)
            console.log(r.data)
        }).catch(e => {
            console.log('error', e)
            setLoading(false)
        })
    }

    useEffect(() => {
        getpost()
    }, [])

    return (
        <div>
            <ToggleButton onholder={'on'} offholder={'off'} />
            <ToggleButton onholder={'on'} offholder={'off'} />
            <ToggleButton onholder={'on'} offholder={'off'} />
            <ToggleButton onholder={'on'} offholder={'off'} />
        </div >
    )
}