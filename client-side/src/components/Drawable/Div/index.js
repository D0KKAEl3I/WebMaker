import styles from './div.module.css'

export default function Div({ shape }) {

    function shapeStyle(shape) {
        if (shape == "square") {
            return styles.square;
        } else if (shape == "triangle") {
            return styles.triangle;
        } else {
            return
        }
    }
    return (
        <div className={shapeStyle}></div>
    )
}