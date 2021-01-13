import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
<<<<<<< HEAD
import ShapeMenu from 'components/ShapeMenu'
import SideMenu from 'components/Shapemenu2'
=======
import StyleMenu from 'components/StyleMenu'
>>>>>>> 77b93ef02277b9d89535873f8f6f361f5f86a9bf

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
            <SideMenu></SideMenu>

            {/* <Pallete>
                {
                    divs.map(i => i)
                }
<<<<<<< HEAD
            </Pallete> */}
            {/* <ShapeMenu create={makeDiv} change={setColor} color={color}></ShapeMenu> */}
=======
            </Pallete>
            {/* <ShapeMenu makeDiv={makeDiv} change={setColor} color={color}></ShapeMenu> */}
            <StyleMenu changeStyle={changeStyle}></StyleMenu>
>>>>>>> 77b93ef02277b9d89535873f8f6f361f5f86a9bf
        </div>
    )
}