import React, { Component } from 'react';
import Collapsible from "react-collapsible";
import "../css/video.css";
import notify from "../utils/notify";
import axios from "../http/index";  

export default class Video extends Component {
    state = {
        education: []
    }

    componentDidMount() {
        axios.get("/education")
          .then(response => this.setState({ education: response.data }))
          .catch(error => notify("ERROR!", `Problemi na serveru, kontaktirajte inzenjera! ${error.message}`, "danger"))
      }

    render() {
        return (
            <div className="videos-page-wrapper">
                <div className="wrapper">
                <div className="title"><h1>Edukacija</h1></div>
                    <div className="video-wrapper">
                        {this.state.education.map(item => <span ><Collapsible style={{marginTop: 20}} trigger={`${item.text.substring(0, 30)}...`}>{item.text}</Collapsible></span>)}
                    </div>
                </div>
            </div>
        )
    }
}