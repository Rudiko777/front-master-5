import React from "react";
import styles from './formPraca.module.css'

export const FormPraca2 = ()=>{
    return(
        <>
            <form className={styles.form} action={"#"} method="get">
                <input className={styles.formInput} type="text" placeholder="Name" name={"nameInput"}/>
                <input className={styles.formInput} type="email" placeholder="E-mail" name={"emailInput"}/>
                <textarea className={styles.formTextarea} placeholder="Your text" maxLength={500}></textarea>
                <button className={styles.formBtn} type="submit">SUBMIT</button>
            </form>
            <form className={styles.form} action={"#"} method="get">
                <div className={styles.formBox}>
                    <div>
                        <fieldset>
                            <legend>Какую выберите марку автомобиля?</legend>
                            <label htmlFor={"BMW"}>
                                <input type={"radio"} name={"answer"} value={"BMW"} id={"BMW"}/>
                                BMW
                            </label >
                            <label htmlFor={"MERCEDES"}>
                                <input type={"radio"} name={"answer"} value={"BMW"} id={"MERCEDES"}/>
                                Mercedes
                            </label>
                            <label htmlFor={"AUDI"}>
                                <input type={"radio"} name={"answer"} value={"BMW"} id={"AUDI"}/>
                                Audi
                            </label>
                            <label htmlFor={"PORSCHE"}>
                                <input type={"radio"} name={"answer"} value={"BMW"} id={"PORSCHE"}/>
                                Porsche
                            </label>
                        </fieldset>
                    </div>
                    <div>
                        <label htmlFor={"transportationCity"}>Место доставки </label>
                        <select name={"transportation"} id={"transportationCity"}>
                            <option value={""}>Выберите область/край</option>
                            <option value={"Leningradskaya"}>Ленинградская</option>
                            <option value={"Moscowskaya"}>Московская</option>
                            <option value={"Krasnodarskiy"}>Краснодарский</option>
                            <option value={"Voronezhskaya"}>Воронежская</option>
                        </select>
                    </div>
                </div>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5302.122061358809!2d-122.41833241921417!3d37.797992092283096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e839d7e541%3A0xf89b6220c55337a7!2zR3JlZW4gU3QsIFNhbiBGcmFuY2lzY28sIENBIDk0MTMzLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1693172526979!5m2!1sru!2sru"
                        width="100%" height="578" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.video}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/udSjR2w_Rzw?si=sT9e89ENF7BfQxzX"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </form>
        </>
    )
}