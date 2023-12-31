import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Home";
import {AnyPage} from "./AnyPage";
import {Authorization} from "./Authorization";
import {CreditPage} from "./CreditPage";
import {DisposalPage} from "./DisposalPage";
import {TaxiPage} from "./TaxiPage";
import Ex10 from "./ex10";
import {Authorization2} from "./Authorisation2";
import Parallax from "./parallax/Parallax";
import Update from "./update/update";



export const App = ()=> {
    return (
        <div className={"App"}>
            <Routes>
                <Route path="/front-master-5" element={<HomePage/>}/>
                <Route path="/Auth" element={<Authorization/>}/>
                <Route path="/login" element={<Authorization2/>}/>
                <Route path="/credit" element={<CreditPage/>}/>
                <Route path="/disposal" element={<DisposalPage/>}/>
                <Route path={"/taxi"} element={<TaxiPage/>}/>
                <Route path={'/slider'} element={<AnyPage/>}/>
            </Routes>
        </div>
    )
}


