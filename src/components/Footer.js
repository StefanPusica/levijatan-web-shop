import React from 'react';
import '../css/footer.css';
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <div className="wrapper">
                    <div className="footer-wrapper">
                        <div className="footer-bottom-box-img">
                            <ul>
                                <li><img alt="logo" src={logo}></img></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Brzi linkovi</li>
                                <li><a href="/about">O nama</a></li>
                                <li><a href="/video-archive">Video Arhiva</a></li>
                                <li><a href="/membership">Članska Karta</a></li>
                                <li><a href="/shop">Prodavnica</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Prodavnica</li>
                                <li><a href="/delivery">Način isporuke</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Clanstvo</li>
                                <li><a href="/">Želite udomiti štićenika</a></li>
                                <li><a href="/membership">Postani član</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-box">
                            <ul>
                                <li className="footer-box-title">Kontakt</li>
                                <li><a href="/contact">Pošalji email</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright"><p>© 2020 Levijatan. All Right Reserved</p></div>
                </div>
            </div>
            
        </footer>
  
    );
}

export default Footer;
