/*//alert('siema');
console.log('siema, jak masz na imię?');
const imie="Daniel";
let wiek=39;
console.log("Mam na imię "+imie+" i mam "+wiek+" lat");
console.log(`Mam na imię ${imie} i mam ${wiek} lat`);
console.log(`Mam na imię ${imie} 
i mam ${wiek} lat`);

const heading = document.querySelector('.paragrath');
console.log(heading);
const sprawdzam=(wiek<=39)?"Poniżej":"Powyżej";
console.log(sprawdzam);
const grubaStrzala = x => 3*x;
console.log(grubaStrzala(3));

const button = document.querySelector('.guzik');
console.log(button);
let flaga=0;
function zmiana(){
    if(flaga==0)
    {
        document.querySelector('.guzik__press').innerHTML='klik klik';
        flaga = 1;
    }
    else
    {
        document.querySelector('.guzik__press').innerHTML='jeszcze raz';
        flaga = 0;
    }
}

button.addEventListener('click',zmiana);
let zmienna=10;
for(let i = 0; i < zmienna; i++)
{
    console.log(` ${i+1} powtórzenie`);
    if(i == 9)i=-12;
    if(i == -2)i=10;
}
let flaga='a';

console.log('-------------------------------------------');

while(zmienna<=10)
{
    console.log(` ${zmienna} loop`);
    if(flaga=='a')zmienna--;
    else zmienna++;
    if(zmienna<=-20)flaga="b";
    
}

console.log('-------------------------------------------');

zmienna=10;

do
{
    console.log(` ${zmienna} do while`);
    if(flaga=='b')zmienna++;
    else zmienna--;
    if(zmienna==25)flaga='a';

}while(zmienna>10)

console.log('-------------------------------------------');

const burek={
   gatunek: 'pies',
    rasa:'kundel',
    wiek:5,
    charakter:'lagodny'
};
for(let opis in burek)
{
    console.log(`${opis}: ${burek[opis]}`)
}

let opis_metod = ['Metoda "push" dokłada element na koniec tablicy.',
'Metoda "pop" usuwa element z końca tablicy.','Metoda "unshift" dokłada element na początek tablicy.',
'Metoda "shift" usuwa element na z początku tablicy.'," ",'<input class="wartosc" type="text">'];

console.log('-------------------------------------------');

for(let opis_tablicy of opis_metod)
{
    console.log(opis_tablicy);
}
*/
let button = document.querySelector('.header__button--js');
const zawartosc = document.querySelector('.mainheader--js').innerHTML;

let flaga = 0;
const nowa_zawartosc = "zmiana na bociana";
/*button.addEventListener('click', zmiana);
function zmiana() {
    let zamiana = "";
    if (flaga == 0) {
        zamiana = zawartosc;
        flaga = 1;
    }
    else {
        zamiana = nowa_zawartosc;
        flaga = 0;
    }

    document.querySelector('.mainheader--js').innerHTML = zamiana;
}*/
button.addEventListener('click', (e) => {
    let zamiana = "";
    if (flaga == 0) {
        zamiana = nowa_zawartosc;
        flaga = 1;
    }
    else {
        zamiana = zawartosc;
        flaga = 0;
    }

    document.querySelector('.mainheader--js').innerHTML = zamiana;
    document.querySelector('.mainheader--js').classList.toggle('mainheader--red');
});
let visible__menu = document.querySelector('.navigation__list--js')
let swicher = document.querySelector('.navigation__swicher--js');
let opcja1 = swicher.innerHTML;
swicher.addEventListener('click', () => {
    visible__menu.classList.toggle('nawigacja__lista--modyfikacja');
    if (swicher.innerHTML == 'x') swicher.innerHTML = opcja1;
    else swicher.innerHTML = 'x';
});

const gwiazdaSmierci = {
    atak: () => { return console.log(`na rozkaz ${gwiazdaSmierci.wlasciciel}a Bum! Bum!! Bum!!!`) },
    wlasciciel: 'imperator',
    nadzorca: 'darthVader',
    zaloga: 'armiaKlonow',
    liczbaKlonow: 1000
};