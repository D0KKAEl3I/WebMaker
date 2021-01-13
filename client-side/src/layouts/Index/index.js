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
        setDivs(arr => [...arr, <Shape className={styles.shape} type={type} width={60} height={30} />])
    }

    const changeStyle = (e) => {
        const { w, h, x, y } = e.target.form

        setDivs([<Shape className={styles.shape} type={'round'} width={60} height={30} />])
    }



    return (
        <div>
            <Pallete>
                {
                    divs.map(i => i)
                }
            </Pallete>
            <ShapeMenu functions={{ makeDiv }}></ShapeMenu>
            <StyleMenu changeStyle={changeStyle}></StyleMenu>
        </div>
    )
}