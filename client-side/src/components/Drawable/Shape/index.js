import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { useState, useEffect } from 'react';
import styles from './shape.module.css'


export default function Shape({ style, ...params }) {

    const [divStyle, setDivStyle] = useState(style)

    useEffect(() => {
        if (JSON.stringify(style) !== JSON.stringify(divStyle)) {
            console.log(style, divStyle)
            setDivStyle(style)
        } else {
            console.log(divStyle)
        }
    }, [style])

    const [dragInfo, setDragInfo] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        lastTranslation: { x: 0, y: 0 },
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
            setDivStyle({
                ...divStyle,
                left: clientX - (origin.x - lastTranslation.x) + 'px',
                top: clientY - (origin.y - lastTranslation.y) + 'px',
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
            params.select(params, divStyle)
        }
    }

    function setType() {
        if (params.type == "square") {
            return styles.square;
        } else if (params.type == "roundsquare") {
            return styles.roundsquare;
        } else if (params.type == "round") {
            return styles.round;
        } else if (params.type == "capsule") {
            return styles.capsule;
        } else if (params.type == "diamond") {
            return styles.diamond;
        }
    }

    return (
        <div
            style={divStyle}
            onDoubleClick={() => params.select(params, divStyle)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`${styles.div} ${setType()} ${params.className} ${dragInfo.isDragging ? styles.select : ''}`}>
        </div >
    )
}