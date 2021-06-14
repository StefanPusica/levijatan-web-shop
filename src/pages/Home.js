import React, { Component} from 'react';
import bannerImg from "../images/slikapsa-min.png";
import bannerText from "../images/ukljuciseipodrzinas.png";
import '../css/home.css'
import { Transition } from 'react-spring/renderprops'
import logoNoText from "../images/logo-without-text.png";
import DonateButton from "../components/DonateButton";

export default class Home extends Component {
    render() {
        
        return (
            <div>
                <div className="banner-wrapper">
                    <Transition
                        items={<div className="banner-text-wrapper"><img alt="bannerText" className="banner-text" src={bannerText}></img></div>} keys={item => item}
                        from={{ opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
                        enter={{ opacity: 1, visibility: 'visible' }}
                        leave={{ opacity: 1, visibility: 'visible' }}>
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>
                    <Transition
                        items={<img alt="bannerImg" src={bannerImg}></img>} keys={item => item}
                        from={{ transform: 'translateX(60%)', opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
                        enter={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}
                        leave={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}>
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>
                </div>
                <div className="footer-top">
                    <div className="wrapper home-wrapper">
                        <div className="footer-logo">
                            <img alt="logo" src={logoNoText}></img>
                        </div>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/levijatanudruzenje/"> <i className="fa fa-facebook nf"></i></a>
                            <a href="https://www.instagram.com/pokretlevijatan/"> <i className="fa fa-instagram ni"></i></a>
                            <a href="https://twitter.com/lpokret"><i className="fa fa-twitter nt"></i></a>
                        </div>
                        <div className="footer-tittle">
                            <h1>POSETITE NAS NA DRUŠTVENIM MREŽAMA</h1>
                        </div>
                        <DonateButton />
                        <div className="footer-text">
                            <div className="footer-title">Priča o grofu</div>
                            <p>Grof je bio pit bull pronađen krajem oktobra 2016. Ležao je sam i napušten na betonu blizu aerodroma, a njegovo lice prepuno dubokih ožiljaka jasno je otkrivalo da je bio zlostavljan, mučen i teran da se bori u ringu. Uprkos teškoj prošlosti i velikim bolovima koje je danima trpeo, Grof je još uvek imao veliko srce. I posle svega kroz šta je prošao skupio je hrabrost da nam pruži poverenje. Pored ljubavi prema ljudima koju je i dalje imao u svom srcu imao ju je i prema svom drugaru Titu, mešancu koga smo istog dana spasili iz romskog naselja.</p>
                            <p>Borba za njegov život trajala je punih mesec dana. Ipak bolesti bubrega i srca bile su jače čak i od naše želje i velikog truda da Grof dobije drugu priliku za život pun ljubavi i poštovanja kakav je zasluživao. Brinuli o njemu 24 sata na dan najbolje što smo znali, ali ipak naš Grof preminuo je 25.11.2016.</p>
                            <p>Veličinu Grofovog srca i života osećamo svakodnevno i verujemo da smo promenili Njegov svet tih poslednjih mesec dana, kao što je On nepovratno promenio naš i povezao sve nas zauvek.</p>
                            <p>Grofino naša, živiš u nama i kroz nas! <br />Hvala Ti!</p>
                            <p>Tvoj Levijatan Team</p>
                            <p className="footer-text-desc"><span>«</span>Kroz Grofa video sam sve pse koje smo spasili i sve pse koje ćemo tek spasiti.<span>»</span></p>
                            <p className="footer-text-desc">Pavle Bihali</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

