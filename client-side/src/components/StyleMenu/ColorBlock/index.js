export default function ColorBlock({ color, onClick }) {
    return (
        <div onClick={onClick} style={{
            backgroundColor: color,
            width: 20 + "px",
            height: 20 + "px",
            display: "inline-block",
            // borderRadius:8+"px",
            // border: 'var(--border)'

        }}></div>
    )
}