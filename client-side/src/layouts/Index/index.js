import axios from 'axios'
import { useState, useEffect } from 'react'
import SubmitButton from '../../components/SubmitButton'


export default function Index() {
    const [infoList, setInfoList] = useState([])
    const [loading, setLoading] = useState(false)

    function getpost() {
        setLoading(true)
        axios.get('http://localhost:8080').then(r => {
            setInfoList(r.data)
            setLoading(false)
            console.log(r.data, 1)
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
            {
                loading ?
                    "loooooooooooooooooooooooooooooooooooooooooooooooading"
                    :

                    <SubmitButton placeholder={infoList.id} />

            }
        </div >
    )
}