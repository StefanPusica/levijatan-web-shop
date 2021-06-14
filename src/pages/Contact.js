import React, { Component } from 'react'
import '../css/contact.css'
import $ from 'jquery';
export default class Contact extends Component {
    state = {
        imePrezime: "",
        email: "",
        poruka: ""
    }

    componentDidMount() {
        $( ".input" ).focusin(function() {
            $( this ).find( "span" ).animate({"opacity":"0"}, 200);
        });
          
        $( ".input" ).focusout(function() {
            $( this ).find( "span" ).animate({"opacity":"1"}, 300);
        });
    }

    sendEmail(event) {
        event.preventDefault();
        
        window.open("mailto:contact@levijatan.org?subject=Message From Website&body=Name: " + this.state.imePrezime + "<br>Message: " + this.state.poruka )
    }
    render() {
        return (
            <div className="contact">
                <div className="wrapper">
                <h1>Contact</h1>
                <form>
                    <div className="wrapper-form-top">
                    <div className="input name">
                        <input type="text" value={this.state.imePrezime} onChange={(event) => this.setState({ imePrezime: event.target.value })} placeholder="Ime i prezime" />
                    <span><i className="fa fa-user"></i></span>
                    </div>
                    <div className="input email">
                        <input value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} type="email" placeholder="Email" />
                    <span><i className="fa fa-envelope-o"></i></span>
                    </div>
                    </div>
                    <textarea value={this.state.poruka} onChange={(event) => this.setState({ poruka: event.target.value })} placeholder="Poruka"></textarea>
                    <div className="button-wrapper">
                        <button onClick={(event) => this.sendEmail(event)} type="submit">Posalji poruku</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
