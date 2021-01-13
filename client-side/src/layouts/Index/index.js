import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
import ShapeMenu from 'components/ShapeMenu'
import SideMenu from 'components/Shapemenu2'

export default function Index() {

    const [divs, setDivs] = useState([]);

    const [color, setColor] = useState("#ffffff");

    function makeDiv(type) {
        setDivs(arr => [...arr, <Shape className={styles.shape} color={color} type={type} width={60} height={30} />])
    }



    return (
        <div>
            <SideMenu></SideMenu>

            {/* <Pallete>
                {
                    divs.map(i => i)
                }
            </Pallete> */}
            {/* <ShapeMenu create={makeDiv} change={setColor} color={color}></ShapeMenu> */}
        </div>
    )
}