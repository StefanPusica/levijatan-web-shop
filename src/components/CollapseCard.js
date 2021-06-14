import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import Modal from "./Modal";
import "../css/collapse.css";
import { Link } from 'react-router-dom'

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  // getModalStyle is not a pure function, we roll the style only on the first render

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }


  return (
    <div className="accordion__section">
      <div className="collapse-img">
        <img alt={props.dog.id} src={props.dog.img}></img>
      </div>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text">
          <p>Ime: {props.dog.name}</p>
          <p>Pol: {props.dog.sex}</p>
          <p>Godine: {props.dog.old}</p>
          <p>Kastriran: {props.dog.castration}</p>
          <p>Vakcinisan: {props.dog.vaccinated}</p>
          <p>Osobine: {props.dog.performance}</p>
          <p>Opis povrede: {props.dog.desc}</p>
          <div className="two-modals">
            {!props.adopt ?<Link to={`/become-virtual-foster/${props.name}`}>
              <button>POSTANI VIRTUELNI UDOMITELJ</button> 
            </Link> : null}
            <Modal btnText="Doniraj" desc={<div><ul><li>1. PAYPAL: support@levijatan.org</li><li>2. Dinarski račun: 190-16980-69</li><li>3. Uplate iz inostranstva (instrukcije):</li><li>Fondacija Pokret Levijatan, </li><li>Makedonska 21, 11000 Beograd</li><li>IBAN: RS35190007090000004725</li><li>SWIFT / BIC: JMBNRSBG</li><li>Obavezno dodati svrhu uplate</li></ul></div>} title="Poštovani, Vašu donaciju možete izvršiti na sledeći način:"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
