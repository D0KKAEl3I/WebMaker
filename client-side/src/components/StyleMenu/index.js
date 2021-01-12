import styles from './stylemenu.module.css'

export default function StyleMenu({ changeDiv }) {

    return (
        <div>
            <form onChange={changeDiv}>
                <input placeholder="w" name="w"></input>
                <input placeholder="h" name="h"></input>
                <input placeholder="x" name="x"></input>
                <input placeholder="y" name="y"></input>
            </form>
        </div>
    )
}