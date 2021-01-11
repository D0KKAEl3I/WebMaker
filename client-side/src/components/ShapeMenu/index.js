import styles from './shapemenu.module.css'
import {useState} from 'react'
import Input from 'components/Input'
import Shape from 'components/ShapeMenu/Shape'
export default function ShapeMenu({children}) {
    const [show, setShow] = useState(true)

    function toggle() {
        setShow(!show)        
    }
    
    return(


        <div className={styles.text} style={{right:` ${
            show?
            "-306px":""
        }`}}>
              <button className={styles.button} onClick = {toggle} >보기</button>
              <Input className={styles.tool} placeholder={"Tool search"}></Input>
              <div className={styles.basic}>
                  <p>기본도형</p>
                  <Shape className={styles.span} title={"직사각형"} type={"square"}></Shape>
                  <Shape className={styles.span} title={"둥근직사각형"} type={"roundsquare"}></Shape>
                  <Shape className={styles.span} title={"원형"} type={"round"}></Shape>
                  <Shape className={styles.span} title={"캡슐형"} type={"square"}></Shape>
                  </div>
              <div className={styles.color}></div>
              <div></div>
        </div>
        
      
    )
}