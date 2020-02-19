console.log('we are live');

console.log(1%4);
console.log(2%4);
console.log(3%4);
console.log(4%4);


let x = 0;
let y = 0;
let w = 400;
let h = 250;
const count = 52;



function gridSnakeRight() {
    x = x + w;
    q = x / 400;
    console.log(x);
    console.log(q);
    
    if (q%4 === 0) {
        gridSnakeLeft()
    }
}

function gridSnakeLeft() {
    x = x - w;
    q = x / 400;
    console.log(x);
    if (q%4 === 1) {
        gridSnakeRight()
    }
}

for (let i = 0; i < count; i++) {
    gridSnakeRight();
    
}



/*
setInterval(()=> {
    gridSnakeRight()
}, 1500);*/
