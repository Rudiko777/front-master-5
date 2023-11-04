import React from "react";
import styles from './footerBlogs.module.css'
import {footerBlogsFirst, footerBlogsSecond, footerBlogsThird, footerBlogsFour} from "../../../../../shared/all-need-files";
import {FooterColumn} from "./columns/footerColumns";


export const FooterInteractive = ()=>{
    const IntaractiveFirst = footerBlogsFirst.map((item)=>{
        return(
            <div className={styles.footerLinks} key={item.id}>
                <FooterColumn title={item.title} description={item.description}/>
            </div>
        )
    })

    const InteractiveSecond = footerBlogsSecond.map((item)=>{
        return(
            <div className={styles.footerLinks} key={item.id}>
                <FooterColumn title={item.title} description={item.description} />
            </div>
        )
    })

    const InteractiveThird = footerBlogsThird.map((item)=>{
        return(
            <div className={styles.footerLinks} key={item.id}>
                <FooterColumn title={item.title} description={item.description} />
            </div>
        )
    })

    const InteractiveFour = footerBlogsFour.map((item)=>{
        return(
            <div className={styles.footerLinks} key={item.id}>
                <FooterColumn title={item.title} description={item.description} />
            </div>
        )
    })


    return(
        <div className={styles.footerLinksAllList}>
            <div className={styles.footerLinksAll}>
                {IntaractiveFirst}
            </div>
            <div className={styles.footerLinksAll}>
                {InteractiveSecond}
            </div>
            <div className={styles.footerLinksAll}>
                {InteractiveThird}
            </div>
            <div className={styles.footerLinksAll}>
                {InteractiveFour}
            </div>
        </div>
    )
}