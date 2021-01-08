import { useState, useEffect } from 'react';
import styles from './div.module.css'

const position = { x: 0, y: 0 }

export default function Div({ shape }) {
    const [selected, setSelected] = useState(false)

    const [drag, setDrag] = useState({ x: 0, y: 0 })

    const [dragInfo, setDragInfo] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        translation: position,
        lastTranslation: position,
    })
    const handleMouseDown = ({ clientX, clientY }) => {
        setSelected(true)
        console.log('down')
        if (!dragInfo.isDragging)
            setDragInfo({
                ...dragInfo,
                isDragging: true,
                origin: { x: clientX, y: clientY },
            })
    }
    const handleMouseMove = ({ clientX, clientY }) => {
        console.log('move', dragInfo)
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
        setSelected(false)
        console.log('up')
        if (dragInfo.isDragging) {
            const { translation } = dragInfo
            setDragInfo({
                ...dragInfo,
                isDragging: false,
                lastTranslation: { x: translation.x, y: translation.y },
            })
        }
    }
    const shapePosition = {
        right: `${dragInfo.translation.x}px`,
        bottom: `${dragInfo.translation.y}px`
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
            style={shapePosition}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`${styles.div} ${shapeStyle(shape)} ${selected ? styles.select : ''}`}>

        </div >
        // 

    )
}