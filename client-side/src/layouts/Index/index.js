import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
import StyleMenu from 'components/StyleMenu'
import ShapeMenu from 'components/ShapeMenu'

export default function Index() {

    const [divs, setDivs] = useState([]);

    const [style, setStyle] = useState("#ffffff");

    function makeDiv(type) {
        setDivs(arr => [...arr, <Shape id={arr.length} select={select} className={styles.shape} type={type} />])
    }

    const changeStyle = (e) => {
        const { width, height, left, top } = e.target.form
        console.log(e.target.form)
        let style = { width: width, height: height, left: left, top: top }
        console.log(style)
        setDivs(arr => {
            arr[selectedDivStyle.index] = <Shape id={selectedDivStyle.index} select={select} className={styles.shape} type={selectedDivStyle.elementInfo.index} style={style} />;
            return arr;
        })
    }

    const [selectedDivStyle, setSelectedDivStyle] = useState({ elementInfo: null, style: null })

    function select(elementInfo, style) {
        setSelectedDivStyle({ elementInfo, style })
        console.log(selectedDivStyle.style)
    }

    return (
        <div>
            <button onClick={() => makeDiv('round')}></button>
            <Pallete>
                {
                    divs.map(i => i)
                }
            </Pallete>
            {/* <ShapeMenu functions={{ makeDiv }}></ShapeMenu> */}
            <StyleMenu changeStyle={changeStyle} selectedDivStyle={selectedDivStyle.style ? selectedDivStyle.style : null}></StyleMenu>
        </div>
    )
}