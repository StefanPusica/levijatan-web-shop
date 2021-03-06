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
                            <h1>POSETITE NAS NA DRU??TVENIM MRE??AMA</h1>
                        </div>
                        <DonateButton />
                        <div className="footer-text">
                            <div className="footer-title">Pri??a o grofu</div>
                            <p>Grof je bio pit bull prona??en krajem oktobra 2016. Le??ao je sam i napu??ten na betonu blizu aerodroma, a njegovo lice prepuno dubokih o??iljaka jasno je otkrivalo da je bio zlostavljan, mu??en i teran da se bori u ringu. Uprkos te??koj pro??losti i velikim bolovima koje je danima trpeo, Grof je jo?? uvek imao veliko srce. I posle svega kroz ??ta je pro??ao skupio je hrabrost da nam pru??i poverenje. Pored ljubavi prema ljudima koju je i dalje imao u svom srcu imao ju je i prema svom drugaru Titu, me??ancu koga smo istog dana spasili iz romskog naselja.</p>
                            <p>Borba za njegov ??ivot trajala je punih mesec dana. Ipak bolesti bubrega i srca bile su ja??e ??ak i od na??e ??elje i velikog truda da Grof dobije drugu priliku za ??ivot pun ljubavi i po??tovanja kakav je zaslu??ivao. Brinuli o njemu 24 sata na dan najbolje ??to smo znali, ali ipak na?? Grof preminuo je 25.11.2016.</p>
                            <p>Veli??inu Grofovog srca i ??ivota ose??amo svakodnevno i verujemo da smo promenili Njegov svet tih poslednjih mesec dana, kao ??to je On nepovratno promenio na?? i povezao sve nas zauvek.</p>
                            <p>Grofino na??a, ??ivi?? u nama i kroz nas! <br />Hvala Ti!</p>
                            <p>Tvoj Levijatan Team</p>
                            <p className="footer-text-desc"><span>??</span>Kroz Grofa video sam sve pse koje smo spasili i sve pse koje ??emo tek spasiti.<span>??</span></p>
                            <p className="footer-text-desc">Pavle Bihali</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

