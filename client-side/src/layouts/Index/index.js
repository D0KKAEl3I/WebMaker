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

    const changeStyle = (e) => {
        if (selectedDivStyle.elementInfo && selectedDivStyle.style) {
            const { width, height, left, top, rotate } = e.target.form
            let style = { ...selectedDivStyle.style, width: width.value + 'px', height: height.value + 'px', left: left.value + 'px', top: top.value + 'px', transform: `rotate(${rotate.value}deg)` }
            setSelectedDivStyle({ ...selectedDivStyle, style: style })
            setDivs(arr => {
                let { id } = selectedDivStyle.elementInfo
                arr[id] = { ...arr[id], style: style };
                return arr;
            })
        }
    }

    const changeColor = async (color) => {
        if (!selectedDivStyle.style) return
        setSelectedDivStyle({ ...selectedDivStyle, style: { ...selectedDivStyle.style, backgroundColor: color } })
        setDivs(arr => {
            let { id } = selectedDivStyle.elementInfo
            arr[id] = { ...arr[id], style: selectedDivStyle.style };
            return arr;
        })
    }

    const select = (elementInfo, style) => {
        setSelectedDivStyle({ elementInfo: elementInfo, style: style })
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

    const makeDiv = (type) => {
        setDivs(arr => [...arr, { id: arr.length, select: select, className: '', type: type, style: { width: '90px', height: '90px', left: '0px', top: '0px', backgroundColor: '#ffffff', transform: 'rotate(0deg)' }, onContextMenu: onContextMenu }])
    }

    const copyDiv = () => {
        if (!selectedDivStyle.elementInfo) { alert('복사할 대상을 선택해 주세요.'); return }
        setDivs(arr => [...arr, { ...selectedDivStyle.elementInfo, id: arr.length, style: selectedDivStyle.style }])
    }

    const deleteDiv = () => {
        if (!selectedDivStyle.elementInfo) { alert('삭제할 대상을 선택해 주세요.'); return }
        setDivs(arr => {
            let index = selectedDivStyle.elementInfo.id;
            arr.splice(index, 1);
            console.log(arr)
            for (let i = index; i < arr.length; i++) {
                arr[i] = { ...arr[i], id: i }
            }
            return arr;
        })
        setSelectedDivStyle({ elementInfo: null, style: null })
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