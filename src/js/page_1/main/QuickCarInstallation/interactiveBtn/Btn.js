import React, {useState} from "react";
import styles from './interBtn.module.css'
import point from '../../../../../images/page_1/main/pointBlack.svg'
import cn from 'classnames'

export const Btn = ({title, one, two, three})=>{
    const[stylePoint, setStylePoint] = useState(false)
    const[styleListBtn, setStyleListBtn] = useState(false)

    const handlePoint = ()=>{
        setStylePoint(!stylePoint);
    }

    const handleListBtn = ()=>{
        setStyleListBtn(!styleListBtn)
    }

    return(
        <>
            <div className={styles.GeneralBox}>
                <button className={styles.Btn}>
                    <div>
                        <p>{title}</p>
                        <img className={stylePoint ? styles.pointImgActive : styles.pointImg} src={point} onClick={handlePoint}/>
                    </div>
                </button>
                {stylePoint ?
                    <>
                        <div className={styles.btnInsideBox}>
                            <ul className={styles.btnList}>
                                <li className={styles.btnListItem}>
                                    <a
                                        className={styleListBtn ? cn(styles.btnListItemLink, styles.btnListItemLinkActive) : styles.btnListItemLink}
                                        href={"#"}
                                        onMouseOver={handleListBtn}>
                                        {one}
                                    </a>
                                </li>
                                <li className={styles.btnListItem}>
                                    <a className={styleListBtn ? cn(styles.btnListItemLink, styles.btnListItemLinkActive) : styles.btnListItemLink} href={"#"} onMouseOver={handleListBtn}>
                                        {two}
                                    </a>
                                </li>
                                <li className={styles.btnListItem}>
                                    <a className={styleListBtn ? cn(styles.btnListItemLink, styles.btnListItemLinkActive) : styles.btnListItemLink} href={"#"} onMouseOver={handleListBtn}>
                                        {three}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </> :
                    null
                }
            </div>
        </>
    )
}