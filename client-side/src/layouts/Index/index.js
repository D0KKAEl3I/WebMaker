import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
import StyleMenu from 'components/StyleMenu'
import ShapeMenu from 'components/ShapeMenu'
// import ContextMenu from 'components/ContextMenu'

export default function Index() {

    const [divs, setDivs] = useState([]);

    function makeDiv(type) {
        setDivs(arr => [...arr, { id: arr.length, select: select, className: styles.shape, type: type, style: { width: '90px', height: '90px', left: 0, top: 0 } }])
    }

    const changeStyle = (e) => {
        const { width, height, left, top } = e.target.form
        let style = { width: width.value + 'px', height: height.value + 'px', left: left.value, top: top.value }
        setSelectedDivStyle({ ...selectedDivStyle, style })
        setDivs(arr => {
            var id = selectedDivStyle.elementInfo.id
            arr[id] = { id: id, select: select, className: styles.shape, type: selectedDivStyle.elementInfo.type, style: selectedDivStyle.style };
            return arr;
        })
    }

    const [selectedDivStyle, setSelectedDivStyle] = useState({ elementInfo: null, style: null })

    function select(elementInfo, style) {
        setSelectedDivStyle({ elementInfo, style })
    }

    return (
        <div>
            <button onClick={() => makeDiv('round')}>fjk</button>
            <Pallete>
                {
                    divs.map(i => <Shape id={i.id} select={i.select} className={i.className} type={i.type} style={i.style} />)
                }
            </Pallete>
            <ShapeMenu functions={{ makeDiv }}></ShapeMenu>
            <StyleMenu changeStyle={changeStyle} selectedDivStyle={selectedDivStyle.style ? selectedDivStyle.style : { width: '', height: '', left: '', top: '' }}></StyleMenu>
        </div>
    )
}