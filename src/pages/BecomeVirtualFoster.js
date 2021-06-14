import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../css/becomeVirtualFoster.css";
import axios from "../http/index";
import notify from "../utils/notify";
import LoadingSpinner from "../components/LodingSpinner";

export default function BecomeVirtualFoster() {
    const params = useParams();

    const [checkbox, setCheckbox] = useState(false);
    const [nameCompany, setNameCompany] = useState("");
    const [email, setEmail] = useState("");
    const [pib, setPib] = useState();
    const [contact, setContact] = useState();
    const [animalName, setAnimalName] = useState(params.name);
    const [date, setDate] = useState(0);
    const [nickname, setNickname] = useState("");
    const [loading, setloading] = useState(false);
    const [amount, setAmount] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.name])

    const submitHandler = (data) =>{
        setloading(true);
        axios.post("/users/become-virtual-foster", data)
        .then((response) =>{
            setloading(false);
            notify("Hvala", "Uspesno ste poslali prijavu!", "success");
        })
        .catch((error) =>{
            setloading(false);
            notify(
                "Greska!",
                error.response.data.message,
                "danger"
              );
        })
        console.log(data)
    }

    return (
        <div className="become-virtual-foster">
            {loading? <LoadingSpinner /> : null}
            <div className="wrapper">
                <div className="side-text">
                    <p>Fondacija Pokret Levijatan</p>
                    <p>ul. Makedonska br. 21</p>
                    <p>11000 Beograd</p>
                </div>
                <div className="main-form">
                    <div className="main-form-title">
                        UPITNIK O VIRTUELNOM UDOMLJENJU
                    </div>
                    <p>
                        Molimo Vas da prilikom popunjavanja upitnika o virtualnom udomljenju tražene podatke
                        unosite pažljivo kako bismo u što kraćem roku ostvarili saradnju :
                    </p>
                    <p className="input-text">
                        <div className="main-text">1. Podaci o uplatiocu (fizičko ili pravno lice):</div>
                        <p className="p-text">Ime i prezime / Naziv firme<span>*</span></p>
                        <input type="text" className="styled-input" value={nameCompany} onChange={(e) => setNameCompany(e.target.value)}></input>
                        <p className="p-text">E-mail<span>*</span></p>
                        <input type="text" className="styled-input" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <p className="p-text">PIB/Matični broj (za pravna lica)</p>
                        <input type="number" className="styled-input" value={pib} onChange={(e) => setPib(e.target.value)}></input>
                        <p className="p-text">Kontakt telefon<span>*</span></p>
                        <input type="number" className="styled-input" value={contact} onChange={(e) => setContact(e.target.value)}></input>
                    </p>
                    <p className="input-text">
                        <div className="main-text">2. Označite da li želite da budete imenovani ili želite da Vaša donacija ostane
                        anonimna:</div>
                        <div className="check-text">
                            <input id="check" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} type="checkbox" className="styled-input"></input>
                            <p className="p-text">Želim da budem imenovan/na.</p>
                        </div>
                        <div className="input-text-paragraph">Ukoliko želite da budete imenovani, upišite kojim imenom želite da Vas oslovljavamo:</div>
                        <p className="p-text">Ime/Nadimak:</p>
                        {(checkbox === true) ? <input type="text" className="styled-input" value={nickname} onChange={(e) => setNickname(e.target.value)}></input>  : 
                        <input type="text" disabled className="styled-input" value={nickname} onChange={(e) => setNickname(e.target.value)}></input> 
                        }
                    </p>
                    <p className="input-text">
                        <div className="p-text" >
                            <div className="main-text">Mesečni iznos koji želim da uplatim: (označite valutu)<span>*</span></div>
                            <input className="styled-input" type="text" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                        </div>
                        

                        <div className="input-text-paragraph">Uplatu mesečnog iznosa koji ste sami izabrali možete izvršiti putem sledećih računa:</div>
                        <div className="input-text-paragraph">- PayPall-a: <a href="mailto:support@levijatan.org">support@levijatan.org</a></div>
                        <div className="input-text-paragraph">- Dinarski račun 190 -16980-69</div>
                        <div className="input-text-paragraph">- Uplate iz inostranstva: Fondacija Pokret Levijatan, Makedonska br. 21, 11000
                            Beograd; IBAN: RS35190007090000004725; SWIFT / BIC : JMBNRSBG</div>
                        <div className="input-text-paragraph">*Obavezno dodati ime štićenika kao svrhu uplate</div>
                    </p>
                    <p className="input-text">
                        <div className="main-text">4. Uplatu mesečnog iznosa vršiću:</div>
                        <div className="input-text-paragraph">a. 5-og u mesecu</div>
                        <div className="input-text-paragraph">b. 15-og u mesecu</div>
                        <div className="input-text-paragraph">c. 25-og u mesecu</div>
                    </p>
                    <p className="input-text">
                        <div className="main-text">5. Navedite ime životinje koju želite finansijski pomagati:</div>
                        <input value={animalName} className="styled-input" onChange={(e) => setAnimalName(e.target.value)}></input>
                        <div className="input-text-paragraph">Ispunjavanjem jednog upitnika možete postati virtualni udomitelj samo jedne životinje
                            koju ste sami izabrali. Ukoliko želite da udomite više životinja, možete popuniti više
                            upitnika. U slučaju da u jednom upitniku navedete više životinja, postaćete virtualni
                            udomitelj prve navedene životinje.
                        </div>
                        <div className="input-text-paragraph">Ukoliko ne možete da se odlučite samo za jednu životinju, možete ostati neodlučni i
                            umesto imena životinje upišite „virtualno udomljenje“ i samim tim podržavate sve
                            životinje koje su trenutno u smeštaju.
                        </div>
                        <div className="input-text-paragraph">Takođe, ukoliko ne možete da se odlučite kojoj bi ste životinji postali virtualni udomitelj
                            možete se preko naših volontera na društvenim mrežama ili mail-om informisati kojoj
                            životinji je u tom trenutku to najpotrebnije.
                        </div>
                        <div className="input-text-paragraph">*Ovim potvrđujem da sam upoznat/a i slažem se sa pravilima virtualnog udomljavanja.
                            Za potrebe virtuelnog udomljavanja i informisanja virtuelnog udomitelja, dozvoljavam
                            Fondaciji „Pokret Levijatan“ da koristi navedene lične podatke, pri čemu će se Fondacija
                            „Pokret Levijatan“ strogo pridržavati zakona koji reguliše ovu oblast.
                        </div>
                        <div className="date">
                            <div className="date-text">Datum<span>*</span>:</div>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                        </div>
                        <button className="submit" onClick={() => submitHandler({
                            name_company: nameCompany,
                            email: email,
                            pib: pib,
                            mobile_phone: contact,
                            dog_name: animalName,
                            date: date,
                            anonymous: checkbox,
                            nickname: nickname,
                            amount: amount
                        })} >Pošalji</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
