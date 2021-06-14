import React, { Component } from 'react'
import Modal from 'react-awesome-modal';

import "../css/donateButton.css"

export default class DonateButton extends Component {
    state = {
        showModal: false
    }

    render() {
        return (
            <React.Fragment>
                {this.props.is_header ?
                <div style={{cursor: "pointer"}} onClick={() => this.setState({ showModal: true })} className="icon-wrapper"><i className="fa fa-handshake-o"></i>Doniraj</div> : 
                <div className="button-wrapper">
                    <button style={{textTransform: "uppercase"}} onClick={() => this.setState({ showModal: true })}>Doniraj</button>
                </div>}
                
                <Modal visible={this.state.showModal} width="500" height="400" effect="fadeInUp" onClickAway={() => this.setState({showModal: false})}>
                    <div className="modal-wrapper">
                        <h1>Doniraj</h1>
                        <p>Donacijom pomažate i aktivno učestvujete u spašavanju, lečenju i ostalim propratnim troškovima životinja za čija se prava neprestano borimo!</p>
                        <div className="credit-cards">
                            <div className="icon-wrapper"><i className="fa fa-paypal"></i>support@levijatan.org</div>
                            <div className="icon-wrapper"><i className="fa fa-credit-card"></i>190-16980-69</div>
                        </div>
                        <div className="button-wrapper">
                            <button onClick={() => this.setState({showModal: false})}>U redu</button>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}
