import Button from 'components/Button'
import InputWithLabel from 'components/Input'
import styles from './topmenu.module.css'
export default function Topmenu({ con }) {
    function undo() {
        console.log('undo')
    }
    function redo() {
        console.log('redo')
    }
    function save() {
        console.log('save')
    }
    return (
        <div style={{ position: "relative", borderBottom: "var(--border)" }}>
            <Button title={'뒤로가기'} onClick={con}><img src='/img/undo.png'></img></Button>
            <Button title={'다시실행'} onClick={redo}><img src='/img/redo.png'></img></Button>
            <Button title={'삭제하기'}><img src='/img/delete.png'></img></Button>
            <Button
                title={'저장하기'}
                style={{
                    position: "absolute",
                    right: "0",
                }}
                onClick={save}
            ><img src='/img/done.png'></img></Button>
        </div>
    )
}
