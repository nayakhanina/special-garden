let carrot = 0;

function decrementCarrot() {
	carrot = carrot - 1
    document.querySelector('#carrot-count').innerHTML = carrot;
}

function incrementCarrot() {
    carrot = carrot + 1
    alert(carrot)
    document.querySelector('#carrot-count').innerHTML = carrot;
}