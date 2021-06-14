import React, { useEffect, useState } from 'react';
import '../css/adopt.css'
import "../css/virtualFoster.css";
import notify from "../utils/notify";
import axios from "../http/index";
import CollapseCard from "../components/CollapseCard";
const Adopt = () => {
    const [dogs, setdogs] = useState([])
    useEffect(() => {
        axios.get("/dogs")
            .then(response => setdogs(response.data))
            .catch(error => notify("ERROR!", `Problemi na serveru, kontaktirajte inzenjera! ${error.message}`, "danger"))
    })
    return (
        <div className="adopt">
            <div>
                <h1>Udomi štićenika</h1>
                {/* <p>Cooming soon</p> */}
                <div className="dogs">
                    {dogs.map(dog => {
                        return <CollapseCard adopt={true} key={dog.id} title="Detaljnije" dog={dog}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Adopt;
