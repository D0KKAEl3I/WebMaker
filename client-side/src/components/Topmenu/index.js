import Button from './Button'
import InputWithLabel from 'components/InputWithLabel'
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
    function top() {
        console.log('top')
    }
    function vertical() {
        console.log('vertocal')
    }
    function bottom() {
        console.log('bottom')
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
            <Button title={'위로정렬'} onClick={top}><img src='/img/top.webp'></img></Button>
            <Button title={'가운데정렬'} onClick={vertical}><img src='/img/vertical.webp'></img></Button>
            <Button title={'아래로정렬'} onClick={bottom}><img src='/img/bottom.webp'></img></Button>

        </div>
    )
}
