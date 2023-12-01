import React from "react";
import {Link, useLocation} from "react-router-dom";
import {linkRussians} from "../js/globalSettings";
import cn from 'classnames'
import '../css/style.css'



export const BreadCrumbs = ({blackText})=>{
    const location = useLocation();


    // let currentPath = location.pathname.split('/')


    const crumbs = location.pathname.split('/')
        .map(crumb => {
            let currentLocation;
            let currentLink = '';
            let id = 0;
            switch (crumb){
                case '':
                    currentLocation = linkRussians.main[1];
                    currentLink = '/front-master-5'
                    id = 0;
                    break;
                case 'credit':
                    currentLocation = linkRussians.credit[1];
                    currentLink += '/credit'
                    id = 1;
                    break;
                case 'Auth':
                    currentLocation = linkRussians.authorization[1];
                    currentLink += '/Auth'
                    id = 2;
                    break;
                case 'disposal':
                    currentLocation = linkRussians.disposal[1];
                    currentLink += '/disposal'
                    id = 3;
                    break;
                case 'taxi':
                    currentLocation = linkRussians.taxi[1];
                    currentLink += '/taxi'
                    id = 4;
                    break;
                default:
                    break
            }

            return(
                <div className={blackText ? cn("crumb", "crumbBlack") : "crumb"} key={id}>
                    <Link to={currentLink}>
                        {currentLocation}
                    </Link>
                </div>
            )
        })

    return(
        <div className={"breadcrumbs"}>
            {crumbs}
        </div>
    )
}