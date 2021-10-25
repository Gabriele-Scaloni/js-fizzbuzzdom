const ContSquare = document.getElementById("ContainerSquare");
const x = 3 ;
const y = 5 ;
let z = 15;


for(let i = 1; i <= 100; i++) {

    if (i % z == 0) {
        ContSquare.innerHTML+= `<div class="square fizzbuzz">fizzbuzz</div>`;
    }
    else if (i % x == 0) {
        ContSquare.innerHTML+= `<div class="square fizz">fizz</div>`;
    }
    else if (i % y == 0) {
        ContSquare.innerHTML+= `<div class="square buzz">buzz</div>`;
    }
   
    else {
        ContSquare.innerHTML+= `<div class="square">${i}</div>`;
    }
}