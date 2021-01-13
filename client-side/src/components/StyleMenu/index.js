import Input from 'components/Input'
import styles from './stylemenu.module.css'

export default function StyleMenu({ changeDiv }) {

    return (
        <div>
            <form onChange={changeDiv}>
                <div>
                    <Input placeholder="w" name="w"></Input>
                    <Input placeholder="h" name="h"></Input>
                    <Input placeholder="x" name="x"></Input>
                    <Input placeholder="y" name="y"></Input>
                </div>
                <div>
                    <Input placeholder="color" type="color"></Input>
                </div>
            </form>
        </div>
    )
}