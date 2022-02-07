//-----------------------------------------------------------
//     FUNZIONI
//-----------------------------------------------------------

//FUNZIONE ADD NUMBER
function numeriRandom(aaa) {
    let content = '';
	
    content += `<h1>${numero}</h1>`;

    aaa.innerHTML =  content;
}

//FUNZIONE CLEAR NUMBER
function clear(aaa) {
    let content = '';
	
    content += `<h1></h1>`;

    aaa.innerHTML =  content;
}

//FUNZIONE PROMPT

function domanda() {

    newArrey = [];

    for (let i = 0; i < 5; i++) {
        let numeroInserito = parseInt(prompt('inserisci un numero'));

        if (numeroInserito == NaN) {
            numeroInserito = 0;
        }

        console.log(numeroInserito)
        
        numero.filter((elementi) => {

            if (elementi == numeroInserito) {
                
                newArrey.push(numeroInserito)
	
                return true
            }

            return false
        });  
    }

    const filteredTipo = newArrey.filter(function(ele , pos){
		return newArrey.indexOf(ele) == pos;
	}) 

    const counter = filteredTipo.length;


    let risultato = '';
	
    risultato += `<h1>${filteredTipo}</h1>`;

    box.innerHTML =  risultato;

    textBox.innerHTML = 'hai indovinato ' + counter + ' numeri'
}  



//-----------------------------------------------------------
//     ELEMENTI DEL DOM
//-----------------------------------------------------------
let box = document.getElementById('box');
let textBox = document.getElementById('textBox');



//-----------------------------------------------------------
//     OPERAZIONI
//-----------------------------------------------------------
numero = [];

for (let i = 0; i < 6; i++) {

    let random = Math.floor(Math.random()*100)
    numero.push(random) 

}

console.log(numero)



let secondi = 3;
textBox.innerHTML = 'Osserva i seguneti numeri per 30s';

let time = setInterval(function() {

    console.log(time)

    
    numeriRandom(box)

    if (secondi == 0)  {
        clearInterval(time)
        clear(box)
        textBox.innerHTML = 'Inserisci i 5 numeri che hai appena visto'

        setTimeout(domanda, 1000);

    } else {
        
        numeriRandom(box)
        secondi--
        
    }
    
}, 1000);