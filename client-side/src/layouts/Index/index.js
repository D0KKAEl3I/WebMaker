import axios from 'axios'
import { useState, useEffect } from 'react'
import SubmitButton from '../../components/SubmitButton'
import Profile from '../../components/Profile'

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
            {
                loading ?
                    "loooooooooooooooooooooooooooooooooooooooooooooooading"
                    :
                    <div>
                        <Profile id={infoList.id} title={infoList.code} >
                            {infoList.name}
                        </Profile>
                        <SubmitButton placeholder={infoList.id} />
                    </div>
            }
        </div >
    )
}