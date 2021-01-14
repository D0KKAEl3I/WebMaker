import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
import StyleMenu from 'components/StyleMenu'
import ShapeMenu from 'components/ShapeMenu'
import ContextMenu from 'components/ContextMenu'
import Topmenu from 'components/Topmenu'

export default function Index() {

    const [divs, setDivs] = useState([]);
    const [selectedDivStyle, setSelectedDivStyle] = useState({ elementInfo: null, style: null })

    const makeDiv = (type) => {
        setDivs(arr => [...arr, { id: arr.length, select: select, className: '', type: type, style: { width: '90px', height: '90px', left: '0px', top: '0px', backgroundColor: '#ffffff', transform: 'rotate(0deg)' }, onContextMenu: onContextMenu }])
    }

    const changeStyle = (e) => {
        if (selectedDivStyle.elementInfo && selectedDivStyle.style) {
            const { width, height, left, top, rotate } = e.target.form
            let style = { width: width.value + 'px', height: height.value + 'px', left: left.value + 'px', top: top.value + 'px', transform: `rotate(${rotate.value + 'deg'})`, ...selectedDivStyle.style }
            setSelectedDivStyle({ ...selectedDivStyle, style })
            setDivs(arr => {
                let { id, className, type } = selectedDivStyle.elementInfo
                arr[id] = { id: id, select: select, className: className, type: type, style: style, onContextMenu: onContextMenu };
                return arr;
            })
        }
    }

    const changeColor = (color) => {
        if (!selectedDivStyle.style) return
        setSelectedDivStyle({ ...selectedDivStyle, style: { ...selectedDivStyle.style, backgroundColor: color } })
    }

    useEffect(() => {
        if (!selectedDivStyle.elementInfo) return
        setDivs(arr => {
            let { id, className, type } = selectedDivStyle.elementInfo
            arr[id] = { id: id, select: select, className: className, type: type, style: style, onContextMenu: onContextMenu };
            return arr;
        })
    }, [])


    const select = (elementInfo, style) => {
        setSelectedDivStyle({ elementInfo, style })
        setDivs(arr => {
            let { id } = elementInfo
            arr[id] = { ...arr[id], style: style };
            return arr;
        })
    }
    const [contextMenu, setContextMenu] = useState({ display: 'none', left: 0, top: 0 })
    const onContextMenu = (e) => {
        e.preventDefault();
        setContextMenu({ display: 'block', left: e.pageX + 1 + 'px', top: e.pageY + 1 + 'px' })
    }

    const copyDiv = () => {
        if (!selectedDivStyle.elementInfo) return
        let { className, type } = selectedDivStyle.elementInfo
        setDivs(arr => [...arr, { id: arr.length, select: select, className: className, type: type, style: selectedDivStyle.style, onContextMenu: onContextMenu }])
    }

    const deleteDiv = () => {
        if (!selectedDivStyle.elementInfo) return
        setDivs(arr => {
            let index = selectedDivStyle.elementInfo.id;
            console.log(arr[index].style)
            arr.splice(index, 1);
            for (let i = index; i < arr.length; i++) {
                let info = arr[i]
                arr[i] = { id: i, select: info.select, className: info.className, type: info.type, style: info.style, onContextMenu: info.onContextMenu }
                console.log(info.style, arr[i].style)
            }
            return arr;
        })
    }


    return (
        <div onClick={(e) => { setContextMenu({ display: 'none' }); if (e.currentTarget === e.target) setSelectedDivStyle({ elementInfo: null, style: null }) }} >
            <Pallete style={{ marginLeft: '65px' }} onClick={(e) => { if (e.currentTarget === e.target) setSelectedDivStyle({ elementInfo: null, style: null }) }}>
                {
                    divs.map(i => <Shape id={i.id} className={i.className} type={i.type} style={i.style} select={i.select} onContextMenu={e => onContextMenu(e)} />)
                }
            </Pallete>
            <Topmenu functions={{ copyDiv, deleteDiv }} />
            <ShapeMenu functions={{ makeDiv }}></ShapeMenu>
            <StyleMenu functions={{ changeStyle, changeColor }} selectedDivStyle={selectedDivStyle.style ? selectedDivStyle.style : { width: '', height: '', left: '', top: '', transform: '' }}></StyleMenu>
            <ContextMenu functions={{ copyDiv, deleteDiv }} style={contextMenu} />
        </div >
    )
}