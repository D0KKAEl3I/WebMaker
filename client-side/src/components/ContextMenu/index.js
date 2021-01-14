import styles from './contextmenu.module.css'
export default function ContextMenu({ style, functions }) {
    return (
        <div style={style} className={styles.rightonclic}>
            <div>
                <span>뒤로</span>
            </div>
            <div>
                <span>앞으로</span>
            </div>
            <div onClick={functions.copyDiv}>
                <span>복사</span>
            </div>
            <div>
                <span>붙여놓기</span>
            </div>
            <div onClick={functions.deleteDiv}>
                <span>삭제하기</span>
            </div>
        </div>
    )
}