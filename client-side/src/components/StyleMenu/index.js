import Input from 'components/InputWithLabel'
import styles from './stylemenu.module.css'
import ColorBlock from './ColorBlock'

export default function StyleMenu({ functions, selectedDivStyle }) {
    return (
        <div className={styles.container}>
            <form onChange={functions.changeStyle}>
                <Input label="W" type="number" placeholder="width" name="width" value={selectedDivStyle.width ? parseInt(selectedDivStyle.width.replace('px', '')) : ''}></Input>
                <Input label="H" type="number" placeholder="height" name="height" value={selectedDivStyle.height ? parseInt(selectedDivStyle.height.replace('px', '')) : ''}></Input>
                <Input label="X" type="number" placeholder="left" name="left" value={selectedDivStyle.left ? parseInt(selectedDivStyle.left.replace('px', '')) : ''}></Input>
                <Input label="Y" type="number" placeholder="top" name="top" value={selectedDivStyle.top ? parseInt(selectedDivStyle.top.replace('px', '')) : ''}></Input>
                <Input label="R" type="number" placeholder="rotate" name="rotate" value={selectedDivStyle.transform ? parseInt(selectedDivStyle.transform.replace('rotate(', '').replace('deg)', '')) % 360 : ''}></Input>
            </form>
            <div>
                <ColorBlock color='#ff0000' onClick={(e) => functions.changeColor('#ff0000')} />
                <ColorBlock color='#ffff00' onClick={(e) => functions.changeColor('#ffff00')} />
                <ColorBlock color='#00ff00' onClick={(e) => functions.changeColor('#00ff00')} />
                <ColorBlock color='#00ffff' onClick={(e) => functions.changeColor('#00ffff')} />
                <ColorBlock color='#0000ff' onClick={(e) => functions.changeColor('#0000ff')} />
                <ColorBlock color='#ff00ff' onClick={(e) => functions.changeColor('#ff00ff')} />
                <ColorBlock color='#ffffff' onClick={(e) => functions.changeColor('#ffffff')} />
                <ColorBlock color='#000000' onClick={(e) => functions.changeColor('#000000')} />
            </div>
        </div>
    )
}