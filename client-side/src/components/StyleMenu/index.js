import Input from 'components/Input'
import styles from './stylemenu.module.css'

export default function StyleMenu({ changeStyle, selectedDivStyle }) {
    return (
        <div>
            <form onChange={changeStyle}>
                <Input type="number" placeholder="width" name="width" value={`${selectedDivStyle.width}`}></Input>
                <Input type="number" placeholder="height" name="height" value={`${selectedDivStyle.height}`}></Input>
                <Input type="number" placeholder="left" name="left" value={`${selectedDivStyle.left}`}></Input>
                <Input type="number" placeholder="top" name="top" value={`${selectedDivStyle.top}`}></Input>
            </form>
        </div>
    )
}