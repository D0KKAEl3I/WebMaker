import styles from './contextmenu.module.css'
export default function ContextMenu({style}){
    return(
        <div style={style} className={styles.rightonclic}>
            <div>
                <span>뒤로</span>
            </div>
            <div>
                <span>앞으로</span>
            </div>
            <div>
                <span>복사</span>
            </div>
            <div>
                <span>붙여놓기</span>
            </div>
            <div className={styles.delete1}>
                <span>삭제하기</span>
            </div>
        </div>
    )
}