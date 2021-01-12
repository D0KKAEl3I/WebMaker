import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
import StyleMenu from 'components/StyleMenu'

export default function Index() {

    const [divs, setDivs] = useState([]);

    const [style, setStyle] = useState("#ffffff");

    function makeDiv(type) {
        setDivs(arr => [...arr, <Shape className={styles.shape} type={type} width={60} height={30} />])
    }

    const changeStyle = (e) => {
        const { w, h, x, y } = e.target.form

        setDivs([<Shape className={styles.shape} color={'#ff0000'} type={'round'} width={60} height={30} />])
    }

    return (
        <div>
            <Pallete>
                {
                    divs.map(i => i)
                }
            </Pallete>
            {/* <ShapeMenu makeDiv={makeDiv} change={setColor} color={color}></ShapeMenu> */}
            <StyleMenu changeStyle={changeStyle}></StyleMenu>
        </div>
    )
}