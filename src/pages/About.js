import React from 'react';
import DonateButton from "../components/DonateButton";

import '../css/about-us.css'

const About = () => {
    return (
        <div className="about-us">
            <div className="wrapper">
                <h1>O nama</h1>
                <p>Pokret Levijatan  spontano je formiran 2015. godine u Beogradu i od tada danonoćno spašava i leči životno ugrožene i zlostavljane životinje. Ovaj samoodrživi i nezavisni Pokret nastao je kao posledica sistemskog problema i nesprovođenja Zakona o zaštiti životinja, te svojim delovanjem apeluje na potpunu primenu i pridržavanje istog.</p>
                <p>Kao jedini pokret ovoga tipa na EX –YU području, zalažemo se za zaustavljanje nehumanih radnji, kao što je svesno povređivanje životinja, izgladnjivanje, izrabljivanje i izbacivanje na ulicu. Svojim aktivnostima želimo da skrenemo pažnju na one koji se na neprimeren i neprihvatljiv način odnose prema životinjama. Radimo i na smanjenju prekomerne populacije, ali i pružamo potpunu zdrastvenu negu kako bi sve životinje koje smo u mogućnosti izlečili.</p>
                <p>Jedan od naših primarnih ciljeva jeste otvoriti regionalna prihvatilišta, u kojima će sve životinje imati najbolje moguće uslove za rehabilitaciju i šansu za novi, bolji i kvalitetan život.</p>
                <p>Hvala vam svima što podržavate Levijatan i mi vam obećavamo da nas ništa i niko ne može i neće zaustaviti u promovisanju prava životinja, kao i da nikada nećemo odustati od ljudi koji zlostavljaju životinje kako bi ih vratili na pravi put.</p>
                <DonateButton />
            </div>
        </div>
    );
}

export default About;
