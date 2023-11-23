import React from "react";
import Reviews from "./main-files/reviews";
import SideBar from "./main-files/asidiks";
import {MainSlider} from "./main-slider/main-slider";
import {QuickCarInstallation} from "./QuickCarInstallation/QuickCarInstallation";
import {Komb} from "./main-files/komb";
import {Komb2} from "./main-files/komb-2";
import {CarCards} from "./carCards/carCards";
import {CollectionsSlider} from "./ OurCollections/collections";
import {CompetitorsJs} from "./ competitors/competitorsJs";
import {FormPraca2} from "./formPraca4/formPraca2";
import GradientCards from "./gradient/GradientCards";
import Basket from "./basket/Basket";




class MainJs extends React.Component{
    render() {
        return(
            <>
                <MainSlider />
                <QuickCarInstallation />
                <div className={"container"}>
                    <CarCards />
                </div>
                <CollectionsSlider />
                <div className={"container"}>
                    <CompetitorsJs sales="от 10 до 25 %"/>
                    <Reviews />
                    <Basket/>
                </div>
            </>
        )
    }
}

export default MainJs