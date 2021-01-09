import styles from './pallete.module.css'
import Div from 'components/Drawable/Div'

export default function Pallete({ children }) {
    return (
        <div className={styles.outline}>
            <div className={styles.pallete}>
                {children}
            </div>
        </div>
    )
}