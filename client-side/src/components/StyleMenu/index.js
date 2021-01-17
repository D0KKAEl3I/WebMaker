import Input from 'components/InputWithLabel'
import styles from './stylemenu.module.css'
import ColorBlock from './ColorBlock'
import { useState } from 'react'

export default function StyleMenu({ functions, selectedDivStyle, className }) {
    const [colors, setColors] = useState([
        '#ff0000'
        , '#ffff00'
        , '#00ff00'
        , '#00ffff'
        , '#0000ff'
        , '#ff00ff'
        , '#ffffff'
        , '#000000'
    ])

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className={`${styles.container} ${className}`}>
            <form onChange={functions.changeStyle}>
                <Input label="W" type="number" placeholder="width" name="width" value={selectedDivStyle.width ? parseInt(selectedDivStyle.width.replace('px', '')) : ''}></Input>
                <Input label="H" type="number" placeholder="height" name="height" value={selectedDivStyle.height ? parseInt(selectedDivStyle.height.replace('px', '')) : ''}></Input>
                <Input label="X" type="number" placeholder="left" name="left" value={selectedDivStyle.left ? parseInt(selectedDivStyle.left.replace('px', '')) : ''}></Input>
                <Input label="Y" type="number" placeholder="top" name="top" value={selectedDivStyle.top ? parseInt(selectedDivStyle.top.replace('px', '')) : ''}></Input>
                <Input label="R" type="number" placeholder="rotate" name="rotate" value={selectedDivStyle.transform ? parseInt(selectedDivStyle.transform.replace('rotate(', '').replace('deg)', '')) % 360 : ''}></Input>
            </form>
            <div>
                <input type="color" onChange={(e) => { functions.changeColor(e.target.value) }} value={selectedDivStyle.backgroundColor ? selectedDivStyle.backgroundColor : '#ffffff'}></input>
                {
                    colors.map(i => <ColorBlock color={i} onClick={() => functions.changeColor(i)}></ColorBlock>)
                }
            </div>
        </div>
    )
}