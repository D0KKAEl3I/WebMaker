import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Index() {
    const [infoList, setInfoList] = useState([])
    const [loading, setLoading] = useState(false)

    function getpost() {
        setLoading(true)
        axios.get('http://jsonplaceholder.typicode.com/posts').then(r => {
            setInfoList(r.data)
            setLoading(false)
            // console.log(infoList)
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

                    'No'
                    :
                    <div>
                        {
                            infoList.map(item => {
                                return <h3> {item.id}</h3>
                            })
                        }
                    </div>
            }
        </div >
    )
}