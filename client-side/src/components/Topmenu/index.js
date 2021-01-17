import Button from './Button'
import InputWithLabel from 'components/InputWithLabel'
import styles from './topmenu.module.css'
export default function Topmenu({ functions, className }) {
    return (
        <div style={{ position: "relative", borderBottom: "var(--border)" }} className={className}>
            <Button title={'뒤로가기'} onClick={functions.undo}><img src='/img/undo.png'></img></Button>
            <Button title={'다시실행'} onClick={functions.redo}><img src='/img/redo.png'></img></Button>
            <Button title={'삭제하기'} onClick={functions.deleteDiv}><img src='/img/delete.png'></img></Button>
            <Button title={'복사하기'} onClick={functions.copyDiv}><img src='/img/copy.png'></img></Button>
            <Button
                title={'저장하기'}
                style={{
                    position: "absolute",
                    right: "0",
                }}
            ><img src='/img/done.png'></img></Button>
            <Button title={'위로정렬'} ><img src='/img/top.webp'></img></Button>
            <Button title={'가운데정렬'} ><img src='/img/vertical.webp'></img></Button>
            <Button title={'아래로정렬'} ><img src='/img/bottom.webp'></img></Button>

        </div>
    )
}
