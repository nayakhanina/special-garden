let carrot = 0;

function decrementCarrot() {
	carrot = carrot - 1
    document.querySelector('#carrot-count').innerHTML = carrot;
}

function incrementCarrot() {
    carrot = carrot + 1
    document.querySelector('#carrot-count').innerHTML = carrot;
}

let onion = 0;

function decrementOnion() {
	onion = onion - 1
    document.querySelector('#onion-count').innerHTML = onion;
}

function incrementOnion() {
    onion = onion + 1
    document.querySelector('#onion-count').innerHTML = onion;
}

let tomato = 0;

function decrementTomato() {
	tomato = tomato - 1
    document.querySelector('#tomato-count').innerHTML = tomato;
}

function incrementTomato() {
    tomato = tomato + 1
    document.querySelector('#tomato-count').innerHTML = tomato
}

function pricecarrot() {
    let carrotinput = document.querySelector("[name='carrotinput']").value;
    sum = carrotinput * carrot
    document.querySelector('#pricecarrotsum').innerHTML = sum
}

function priceonion() {
    let onioninput = document.querySelector("[name='onioninput']").value;
    sum = onioninput * onion
    document.querySelector('#priceonionsum').innerHTML = sum
}

function pricetomato() {
    let tomatoinput = document.querySelector("[name='tomatoinput']").value;
    sum = tomatoinput * tomato
    document.querySelector('#pricetomatosum').innerHTML = sum
}