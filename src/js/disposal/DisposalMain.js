import React from 'react';
import styles from './DisposalMain.module.css'
import {BreadCrumbs} from "../../components/breadCrumps";
import DisposalTitle from "./DisposalTitle/DisposalTItle";
import {CreditForm} from "../credit/creditFrom/CreditForm";
import FutureCar from "./FutureCar/FutureCar";
import BuyInCredit from "./BuyInCredit/BuyInCredit";
import TraideIn from "./TradeIn/TraideIn";
import PersonalInfo from "./PersonalInformation/PersonalInfo";
import Advantage from "./Advantage/Advantage";
import PurchaseTerms from "./PurchaseTerms/PurchaseTerms";
import ParticipationProgramme from "./ParticipationProgramme/ParticipationProgramme";
import BTNNoti from "../page_1/main/BtnNoti/BTNNoti";

const DisposalMain = () => {
    return (
        <>
            <section className={styles.disposalMainBox}>
                <div className={"container"}>
                    <BreadCrumbs/>
                    <DisposalTitle percent={'1,9'}/>
                </div>
            </section>
            <div className="container">
                <CreditForm/>
                <FutureCar/>
                <BuyInCredit/>
                <TraideIn/>
                <PersonalInfo/>
                <Advantage/>
                <PurchaseTerms/>
            </div>
            <ParticipationProgramme/>
            {/*<BTNNoti/>*/}
        </>
    );
};

export default DisposalMain;