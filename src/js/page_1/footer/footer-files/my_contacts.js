import React from "react";
import styles from './my_contacts.module.css'
import youtube from '../../../../images/page_1/footer/youtube.svg'
import insta from '../../../../images/page_1/footer/instagram.svg'
import pint from '../../../../images/page_1/footer/pinterest.svg'

class MyContacts extends React.Component{
    render() {
        return(
            <>
                <div className={"container"}>
                    <address>
                        <p>Данный сайт разработал студент РТУ МИРЭА Чакрян Р.А.</p>
                        <p>Номер телефона: <a href={"tel:89187777777"}>+7(777)-777-77-77</a></p>
                        <p>Эл. почта: <a href={"mailto:chakryan_rudik@mail.ru"}>chakryan_rudik@mail.ru</a></p>
                    </address>
                    {/*<div className={"socialLinksBtnBox"} style={{marginTop: "50px", display: "flex", justifyContent: "space-between"}}>*/}
                    {/*    <button className={styles.socialLinkImg} style={{width: "150px", height: "50px"}}>*/}
                    {/*        <img src={insta} alt={"Instagram"}/>*/}
                    {/*    </button>*/}
                    {/*    <button className={styles.socialLinkImg} style={{width: "150px", height: "50px"}}>*/}
                    {/*        <img src={youtube} alt={"Youtube"}/>*/}
                    {/*    </button>*/}
                    {/*    <button className={styles.socialLinkImg} style={{width: "150px", height: "50px"}}>*/}
                    {/*        <img src={pint} alt={"Pinterest"}/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </>
        )
    }
}


export default MyContacts