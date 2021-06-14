import React, { Component } from "react";
import "../css/urgently.css";
import axios from "../http/index";
import $ from "jquery";
import notify from "../utils/notify";

export default class Urgently extends Component {
  state = {
    imePrezime: "",
    brojTelefona: null,
    adresa: "",
    vrstaZivotinje: "",
    opisZivotinje: "",
    opisPovrede: "",
    stepenUrgentnosti: null,
    slika: "",
    pomocZivotinji: "",
    grad: "",
    vasaNapomena: "",
    errors: {},
    email: "",
  };

  componentDidMount() {
    $(".input-span").focusin(function () {
      $(this).find("span").animate({ opacity: "0" }, 200);
    });

    $(".input-span").focusout(function () {
      $(this).find("span").animate({ opacity: "1" }, 300);
    });
  }

  sendData(data) {
    axios
      .post("/prijave/save", data)
      .then((response) => {
        this.setState({ errors: {} });
        notify("Hvala", "Uspesno ste poslali prijavu!", "success");
      })
      .catch((error) => {
        const errors = error.response.data.errors;
        if (errors) {
          this.setState({ errors: errors });
          return notify("ERROR!", error.response.data.message, "danger");
        }
        notify(
          "Greska!",
          "Doslo je do greske, molimo pokusajte ponovo ili nas kontaktirajte",
          "danger"
        );
      });
  }

  render() {
    return (
      <div className="urgently">
        <div className="wrapper">
          <h1 className="title">HITNA PRIJAVA</h1>
          <h2>Uputstvo za kreiranje linka ka slici</h2>
          <p style={{ fontFamily: "ubuntu" }}>
            Kliknete{" "}
            <a
              href="https://linkpicture.com/en/?set=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              ovde
            </a>{" "}
            da generisete link ka fotografiji, odaberite sliku i kliknite na{" "}
            <b>Upload</b>, a zatim kopirajte <b>Direct Link To Photo:...</b> u
            polje slika
          </p>
          <div className="twoInputs">
            <div className="input-span">
              <input
                placeholder="Ime i prezime"
                type="text"
                className="inp"
                value={this.state.imePrezime}
                onChange={(e) => this.setState({ imePrezime: e.target.value })}
              ></input>
              <span>
                <i className="fa fa-user"></i>
              </span>
            </div>
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.brojTelefona
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Kontakt telefon"
                type="number"
                className="inp field"
                value={this.state.brojTelefona}
                onChange={(e) =>
                  this.setState({ brojTelefona: e.target.value })
                }
              ></input>
              <span>
                <i className="fa fa-mobile"></i>
              </span>
            </div>
          </div>
          <div className="twoInputs">
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.adresa
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Adresa gde se nalaze zivotinje (Tacna lokacija)"
                type="text"
                className="inp"
                value={this.state.adresa}
                onChange={(e) => this.setState({ adresa: e.target.value })}
              ></input>
              <span>
                <i className="fa fa-address-book"></i>
              </span>
            </div>
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.vrstaZivotinje
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Vrsta zivotinje"
                type="text"
                className="inp field"
                value={this.state.vrstaZivotinje}
                onChange={(e) =>
                  this.setState({ vrstaZivotinje: e.target.value })
                }
              ></input>
              <span>
                <i className="fa fa-github-alt"></i>
              </span>
            </div>
          </div>
          <div className="twoInputs">
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.opisZivotinje
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Opis zivotinje (Fizicke karakteristike)"
                type="text"
                className="inp"
                value={this.state.opisZivotinje}
                onChange={(e) =>
                  this.setState({ opisZivotinje: e.target.value })
                }
              ></input>
              <span>
                <i className="fa fa-github-alt"></i>
              </span>
            </div>
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.opisPovrede
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Opis povrede i nacin nastanka povrede"
                type="text"
                className="inp field"
                value={this.state.opisPovrede}
                onChange={(e) => this.setState({ opisPovrede: e.target.value })}
              ></input>
              <span>
                <i className="fa fa-plus-square"></i>
              </span>
            </div>
          </div>
          <div className="twoInputs">
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.slika
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Slika"
                type="url"
                className="inp"
                value={this.state.slika}
                onChange={(e) => this.setState({ slika: e.target.value })}
              ></input>
              <span>
                <i className="fa fa-camera"></i>
              </span>
            </div>
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.stepenUrgentnosti
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Stepen urgentnosti od 1-10 (1 napustena zivotinja, 10 zivotno ugrozena zivotinja)"
                type="number"
                className="inp field"
                value={this.state.stepenUrgentnosti}
                onChange={(e) =>
                  this.setState({ stepenUrgentnosti: e.target.value })
                }
              ></input>
              <span>
                <i className="fa fa-ambulance"></i>
              </span>
            </div>
          </div>
          <div className="twoInputs">
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.pomocZivotinji
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Na koji nacin vi mozete da pomognete u vezi sa tom zivotinjom? (prevoz, smestaj, finansiranje, hrana, itd.)"
                type="text"
                className="inp"
                value={this.state.pomocZivotinji}
                onChange={(e) =>
                  this.setState({ pomocZivotinji: e.target.value })
                }
              ></input>
              <span>
                <i className="fa fa-medkit"></i>
              </span>
            </div>
            <div className="input-span">
              <input
                style={{
                  borderBottom: this.state.errors.grad
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="Grad"
                type="text"
                className="inp field"
                value={this.state.grad}
                onChange={(e) => this.setState({ grad: e.target.value })}
              ></input>
              <span>
                <i className="fa fa-building"></i>
              </span>
            </div>
          </div>
          <div className="twoInputs">
            <div className="input-span email">
              <input
                style={{
                  borderBottom: this.state.errors.email
                    ? "1px solid red"
                    : "1px solid #797c79",
                }}
                placeholder="email"
                type="text"
                className="inp field"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
              <span>
                <i className="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="twoInputs">
            <div className="input-span" style={{ margin: "10px auto" }}>
              <textarea
                style={{ width: "100%" }}
                value={this.state.vasaNapomena}
                onChange={(e) =>
                  this.setState({ vasaNapomena: e.target.value })
                }
                placeholder="Vasa napomena"
              ></textarea>
            </div>
          </div>
          <button
            className="sendButton"
            onClick={() => {
              this.sendData(this.state);
            }}
          >
            Posalji prijavu
          </button>
        </div>
      </div>
    );
  }
}
