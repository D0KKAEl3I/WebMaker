import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { useState, useEffect } from 'react';
import styles from './shape.module.css'


export default function Shape({ style, ...params }) {
    const [divStyle, setDivStyle] = useState(style)

    useEffect(() => {
        if (JSON.stringify(style) !== JSON.stringify(divStyle)) {
            setDivStyle(style)
        }
    }, [style, params.id])

    const [dragInfo, setDragInfo] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        lastTranslation: { x: parseInt(divStyle.left.replace('px', '')), y: parseInt(divStyle.top.replace('px', '')) },
    })

    const handleMouseDown = ({ clientX, clientY }) => {
        if (!dragInfo.isDragging)
            setDragInfo({
                ...dragInfo,
                isDragging: true,
                origin: { x: clientX, y: clientY },
                lastTranslation: { x: parseInt(divStyle.left.replace('px', '')), y: parseInt(divStyle.top.replace('px', '')) }
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

    const handleMouseUp = (e) => {
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

    if (params.type == 'text') {
        return (
            <input
                style={divStyle}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseMove}
                onMouseUp={handleMouseUp}
                onContextMenu={params.onContextMenu}
                className={`${styles.text} ${params.className} ${dragInfo.isDragging ? styles.select : ''}`}>
            </input>
        )
    }

    return (
        <div
            key={params.id}
            style={divStyle}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseMove}
            onMouseUp={handleMouseUp}
            onContextMenu={params.onContextMenu}
            className={`${styles.div} ${setType()} ${params.className} ${dragInfo.isDragging ? styles.select : ''}`}>
        </div >
    )
}