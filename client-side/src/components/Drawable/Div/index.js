import { useState, useEffect } from 'react';
import styles from './div.module.css'

const position = { x: 50, y: 50 }

export default function Div({ shape }) {
    const [selected, setSelected] = useState(false)

    const [dragInfo, setDragInfo] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        translation: position,
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
        if (dragInfo.isDragging) {
            const { origin, lastTranslation } = dragInfo
            setDragInfo({
                ...dragInfo,
                translation: {
                    x: Math.abs(clientX - (origin.x + lastTranslation.x)),
                    y: Math.abs(clientY - (origin.y + lastTranslation.y)),
                },
            })
        }
    }
    const handleMouseUp = () => {
        if (dragInfo.isDragging) {
            const { translation } = dragInfo
            setDragInfo({
                ...dragInfo,
                isDragging: false,
                lastTranslation: { x: translation.x, y: translation.y },
            })
        }
    }

    let [width, setWidth] = useState(100)
    let [height, setHeight] = useState(100)

    const divStyle = {
        width: width + 'px',
        height: height + 'px',
        right: `${dragInfo.translation.x}px`,
        bottom: `${dragInfo.translation.y}px`,
        zIndex: dragInfo.isDragging ? 5 : 0
    }

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
                        <input onChange={(e) => setWidth(parseInt(e.target.value.replaceAll('px', '')))} className={styles.sizeSetterInput} type='number' placeholder="width"></input>
                        <input onChange={(e) => setHeight(parseInt(e.target.value.replaceAll('px', '')))} className={styles.sizeSetterInput} type='number' placeholder="height"></input>
                    </div>
                    :
                    null
            }

        </div >
    )
}