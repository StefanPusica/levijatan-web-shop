import '../css/header.css'

import React, { Component } from 'react'
import logo from "../images/logo.png";
// import history from "../utils/history";
import DonateButton from "../components/DonateButton";

export default class Header extends Component {
  componentDidMount() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav-mobile-list');
    burger.addEventListener("click", () => {
      burger.classList.toggle("change");
      mobileNav.classList.toggle("show-mobile-nav");
    })

    window.onscroll = function() {myFunction()};

    var header = document.querySelector(".box-shadow");
    let bodyWrapper = document.querySelector(".body-wrapper");

    function myFunction() {
      if (window.pageYOffset > 300) {
        bodyWrapper.classList.add("padding-body")
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
        bodyWrapper.classList.remove("padding-body")
      }
    }
  }

  render() {
    return (
      <div className="wrapper-nav">
        <div className="credit-cards">
          <div className="icon-wrapper"><i className="fa fa-paypal"></i>support@levijatan.org</div>
          <div className="icon-wrapper"><i className="fa fa-credit-card"></i>190-16980-69</div>
          <DonateButton is_header={true}/>
        </div>
        <div className="box-shadow">
        <nav className="wrapper">
          <div className="desktop-nav">
            <div className="nav-left">
              <ul>
                <li><a href="/">Početna</a></li>
                <li><a href="/about">O nama</a></li>
                <li><a href="/education">Edukacija</a></li>
                {/* <li><a href="/urgently">Hitna prijava</a></li> */}
              </ul>
            </div>
            <div className="nav-logo">
              <img alt="logo" src={logo}></img>
            </div>
            <div className="nav-right">
              <ul>
                <li><a href="/membership">Članska Karta</a></li>
                <li><a href="/shop">Prodavnica</a></li>
                <li><a href="/adopt">Udomi</a></li>
                {/* <li><a href="/virtual-foster">Virtuelni udomitelj</a></li> */}
              </ul>
            </div>
          </div>
          <div className="mobile-nav">
            <div className="nav-logo-mobile">
              <img alt="logo" src={logo}></img>
            </div>
            <div className="burger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="nav-mobile-list">
              <ul>
                <li><a href="/">Početna</a></li>
                <li><a href="/about">O nama</a></li>
                <li><a href="/education">Edukacija</a></li>
                {/* <li><a href="/urgently">Hitna prijava</a></li> */}
                <li><a href="/membership">Članska Karta</a></li>
                <li><a href="/shop">Prodavnica</a></li>
                <li><a href="/adopt">Udomi</a></li>
                {/* <li><a href="/virtual-foster">Virtuelni udomitelj</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
    )
  }
}


