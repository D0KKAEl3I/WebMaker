import Button from './Button'
import styles from './topmenu.module.css'
export default function Topmenu({ functions, className }) {
    return (
        <div style={{ position: "relative" }} className={`${className} ${styles.container}`}>
            <Button title={'뒤로가기'} onClick={functions.undo}><img src='/img/undo.png'></img></Button>
            <Button title={'다시실행'} onClick={functions.redo}><img src='/img/redo.png'></img></Button>
            <Button title={'삭제하기'} onClick={functions.deleteDiv}><img src='/img/delete.png'></img></Button>
            <Button title={'복사하기'} onClick={functions.copyDiv}><img src='/img/copy.png'></img></Button>
            <Button
                title={'저장하기'}
                style={{
                    position: "absolute",
                    right: "15px",
                }}
                onClick={functions.save}
            ><img src='/img/done.png'></img></Button>
            <Button title={'위로정렬'} ><img src='/img/top.webp'></img></Button>
            <Button title={'가운데정렬'} ><img src='/img/vertical.webp'></img></Button>
            <Button title={'아래로정렬'} ><img src='/img/bottom.webp'></img></Button>
            <Button title={'로그인'} ><img src='/img/Login.png'></img></Button>
        </div>
    )
}
