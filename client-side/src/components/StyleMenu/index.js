import Input from 'components/InputWithLabel'
import styles from './stylemenu.module.css'

export default function StyleMenu({ changeStyle, selectedDivStyle }) {
    return (
        <div className={styles.container}>
            <form onChange={changeStyle}>
                <Input label="W" type="number" placeholder="width" name="width" value={parseInt(selectedDivStyle.width.replace('px', ''))}></Input>
                <Input label="H" type="number" placeholder="height" name="height" value={parseInt(selectedDivStyle.height.replace('px', ''))}></Input>
                <Input label="X" type="number" placeholder="left" name="left" value={parseInt(selectedDivStyle.left.replace('px', ''))}></Input>
                <Input label="Y" type="number" placeholder="top" name="top" value={parseInt(selectedDivStyle.top.replace('px', ''))}></Input>
                <Input label="R" type="number" placeholder="rotate" name="rotate" value={parseInt(selectedDivStyle.transform.replace('rotate(', '').replace('deg)', '')) % 360}></Input>
            </form>
        </div>
    )
}