import { useState, useEffect } from 'react';
import styles from './shape.module.css'

const position = { x: 50, y: 50 }

export default function Shape({ type, className, style = { width: '90px', height: '90px', backgroundColor: '#ffffff' } }) {
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

    function setType() {
        if (type == "square") {
            return styles.square;
        } else if (type == "roundsquare") {
            return styles.roundsquare;
        } else if (type == "round") {
            return styles.round;
        } else if (type == "capsule") {
            return styles.capsule;
        } else if (type == "diamond") {
            return styles.diamond;
        }
    }

    return (
        <div
            style={style}
            onDoubleClick={() => setSelected(!selected)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`${styles.div} ${setType()} ${className} ${dragInfo.isDragging ? styles.select : ''}`}>
        </div >
    )
}