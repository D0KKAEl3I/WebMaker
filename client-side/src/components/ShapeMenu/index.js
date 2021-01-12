import styles from './shapemenu.module.css'
import { useState } from 'react'
import Input from 'components/Input'
import Shape from 'components/ShapeMenu/Shape'
import ColorBlock from 'components/ShapeMenu/ColorBlock'
export default function ShapeMenu({ create, change, color }) {
    const [show, setShow] = useState(true)

    function toggle() {
        setShow(!show)
    }
    let colors = [
        "#346234",
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0000ff",
        "#ff00ff",
        "#ffffff",
        "#777777",
        "#000000",

    ]

    let shapes = [
        { title: "직사각형", type: "square" },
        { title: "둥근 직사각형", type: "roundsquare" },
        { title: "원형", type: "round" },
        { title: "캡슐", type: "capsule" }
    ]


    return (


        <div className={styles.text} style={{
            right: ` ${show ?
                "-20vw" : ""
                }`
        }}>
            <button className={styles.button} onClick={toggle}>
                <img src="/img/arrow.png" />

            </button>
            <div className={styles.searchImg}>
                <Input className={styles.tool} placeholder={"Tool search"}></Input>
                <img src="./img/free-icon-search-163073.svg"></img>
            </div>
            <div className={styles.basic}>
                <p>기본도형</p>
                <div>
                    {
                        shapes.map(item => <Shape onClick={create} style={{ backgroundColor: color }} type={item.type} title={item.title} />)
                    }
                </div>
            </div>
            <div className={styles.color}>
                {
                    colors.map(item => <ColorBlock onClick={e => { change(e.target.style.backgroundColor); }} color={item}></ColorBlock>)
                }

            </div>
        </div>


    )
}