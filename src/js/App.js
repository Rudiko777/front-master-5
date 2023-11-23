import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Home";
import {AnyPage} from "./AnyPage";
import {Authorization} from "./Authorization";
import {CreditPage} from "./CreditPage";
import {DisposalPage} from "./DisposalPage";
import {TaxiPage} from "./TaxiPage";
import Ex10 from "./ex10";



export const App = ()=> {
    return (
        <div className={"App"}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/anyPage" element={<AnyPage/>}/>
                <Route path="/Auth" element={<Authorization/>}/>
                <Route path="/credit" element={<CreditPage/>}/>
                <Route path="/disposal" element={<DisposalPage/>}/>
                <Route path={"/taxi"} element={<TaxiPage/>}/>
                <Route path={"/ex10"} element={<Ex10/>}/>
            </Routes>
        </div>
    )
}


