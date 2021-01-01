import axios from 'axios'
import { useState, useEffect } from 'react'
import SubmitButton from '../../components/SubmitButton'


export default function Index() {
    const [infoList, setInfoList] = useState([])
    const [loading, setLoading] = useState(false)

    function getpost() {
        setLoading(true)
        axios.get('http://jsonplaceholder.typicode.com/posts').then(r => {
            setInfoList(r.data)
            setLoading(false)
            console.log(r)
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
                    <SubmitButton placeholder={'메롱'} />
            }
        </div >
    )
}