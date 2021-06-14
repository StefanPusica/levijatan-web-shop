import React, { Component } from "react";
import "../css/virtualFoster.css";
import Collapsible from "react-collapsible";
import CollapseCard from "../components/CollapseCard";
import notify from "../utils/notify";
import axios from "../http/index";

export default class VirtualFoster extends Component {

  state = {
    dogs: []
  }

  componentDidMount() {
    axios.get("/dogs")
      .then(response => this.setState({ dogs: response.data }))
      .catch(error => notify("ERROR!", `Problemi na serveru, kontaktirajte inzenjera! ${error.message}`, "danger"))
  }

  render() {
    return (
      <div className="virtual-foster">
        <h1 className="title">Virtuelni udomitelj</h1>
        <div className="paragraf">
          <p className="bold-text">Šta znači virtualno udomljavanje ?</p>
          <p>
            Virtualno udomljavanje kod Fondacije „Pokret Levijatan“ znači da
            štićenika svojom mesečnom donacijom pomažete kako bi isti bio
            smešten u za tu namenu registrovanom smeštaju sve do udomljenja.
            Svaki virtualni udomitelj imaće mogućnost ukoliko to želi da svog
            štićenika prati tokom njegovog smeštaja i oporavka putem određene
            aplikacije, gde će imati direktan uvid u to kako napreduje oporavak
            štićenika uz dobijanje svih potrebnih informacija, fotografija i
            sminaka. Virtualni udomitelj će imati priliku lično upozna svog
            štićenika ukoliko to bude želeo.
          </p>
          <p>
            Virtualno udomljavanje je ugovorna saradnja između virtualnog
            udomitelja koji ima želju da finansijski pomaže određenog štićenika
            i Fondacije „Pokret Levijatan“ koja je preuzela brigu o životinji.
          </p>
          {/* <p className="expand">Saznaj vise <i className="fa fa-sort-down"></i></p> */}
          <Collapsible trigger="Saznaj vise">
            {/* <div className="paragraf"> */}
            <p className="bold-text">Ko može biti virtualni udomitelj ?</p>
            <p>
              Virtualni udomitelj može biti pravno ili punoletno fizičko lice .
            </p>
            <p className="bold-text">Zašto su važni virtualni udomitelji ?</p>
            <p>
              Među našim štićenicima je mnogo životinja koje zahtevaju duži
              boravak u registrovanim smeštajima i takođe im je potreban duži
              vremenski period do pronalaska idealnog doma prema njihovim
              potrebama. Obzirom da se Fondacija „Pokret Levijatan“ finansira
              isključivo od donacija te kako je obezbeđenje sigurnog smeštaja,
              veterinarske nege i brige, hrane i ostalih potrebština zaista
              veliki projekat to nam je vaša odluka da postanete virtualni
              udomitelj značajna finansijska podrška.
            </p>
            <p>
              Poklanjajući pažnju našim štićenicima uviđamo da životinje imaju
              potrebu, želju i pravo na život, kao i da mnogi od njih za
              oporavak i ponovno sticanje poverenje u ljude zahtevaju duži
              vremenski period, njihov život zavisi od naše i vaše pomoći.
              Ukoliko ste mišljenja da je naš moto ispravan bićemo zahvalni za
              vašu podršku. Reči podrške i pohvale su uvek dobrodošle, nama i
              našim volonterima daju priznanje za dobro obavljene radnje, ali na
              žalost sa tim ne možemo nahranit, veterinarski zbrinuti ili
              omogućiti preko potrebne hiruške intervencije.
            </p>
            <p>
              Naše životinje su uglavnom spašene sa ulice u teškim i životno
              ugroženim stanjima kojima je hitno potreban adekvatan smeštaj,
              posebna veterinarska negam, posebna hrana i još mnogo toga u
              zavisnosti od stanja životinje a naša je želja i misija da im to
              obezbedimo. Zlostavljane životinje se vremenom kroz adekvatnu negu
              i socijalizaciju naviknu na boravak sa ljudima i imaju kvalitetan
              i ispunjen život. Nakon više meseci brige o životinjama u
              smeštajima ispratili smo veliki broj pasa i mačaka u nove i
              sigurne domove te znamo da trud oko njih zaista vredi.
            </p>
            <p className="bold-text">
              Koji od naših štićenika može biti u programu virtualnog
              udomljavanja ?
            </p>
            <p>
              Za virtualno udomljavanje predlažemo životinje koje su već duži
              vremenski period u smeštaju, kojima je neophodno više vremena da
              pronađu svoj dom ili njihovo zdravstveno stanje zahteva duži
              vremenski period oporavka. To mogu biti mladunci životinja,
              životinje sa teškim povredama, zlostavljane životinje, životinje
              sa hroničnim bolestima i dr. Mnogi od njih će ubrzo zakoračati u
              nove domove dok će neki od njih u smeštaju biti veći deo svog
              života.
            </p>
            <p className="bold-text">Koja su prava virualnog udomitelja ?</p>
            <p>
              Svaki virtualni udomitelj imaće mogućnost ukoliko to želi da svog
              štićenika prati kroz smeštaj i oporavak putem određene aplikacije.
              Fondacija „Pokret Levijatan“ će virtualnim udomiteljima davati
              informacije o trenutnom stanju životinje uz fotografije i video
              snimke, takođe virtualni udomitelj na svoj lični zahtev može i
              upoznati svog štićenika.
            </p>
            <p className="bold-text">
              Koliki je iznos donacije virtualnog udomitelja i koji troškovi se
              tim iznosom pokrivaju ?
            </p>
            <p>
              Donacija virtualnog udomitelja u minumumu iznosi 20 eura do
              maksimuma iznosa koji sami izaberete i koristi se isključivo za
              nadoknadu smeštaja psa koji na mesečnom nivou iznosi između 100 i
              150 eura. U zavisnosti od visine donacije možete izabrati da
              pokrijete i veterinarske troškove za izabranu životinju.{" "}
            </p>
            <p className="bold-text">Kako postati virtualni udomitelj ?</p>
            <p>
              Ispunjavanjem formulara za virtualnog udomitelja u kome navodite
              izabranog štićenika kao i iznos mesečne donacije smatramo da
              možemo računati na vas sve do raskida saradnje. Imate mogućnost
              samostalnog izbora štićenika Fondacije „Pokret Levijatan“ kome
              želite da finansijski pomognete ili nakon razgovora sa našim
              volonterima možete izabrati štićenika koga mi u tom trenutku
              preporučimo.
            </p>
            <p className="bold-text">
              Da li mogu biti jedini virtualni udomitelj određenoj životinji ?
            </p>
            <p>
              Jedini virtualni udomitelj možete postati ukoliko svojom donacijom
              u potpunosti pokrijete troškove smeštaja koji u zavisnosti od
              zdravstvenog stanja životinje i drugih faktora mesečno iznose
              između 100 i 150 eura. Ukoliko vaša donacija ne pokriva celokupni
              mesečni iznos smeštaja tražiće se određeni broj virtualnih
              udomitelja do potpunog namirenja mesečnih troškova.
            </p>
            <p className="bold-text">
              Na koji način se vrši uplata donacije za virtualnog udomitelja ?
            </p>
            <p>
              Uplatom donacije u iznosu koji ste sami izabrali na račun
              Fondacije „Pokret Levijatan“ putem :
            </p>
            <p>
              paypal aplikacije : support@levijatan.org
            </p>
            <p>Dinarski račun: 190 -16980-69</p>
            <p>Uplate iz inostranstva ( instrukcije ):</p>
            <p>Fondacija Pokret Levijatan, Makedonska 21, 11000 Beograd</p>
            <p>IBAN: RS35190007090000004725</p>
            <p>SWIFT / BIC : JMBRSBG</p>
            <p>Svrha uplate je CHAR, obavezno dodati ime štićenika.</p>
            <p>
              Virtualni udomitelj će nakon izvršene uplate obavestiti volontera
              Fondacije „Pokret Levijatan“ da je uplata izvršena radi lakše
              koordinacije i organizacije.
            </p>
            <p className="bold-text">
              Kako raskinuti dogovoreno virtualno udomljenje?
            </p>
            <p>
              Prekid saradnje sa virtualnim udomiteljem može se ostvariti u
              svakom trenutku po želji virtualng udomitelja, dovoljno je da
              popunjeni formular pošaljete na našu mail adresu sa naznakom za
              prekid saradnje.
            </p>
            <p className="bold-text">Šta ako se moj štičenik udomi?</p>
            <p>
              U slučaju da vaš izabrani štićenik bude udomljen o ćete biti
              obavešteni i saradnja sa virtualnim udomiteljem se prekida. U
              slučaju da želite da nastavite saradnju virtualnog udomljavanja to
              možete nastaviti popunjavanjem formulara u vezi drugog štićenika.
            </p>
            <p className="bold-text">Da li mogu da podsetim svog štičenika?</p>
            <p>
              {" "}
              U dogovoru sa našim volonterima vašeg izabranog štićenika možete i
              posetiti u koliko njegovo trenutno stanje to bud dozvoljavalo.
            </p>
            <p className="bold-text">
              Da li su moji lični podaci o virtualnom udomljavanju javni ?
            </p>
            <p>
              Fondacija „Pokret Levijatan“ se obavezuje da će lične podatke
              virtualnog udomitelja čuvati u skladu sa zakonom.
            </p>
            <p className="bold-text">
              Da li sam ja stvarni vlasnik svog štićenika ?
            </p>
            <p>
              Virtualni udomitelj nije stvarni vlasnik životinje koju donira
              obzirom da je vlasništvo životinje regulisano Zakonom o dobrobiti
              životinje koje podrazumeva obavezno označavanje životinje
              mikročipom i jedino na taj način možete postati stvarni vlasnik
              životinje.
            </p>
            <p className="bold-text">Da li mogu da udomim svog štićenika ?</p>
            <p>
              Udomljavanje životinja o kojima brine Fondacija „Pokret Levijatan“
              se vrši uz apliciranje i popunjavanje formulara za određenu
              životinju, te se nakon provere navoda iz prijave vrši selekcija
              potencijalnih domova do pronalaska najidealnijeg te i virtualni
              udomitelj može aplicirati za udomljavanje štićenika koga on pomaže
              ili bilo kog drugog.
            </p>
            <p className="bold-text">
              Da li imam prava da donosim odluke koje se tiču mog štićenika ?
            </p>
            <p>
              Fondacija „Pokret Levijatan“ donosi odluke u vezi sa izborom
              smeštaja, veterinara i izborom udomitelja/stvarnog vlasnika a sve
              u skladu sa zakonom, te virtualni udomitelj nema prava da odlučuje
              o tome.
            </p>
            <p>
              U koliko imate dodatnih pitanja molimo vas da nam se obratite
              putem mail adrese
            </p>
            {/* </div> */}
          </Collapsible>
        </div>
        <div className="dogs">
          {this.state.dogs.map(dog => {
            return <CollapseCard 
              key={dog.id} 
              title="Detaljnije" 
              dog={dog} 
              name={dog.name} 
              sex={dog.sex}
              old={dog.old}
              castration={dog.castration}
              vaccinated={dog.vaccinated}
              performance={dog.performance}
              desc={dog.desc}
              />
          })}
        </div>
      </div>
    );
  }
}
