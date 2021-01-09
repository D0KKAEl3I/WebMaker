import { useState, useEffect } from 'react';
import styles from './div.module.css'

const position = { x: 50, y: 50 }

export default function Div({ shape }) {
    const [selected, setSelected] = useState(false)

    const [dragInfo, setDragInfo] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        lastTranslation: position,
    })
    const handleMouseDown = ({ clientX, clientY }) => {
        if (!dragInfo.isDragging)
            setDragInfo({
                ...dragInfo,
                isDragging: true,
                origin: { x: clientX, y: clientY },
            })
    }
    const handleMouseMove = ({ clientX, clientY }) => {
        if (dragInfo.isDragging && !selected) {
            const { origin, lastTranslation } = dragInfo
            setDivStyle({
                ...divStyle,
                left: clientX - (origin.x - lastTranslation.x),
                top: clientY - (origin.y - lastTranslation.y),
            })
        }
    }
    const handleMouseUp = () => {
        if (dragInfo.isDragging) {
            const { left, top } = divStyle
            setDragInfo({
                ...dragInfo,
                isDragging: false,
                lastTranslation: { x: parseInt(left.toString().replaceAll('px', '')), y: parseInt(top.toString().replaceAll('px', '')) },
            })
        }
    }

    const [divStyle, setDivStyle] = useState({
        width: 100 + 'px',
        height: 100 + 'px',
        transform: `rotate(0deg)`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: 'transparent'
    })

    function shapeStyle(shape) {
        if (shape == "square") {
            return styles.square;
        } else if (shape == "round") {
            return styles.round;
        } else {
            return
        }
    }

    return (
        <div
            style={divStyle}
            onDoubleClick={() => setSelected(!selected)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`${styles.div} ${shapeStyle(shape)} ${selected ? styles.select : ''}`}>
            {
                selected ?
                    <div className={styles.sizeSetter}>
                        <input
                            onChange={(e) => setDivStyle({
                                ...divStyle,
                                width: e.target.value + 'px'
                            })}
                            className={styles.sizeSetterInput} type='number' placeholder="width">
                        </input>
                        <input
                            onChange={(e) => setDivStyle({
                                ...divStyle,
                                height: e.target.value + 'px'
                            })}
                            className={styles.sizeSetterInput} type='number' placeholder="height">
                        </input>
                        <input
                            onChange={(e) => setDivStyle({
                                ...divStyle,
                                transform: `rotate(${e.target.value % 360}deg`
                            })}
                            className={styles.sizeSetterInput} type='number' placeholder="rotate">
                        </input>
                    </div>
                    :
                    null
            }

        </div >
    )
}