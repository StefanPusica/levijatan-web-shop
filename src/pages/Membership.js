import React, { Component } from 'react'
import cards from '../json/cards.json';
import DonateButton from "../components/DonateButton";

import "../css/membership.css";
export default class Membership extends Component {
    render() {
        return (
            <div className="membership-page-wrapper">
                <div className="wrapper">
                <div className="title"><h1>Članska Karta</h1></div>
                <div className="content-wrapper">
                    <p>Hvala Vam što podržavate Levijatan.</p>
                    <div className="cards">
                        {cards.map(card => {
                            return <div key={card.desc} className="card">
                                <div className="card-image"><img alt={card.alt} src={card.img}></img></div>
                                <p>{card.desc}</p>
                            </div>
                        })}
                    </div>
                    <p className="desc-payment">Uplata se vrši unapred, putem našeg dinarskog ili paypal naloga, a onda uz poslate podatke krećemo sa izradom kartica.</p>
                    <div className="credit-cards">
                        <div className="icon-wrapper"><i className="fa fa-paypal"></i>support@levijatan.org</div>
                        <div className="icon-wrapper"><i className="fa fa-credit-card"></i>190-16980-69</div>
                    </div>
                    <DonateButton />
                </div>
                
                </div>
                
            </div>
        )
    }
}
