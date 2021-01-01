import styles from './submit_button.module.css'

export default function SubmitButton({ placeholder }) {
    function click() {
        console.log(this)
    }
    return (
        <button onClick={click} className={styles.button}>
            {placeholder}
        </button>
    )
}