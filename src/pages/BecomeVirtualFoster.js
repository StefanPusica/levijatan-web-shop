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
                        Molimo Vas da prilikom popunjavanja upitnika o virtualnom udomljenju tra??ene podatke
                        unosite pa??ljivo kako bismo u ??to kra??em roku ostvarili saradnju :
                    </p>
                    <p className="input-text">
                        <div className="main-text">1. Podaci o uplatiocu (fizi??ko ili pravno lice):</div>
                        <p className="p-text">Ime i prezime / Naziv firme<span>*</span></p>
                        <input type="text" className="styled-input" value={nameCompany} onChange={(e) => setNameCompany(e.target.value)}></input>
                        <p className="p-text">E-mail<span>*</span></p>
                        <input type="text" className="styled-input" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <p className="p-text">PIB/Mati??ni broj (za pravna lica)</p>
                        <input type="number" className="styled-input" value={pib} onChange={(e) => setPib(e.target.value)}></input>
                        <p className="p-text">Kontakt telefon<span>*</span></p>
                        <input type="number" className="styled-input" value={contact} onChange={(e) => setContact(e.target.value)}></input>
                    </p>
                    <p className="input-text">
                        <div className="main-text">2. Ozna??ite da li ??elite da budete imenovani ili ??elite da Va??a donacija ostane
                        anonimna:</div>
                        <div className="check-text">
                            <input id="check" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} type="checkbox" className="styled-input"></input>
                            <p className="p-text">??elim da budem imenovan/na.</p>
                        </div>
                        <div className="input-text-paragraph">Ukoliko ??elite da budete imenovani, upi??ite kojim imenom ??elite da Vas oslovljavamo:</div>
                        <p className="p-text">Ime/Nadimak:</p>
                        {(checkbox === true) ? <input type="text" className="styled-input" value={nickname} onChange={(e) => setNickname(e.target.value)}></input>  : 
                        <input type="text" disabled className="styled-input" value={nickname} onChange={(e) => setNickname(e.target.value)}></input> 
                        }
                    </p>
                    <p className="input-text">
                        <div className="p-text" >
                            <div className="main-text">Mese??ni iznos koji ??elim da uplatim: (ozna??ite valutu)<span>*</span></div>
                            <input className="styled-input" type="text" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                        </div>
                        

                        <div className="input-text-paragraph">Uplatu mese??nog iznosa koji ste sami izabrali mo??ete izvr??iti putem slede??ih ra??una:</div>
                        <div className="input-text-paragraph">- PayPall-a: <a href="mailto:support@levijatan.org">support@levijatan.org</a></div>
                        <div className="input-text-paragraph">- Dinarski ra??un 190 -16980-69</div>
                        <div className="input-text-paragraph">- Uplate iz inostranstva: Fondacija Pokret Levijatan, Makedonska br. 21, 11000
                            Beograd; IBAN: RS35190007090000004725; SWIFT / BIC : JMBNRSBG</div>
                        <div className="input-text-paragraph">*Obavezno dodati ime ??ti??enika kao svrhu uplate</div>
                    </p>
                    <p className="input-text">
                        <div className="main-text">4. Uplatu mese??nog iznosa vr??i??u:</div>
                        <div className="input-text-paragraph">a. 5-og u mesecu</div>
                        <div className="input-text-paragraph">b. 15-og u mesecu</div>
                        <div className="input-text-paragraph">c. 25-og u mesecu</div>
                    </p>
                    <p className="input-text">
                        <div className="main-text">5. Navedite ime ??ivotinje koju ??elite finansijski pomagati:</div>
                        <input value={animalName} className="styled-input" onChange={(e) => setAnimalName(e.target.value)}></input>
                        <div className="input-text-paragraph">Ispunjavanjem jednog upitnika mo??ete postati virtualni udomitelj samo jedne ??ivotinje
                            koju ste sami izabrali. Ukoliko ??elite da udomite vi??e ??ivotinja, mo??ete popuniti vi??e
                            upitnika. U slu??aju da u jednom upitniku navedete vi??e ??ivotinja, posta??ete virtualni
                            udomitelj prve navedene ??ivotinje.
                        </div>
                        <div className="input-text-paragraph">Ukoliko ne mo??ete da se odlu??ite samo za jednu ??ivotinju, mo??ete ostati neodlu??ni i
                            umesto imena ??ivotinje upi??ite ???virtualno udomljenje??? i samim tim podr??avate sve
                            ??ivotinje koje su trenutno u sme??taju.
                        </div>
                        <div className="input-text-paragraph">Tako??e, ukoliko ne mo??ete da se odlu??ite kojoj bi ste ??ivotinji postali virtualni udomitelj
                            mo??ete se preko na??ih volontera na dru??tvenim mre??ama ili mail-om informisati kojoj
                            ??ivotinji je u tom trenutku to najpotrebnije.
                        </div>
                        <div className="input-text-paragraph">*Ovim potvr??ujem da sam upoznat/a i sla??em se sa pravilima virtualnog udomljavanja.
                            Za potrebe virtuelnog udomljavanja i informisanja virtuelnog udomitelja, dozvoljavam
                            Fondaciji ???Pokret Levijatan??? da koristi navedene li??ne podatke, pri ??emu ??e se Fondacija
                            ???Pokret Levijatan??? strogo pridr??avati zakona koji reguli??e ovu oblast.
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
                        })} >Po??alji</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
