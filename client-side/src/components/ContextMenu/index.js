import styles from './contextmenu.module.css'
export default function ContextMenu({style}){
    return(
        <div style={style} className={styles.rightonclic}>
            <div>
                <span>삭제하기</span>
            </div>
        </div>
    )
}