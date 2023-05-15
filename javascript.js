function FunkcijaBojana() {

    document.getElementById("cgi").title = 'CGI(Computer Generated Image) ili na srpskom Kompjuterski Generisana Slika je primena za računarsku grafiku za stvaranje ili doprinos slikama u mnogim umetnostima a najviše u oblasti filma.CGI kojim se mi bavimo i koji mi izrađujemo je zapravo 3-D računarska grafika koja se koristi za stvaranje likova, scena i specijalnih efekta u filmovima raznih žanrova.Naše faze izrade se sastoje u što boljem razumevanju onoga što klijet hoće i najboljoj mogućoj realizaciji istog.';
    document.getElementById("imovie").title = 'Imovie je softver razvijen od strane Apple namenjen za editovanje kratkih video snimaka, mi podižemo rad sa Imovie-jem na viši nivo tako što kompleksnije scene i kadrove popravljamo putem ovog naizgled banalnog softvera za nešto kompleksno kao čitav film jer smo uočili neke funkcije u Imovie koje mogu biti upotrebljene za krupne kadrove. Naš rad sa Imovie-jem je ujedno i jeftinija opcija editovanja video snimaka pošto nije namenjena konkrentnoj komercijalnoj upotrebi.';
    document.getElementById("soundtrack").title = 'Kaže se da neke pesme pamtimo po filmovima ali i filmove pamtimo po pesmama, zbog toga mi u Bojana Industries smatramo da je filmska muzika jedan od glavnih aspekata dobrog i filmova i pravi manifest njegove orginalnosti. Koriteći najnovije tehnologije i softvere mi popravljamo već postojeće demoe za filmsku muziku ili radimo sa izvođačima od samog početka na projektu koristeći naše resurse.';

}

function myFunction() {

    document.getElementById("merch1").innerText = "travisscott.com";

}

function myFunction2() {
    document.getElementById("merch2").textContent = "theweeknd.com";
}

function validacijaCV() {

    if (document.forma.Ime.value == "") {
        alert("Molimo unesite vaše ime!");
        document.forma.Ime.focus();
        return false;
    }
    if (document.forma.Prezime.value == "") {
        alert("Molimo unesite vaše prezime!");
        document.forma.Prezime.focus();
        return false;
    }

    if (document.forma.MailAdresa.value == "") {
        alert("Molimo unesite vaš mail!");
        document.forma.MailAdresa.focus();
        return false;
    }

    if (document.forma.BrojTelefona.value == "") {
        alert("Molimo unesite vaš broj telefona!");
        document.forma.BrojTelefona.focus();
        return false;
    }


    if (document.forma.RadnoIskustvo.value == "") {
        alert("Molimo unesite vaše prezime!");
        document.forma.RadnoIskustvo.focus();
        return false;
    }




    if (document.forma.poslovi.value == "") {
        alert("Molimo obeležite posao za koji aplicirate!");
        document.forma.poslovi.focus();
        return false;
    }



    if (document.forma.Obrazovanje.value == "") {
        alert("Molimo unesite vaše obrazovanje!");
        document.forma.obrazovanje.focus();
        return false;
    }


    if (document.forma.StraniJezici.value == "") {
        alert("Molimo popunite koje strane jezike znate!");
        document.forma.StraniJezici.focus();
        return false;
    }


    if (document.forma.hobiji.value == "") {
        alert("Molimo unesite vaše hobije i neke lične osobine!");
        document.forma.hobiji.focus();
        return false;
    }
    return (true);
}
function validateIme() {
    var nameValue = ime.value;
    var surnameValue = prezime.value;
    var regexp = /\b[^\d\s]+\b/g;
    var count = 0;
    while (regexp.exec(nameValue)) ++count;
    if (count > 1) {

        alert('Ime ne može imati više od 1 reči');
    } else if (count < 1) {

        alert('Ime mora imati makar jednu reč');
    } else {

    }



}
function validatePrezime() {
    var surnameValue = prezime.value;
    var regexp = /\b[^\d\s]+\b/g;
    var count = 0;
    while (regexp.exec(surnameValue)) ++count;
    if (count > 1) {

        alert('Prezime ne može imati više od 1 reči');
    } else if (count < 1) {

        alert('Prezime mora imati makar jednu reč');
    } else {

    }

}
function proveraBroja() {
    var nameValue = ime.value;
    var surnameValue = prezime.value;
    var regexp = /\b[^\d\s]+\b/g;
    var count = 0;
    while (regexp.exec(nameValue)) ++count;


    if (/\d/.test(ime.value)) {
        alert('Ime ne može sadržati broj');




    } else {

    }

    if (/\d/.test(prezime.value)) {
        alert('Prezime ne može sadržati broj');




    } else {

    }

}
function duzinaTeksta() {
    var textBox = document.getElementById("tekst");
    var textLength = textBox.value.length;
    if (textLength > 200) {
        alert('Vaš tekst je predugačak! Maksimalan unos je 20 karaktera!');
        textBox.style.backgroundColor = "#FF0000";
    }
    else if (20 < textLength > 200) {
        //green
        textBox.style.backgroundColor = "#00FF00";
    }
}



function validacijaTelefona(telefon) {
    var originalPhoneNumber = telefon.value;
    var phoneRe = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var digits = telefon.replace(/\D/g, "");
    return phoneRe.test(digits);
}

function klikSlika() {
    var el = document.getElementById("cgibefore");
    el.setAttribute("src", "cgiafter.jpg")
}

function restartSlika() {
    var el = document.getElementById("cgibefore");
    el.setAttribute("src", "cgibefore.jpg")
}
