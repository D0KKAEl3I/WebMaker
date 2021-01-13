import styles from './jisoo.module.css'
import ShapeMenu from 'components/ShapeMenu2'
import { useState } from 'react'
import Shape from 'components/Drawable/Shape'
import ContextMenu from 'components/ContextMenu'
export default function jisoo(){
    const [divs, setDivs] = useState([])

    function makeDiv(type){
        setDivs(arr=>[...arr, <Shape type={type}></Shape>])
    }

    const [contextMenu, setContextMenu] = useState({display:'none', left:0, top:0})
    function onContextMenu(e){
        console.log(e)
        e.preventDefault();
        setContextMenu({display:'block', left:e.pageX+1+'px', top:e.pageY+1+'px'})
    }

    return(
        <div style={{overflow : "hidden"}} onClick={()=>{setContextMenu({display:'none'})}} onContextMenu={onContextMenu}>
            {
                divs.map(i=>i)
            }
        <ShapeMenu functions={{makeDiv}}>메뉴</ShapeMenu>
        <ContextMenu style={contextMenu}/>
        </div>
    )
}