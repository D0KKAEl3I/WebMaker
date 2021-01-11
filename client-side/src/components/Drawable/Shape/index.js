import { useState, useEffect } from 'react';
import styles from './shape.module.css'
import Input from 'components/Input'

const position = { x: 50, y: 50 }

export default function Shape({ type, className }) {
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
        transform: `rotate(0deg)`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: '#ffffff'
    })

    function shapeStyle(type) {
        if (type == "square") {
            return styles.square;
        } else if (type == "round") {
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
            className={`${styles.div} ${shapeStyle(type)} ${className}`}>
            {/* {
                selected ?
                    <div
                        style={{
                            transform: divStyle.transform.toString().replace('(', '(-')
                        }}
                        className={styles.sizeSetter}>
                        <Input
                            onChange={(e) => setDivStyle({
                                ...divStyle,
                                width: e.target.value + 'px'
                            })}
                            className={styles.sizeSetterInput} type='number' placeholder="width">
                        </Input>
                        <Input
                            onChange={(e) => setDivStyle({
                                ...divStyle,
                                height: e.target.value + 'px'
                            })}
                            className={styles.sizeSetterInput} type='number' placeholder="height">
                        </Input>
                        <Input
                            onChange={(e) => setDivStyle({
                                ...divStyle,
                                transform: `rotate(${e.target.value % 360}deg`
                            })}
                            className={styles.sizeSetterInput} type='number' placeholder="rotate">
                        </Input>
                        <Input
                            onChange={(e) => {
                                setDivStyle({
                                    ...divStyle,
                                    backgroundColor: e.target.value
                                })
                            }}
                            className={styles.sizeSetterInput} value={divStyle.backgroundColor} type='color' >
                        </Input>
                    </div>
                    :
                    null
            } */}

        </div >
    )
}