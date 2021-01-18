import Button from './Button'
import styles from './topmenu.module.css'
export default function Topmenu({ functions, className, download }) {
    return (
        <div style={{ position: "relative" }} className={`${className} ${styles.container}`}>
            <Button title={'다시실행'} onClick={functions.redo}><img src='/img/앞으로가기.png'></img></Button>
            <Button title={'뒤로가기'} onClick={functions.undo}><img src='/img/뒤로가기.png'></img></Button>
            <Button title={'삭제하기'} onClick={functions.deleteDiv}><img src='/img/쓰레기통.png'></img></Button>
            <Button title={'복사하기'} onClick={functions.copyDiv}><img src='/img/복사.png'></img></Button>
            <Button
                title={'저장하기'}
                style={{
                    float: "right",
                    right: "15px",
                }}
                onClick={functions.save}
            ><img src='/img/저장.png'></img></Button>
            <Button
                title={'파일로 저장하기'}
                style={{
                    float: "right",
                    right: "15px",
                }}
                onClick={functions.savefile}
            ><a download={download.filename} href={download.href}><img src='/img/다운로드.png'></img></a></Button>
        </div>
    )
}
