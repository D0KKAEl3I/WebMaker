import Input from 'components/Input'
import styles from './stylemenu.module.css'

export default function StyleMenu({ changeStyle, selectedDivStyle }) {

    console.log(selectedDivStyle)
    return (
        <div>
            <form onChange={changeStyle}>
                <Input placeholder="width" name="width" value={selectedDivStyle ? selectedDivStyle.width : null}></Input>
                <Input placeholder="height" name="height" value={selectedDivStyle ? selectedDivStyle.height : null}></Input>
                <Input placeholder="left" name="left" value={selectedDivStyle ? selectedDivStyle.left : null}></Input>
                <Input placeholder="top" name="top" value={selectedDivStyle ? selectedDivStyle.top : null}></Input>
                <div>
                    <Input placeholder="color" type="color"></Input>
                </div>
            </form>
        </div>
    )
}