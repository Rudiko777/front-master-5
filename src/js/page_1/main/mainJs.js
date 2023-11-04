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
                    <div className={"frameBox"}>
                        <div className={"frameBoxInside"}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/_vQEJ227Bi0?si=Je3J7XNbZdoBwdRx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className={"divInsideIframe"}>
                                <span className={"captionBox"}>
                                    Противостояние BMW и Mercedes-Benz
                                </span>
                                <p>
                                    Надежность — один из главных критериев, которые нужно учитывать при покупке авто. Если сравнивать по нему представителей из модельного ряда рассматриваемых производителей, то Mercedes-Benz превосходит BMW. Когда речь идет о классических седанах, то наиболее надежными считаются модели E-Class
                                </p>
                            </div>
                        </div>
                    </div>
                    <GradientCards/>
                </div>
            </>
        )
    }
}

export default MainJs