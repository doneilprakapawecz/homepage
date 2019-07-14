//Tablice array[]
let tablica = ['html','css','js'];

let tablica1 = [{
    akcesoria: 'kreda',
    color: 'zielony'
},{
    dom:'mieszkanie',
    ulica: 'chodnik'
}]
console.log(tablica);
let ppush = document.querySelector('.button--push');
console.log(ppush);

tablica.unshift('flex');
//dodaje element na początek tablicy, a resztę elementów przesuwa o jedno miejsce do przodu
tablica.shift();
//usuwa pierwszy element tablicy a resztę przesuwa o jedno miejsce do tyłu
tablica.push('grid');
//dodaje element

//console.log(tablica);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

const button_push = document.querySelector('.button--push');
button_push.addEventListener('click',zmiana);

const button_pop = document.querySelector('.button--pop');
button_pop.addEventListener('click',zmiana);

const button_unshift = document.querySelector('.button--unshift');
button_unshift.addEventListener('click',zmiana);

const button_shift = document.querySelector('.button--shift');
button_shift.addEventListener('click',zmiana);

const button_clear = document.querySelector('.button--clear');
button_clear.addEventListener('click',zmiana)

const button_wypisz=document.querySelector('.button--wypisz')

button_wypisz.addEventListener('click',zmiana);


const work_screen = document.querySelector('.work--screen');

let wpis_js = document.querySelector('.wpis--js');


button_sprawdz = document.querySelector('.button--sprawdz');
button_sprawdz.addEventListener('click',sprawdz);

function sprawdz()
{
    let numer=-1;
    if(wpis_js.value=="push")numer=0;
    if(wpis_js.value=="pop")numer=1;
    if(wpis_js.value=="unshift")numer=2;
    if(wpis_js.value=="shift")numer=3;
   
    if(numer==-1) work_screen.innerHTML = wpis_js.value;
    else work_screen.innerHTML = opis_metod[numer];
}



let opis_metod = ['Metoda "push" dokłada element na koniec tablicy.',
'Metoda "pop" usuwa element z końca tablicy.','Metoda "unshift" dokłada element na początek tablicy.',
'Metoda "shift" usuwa element na z początku tablicy.'," "];
function zmiana()
{
    let numer
    if(this==button_push)numer=0;
   else if(this==button_pop)numer=1;
   else if(this==button_unshift)numer=2;
   else if(this==button_shift)numer=3;
   else if(this==button_clear)numer=4;

   work_screen.innerHTML = opis_metod[numer];
  
}
