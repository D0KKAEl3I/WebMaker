import { useState, useEffect } from 'react'
import Pallete from 'components/Drawable/Pallete'
import Shape from 'components/Drawable/Shape'
import styles from './index.module.css'
import StyleMenu from 'components/StyleMenu'
import ShapeMenu from 'components/ShapeMenu'
import ContextMenu from 'components/ContextMenu'
import Topmenu from 'components/Topmenu'
import next from 'next'

export default function Index() {

    const [divs, setDivs] = useState([]);
    const [previousAction, setPreviousAction] = useState([])
    const [nextAction, setNextAction] = useState([])

    const addPreviousAction = (action) => {
        setPreviousAction(arr => [...arr, action])
    }

    const addNextAction = (action) => {
        setNextAction(arr => [...arr, action])
    }

    useEffect(() => {
        console.log("previous : ", [...previousAction])
        console.log("next : ", [...nextAction])
    }, [previousAction, nextAction])

    const [selectedDivStyle, setSelectedDivStyle] = useState({ elementInfo: null, style: null })

    const changeStyle = (e) => {
        setNextAction([])
        addPreviousAction(Array.from(divs))
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
        setNextAction([])
        if (!selectedDivStyle.style) return
        setSelectedDivStyle({ ...selectedDivStyle, style: { ...selectedDivStyle.style, backgroundColor: color } })
        setDivs(arr => {
            let { id } = selectedDivStyle.elementInfo
            arr[id] = { ...arr[id], style: { ...arr[id].style, backgroundColor: color } };
            return arr;
        })
    }

    const select = (elementInfo, style) => {
        setNextAction([])
        setSelectedDivStyle({ elementInfo: elementInfo, style: style })
        setDivs(arr => {
            addPreviousAction([...arr])
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
        setNextAction([])
        if (type == 'text') {
            setDivs(arr => [...arr, { id: arr.length, select: select, className: '', type: type, style: { width: '100px', height: '40px', left: '0px', top: '0px', backgroundColor: 'transparent', transform: 'rotate(0deg)' }, onContextMenu: onContextMenu }])
            return
        }
        addPreviousAction([...divs])
        setDivs(arr => [...arr, { id: arr.length, select: select, className: '', type: type, style: { width: '90px', height: '90px', left: '0px', top: '0px', backgroundColor: '#ffffff', transform: 'rotate(0deg)' }, onContextMenu: onContextMenu }])
    }

    const copyDiv = () => {
        setNextAction([])
        addPreviousAction([...divs])
        if (!selectedDivStyle.elementInfo) { alert('복사할 대상을 선택해 주세요.'); return }
        setDivs(arr => [...arr, { ...selectedDivStyle.elementInfo, id: arr.length, style: selectedDivStyle.style }])
    }

    const deleteDiv = () => {
        setNextAction([])
        addPreviousAction([...divs])
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

    const undo = () => {
        if (previousAction.length == 0) return
        addNextAction([...divs])
        setDivs([...previousAction][previousAction.length - 1])
        previousAction.pop()
    }

    const redo = () => {
        if (nextAction.length == 0) return
        addPreviousAction([...divs])
        setDivs([...nextAction][nextAction.length - 1])
        nextAction.pop()
    }


    return (
        <div onClick={(e) => { setContextMenu({ display: 'none' }); if (e.currentTarget === e.target) setSelectedDivStyle({ elementInfo: null, style: null }) }} >
            <Pallete className={styles.pallete} style={{ marginLeft: '65px' }} onClick={(e) => { if (e.currentTarget === e.target) setSelectedDivStyle({ elementInfo: null, style: null }) }}>
                {
                    divs.map(i => <Shape id={i.id} className={i.className} type={i.type} style={i.style} select={i.select} onContextMenu={e => onContextMenu(e)} />)
                }
            </Pallete>
            <Topmenu className={styles.topmenu} functions={{ copyDiv, deleteDiv, undo, redo }} />
            <ShapeMenu className={styles.shapemenu} functions={{ makeDiv }}></ShapeMenu>
            <StyleMenu className={styles.stylemenu} functions={{ changeStyle, changeColor }} selectedDivStyle={selectedDivStyle.style ? selectedDivStyle.style : { width: '', height: '', left: '', top: '', transform: '', backgroundColor: '' }}></StyleMenu>
            <ContextMenu functions={{ copyDiv, deleteDiv, undo, redo }} style={contextMenu} />
        </div >
    )
}