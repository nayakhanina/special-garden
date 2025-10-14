let carrot = 0;

function decrementCarrot() {
	carrot = carrot - 1
    document.querySelector('#carrot-count').innerHTML = carrot;
    calcTotalSum ()
    }
    
function incrementCarrot() {
    carrot = carrot + 1
    document.querySelector('#carrot-count').innerHTML = carrot;
    calcTotalSum ()
    }

let onion = 0;

function decrementOnion() {
	onion = onion - 1
    document.querySelector('#onion-count').innerHTML = onion;
    calcTotalSum ()
    }
 
function incrementOnion() {
    onion = onion + 1
    document.querySelector('#onion-count').innerHTML = onion;
    calcTotalSum ()
    }

let tomato = 0;

function decrementTomato() {
	tomato = tomato - 1
    document.querySelector('#tomato-count').innerHTML = tomato;
    calcTotalSum ()
    }

function incrementTomato() {
    tomato = tomato + 1
    document.querySelector('#tomato-count').innerHTML = tomato
    calcTotalSum ()
    }

function pricecarrot() {
    let carrotinput = document.querySelector("[name='carrotinput']").value;
    sum = carrotinput * carrot
    document.querySelector('#pricecarrotsum').innerHTML = sum
    calcTotalSum ()
    }

function priceonion() {
    let onioninput = document.querySelector("[name='onioninput']").value;
    sum = onioninput * onion
    document.querySelector('#priceonionsum').innerHTML = sum
    calcTotalSum ()
    }

function pricetomato() {
    let tomatoinput = document.querySelector("[name='tomatoinput']").value;
    sum = tomatoinput * tomato
    document.querySelector('#pricetomatosum').innerHTML = sum
    calcTotalSum ()
    }

function calcTotalSum () {
    let carrotprice = document.querySelector("[name='carrotinput']").value;
    let onionprice = document.querySelector("[name='onioninput']").value;
    let tomatoprice = document.querySelector("[name='tomatoinput']").value;
    let carrotsum = carrotprice * document.querySelector('#carrot-count').innerHTML
    let onionsum = onionprice * document.querySelector('#onion-count').innerHTML
    let tomatosum = tomatoprice * document.querySelector('#tomato-count').innerHTML
    let allsum = carrotsum + onionsum + tomatosum
    document.querySelector('#allsum').innerHTML = allsum;}