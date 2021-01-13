import Topmenu from 'components/Topmenu'
export default function Suhyen() {
    function con() {
        console.log('나 여기이따')
    }
    return (
        <Topmenu con={con}></Topmenu>
    )
}