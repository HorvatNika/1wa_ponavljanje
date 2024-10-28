//Prvo ćemo uključiti Express.js modul u našu datoteku:
const express = require("express");

const path = require("path");

//Zatim ćemo stvoriti novu Express aplikaciju:
const app = express();
//u varijablu app pohranjujemo objekt koji predstavlja Express aplikaciju

//Pokretanje Express.js poslužitelja - listen metoda
const PORT = 3002; //port na kojem će poslužitelj slušati zahtjeve
//app.listen(PORT); //Express aplikacija sluša na portu 3000

/*Da bismo bili sigurni da se naša aplikacija vrti, dodajemo callback funkciju našoj listen motedi
app.listen(PORT, function() {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});*/

//Definiranje osnovne rute - GET metoda koja obrađuje HTTP GET zahtjev
//app.get("/"); //definiramo rutu/enpoint

//callback funkcija koja se izvršava kada korisnik pošalje zahtjev na tu rutu, prima dva argumenta
//req objekt sadrži informacije o zahtjecu korisnika, res koristimo za slanje odgovora korisniku

//send je osnovna metoda res objekta, služi za slanje jednostavnog odgovora korisniku
//  json šalje podatke u obliku JSON-a, sendFile šalje datoteku
/*app.get("/", function(req, res) {
    res.send("Hello, world!");
});*/
//ili arrow callback 
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + "public" + "about.html"));
}); //Definiranje rute za GET /

app.get("/users", (req, res) => {
    const users = [
        {id: 1, Ime: "Nika", Prezime: "Horvat"},
        {id: 2, Ime: "Tomi", Prezime: "Horvat"},
        {id: 3, Ime: "Oskar", Prezime: "Horvat"},
    ];
    res.json(users); //koristi se za slanje podataka u JSON formatu kao odgovor na HTTP zahtjev
}); //Definiranje rute ta GET /users

//Pokretanje poslužitelja
app.listen(PORT, () => {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});


/*app.listen(PORT, (error) => {
    if(error) {
        console.error(`Greska prilikom pokretanja posluzitelja: ${error.message}`);
    } else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
});*/


//U package.json datoteci definiramo aplikacije koje naš paket koristi 
//node_modules direktorij sadrži sve instalirane pakete i module potrebne za uspješno izvođenje aplikacije
//npm install metoda čita package.json datoteku i intalira sve pakete i module navedene u dependencies i devDependencies dijelovima datoteke
//.gitignore datoteka sadrži popis datoteka i direktorija koje ne želimo dodati u repozitorij
    //echo "node_modules/" > .gitignore
//nodemon index.js


//-- 5 HTTP PROTOKOL -- 
/*
- HTTP je protokol koji se koristi za prijenos podataka na webu
- definira skup pravila i definicija koje omogućuju web preglednicima i poslužiteljima da komuniciraju jedni s drugim
- uključuje zahtjeve (requests) koje klijenti šalju poslužiteljima, te odgovore (responses) koje poslužitelji šalju klijentima

- koristi različite metode za različite vrste zahtjeva:
    - GET se koristi za dohvaćanje podataka
    - POST se koristi za slanje podataka
    - PUT se koristi za ažuriranje
    - DELETE se koristi za brisanje podataka
    - PATCH se koristi za djelomično ažuriranje podataka

- klijent-poslužitelj arhitektura
    - klijent šalje zahtjev poslužitelju, a poslužitelj šalje odgovor klijentu
    - klijent otvara TCP/IP vezu s poslužiteljem, šalje HTTP zahtjev i onda čeka sve dok poslužitelj ne pošalje odgovor

- stateless protorok - svaki zahtjev poslužitelju ne zna ništa o prethodnim zahtjevima
*/


//-- SAMOSTALNI ZADATAK ZA VJEŽBU --
/*
mkdir public - stvoriti direktorij /public
*/