// npm commands
/** 
 * Instructions:
 * 1. npm init -y
 * 2. npm install express
 * 3. both together with &&
*/

/**
 * Instructions for template engine
 * 1. npm i handlebars node-fetch express-handlebars hbs
 * 2. update our app.get()
 * 
 * 3. Create template files
 * a. layout/main.hbs
 * b. partials/head.hbs
 * c. views/index.hbs
 */

/**
 * app.template
 */
let ID = 1;

var right = document.getElementById("rightButton").addEventListener("click", increase1);
var left = document.getElementById("leftButton").addEventListener("click", decrease1);

// Key Event Listener
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
  
    // Single Interval.
    if (keyName === 'ArrowRight') {
        increase1();
    } else if(keyName === 'ArrowLeft') {
        decrease1();

    // Interval by Ten.
    } else if (keyName === 'ArrowUp') {
        increase1(); increase1(); increase1(); increase1(); increase1();
        increase1(); increase1(); increase1(); increase1(); increase1();
    } else if (keyName === 'ArrowDown') {
        decrease1(); decrease1(); decrease1(); decrease1(); decrease1(); 
        decrease1(); decrease1(); decrease1(); decrease1(); decrease1();  
    }

});


function increase1() {
    ID++;
    if (ID > 648) {
        ID = 1;
     }

    console.log(ID);    
    fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            const {...pokemon} = data.sprites;
            console.log(pokemon)
            const selector = document.querySelector(".pokeIn");
            selector.innerHTML = `<img src="${pokemon.front_default}" />`;
            const selector2 = document.querySelector(".pokedex");
            selector2.innerHTML = `${name}`;
            const selector3 = document.querySelector(".number");
            selector3.innerHTML = `Pokedéx #${id}`;
            const selector4 = document.querySelector(".pokeIn2");
            selector4.innerHTML = `<img src="${pokemon.back_default}" />`;
        }
);
}

function decrease1() {
    ID--;
    if (ID < 1) {
        ID = 649;
     } else if (ID < 0) {
        ID = 1;
    }

    console.log(ID);    
    fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            const {...pokemon} = data.sprites;
            console.log(pokemon)
            const selector = document.querySelector(".pokeIn");
            selector.innerHTML = `<img src="${pokemon.front_default}" />`;
            const selector2 = document.querySelector(".pokedex");
            selector2.innerHTML = `${name}`;
            const selector3 = document.querySelector(".number");
            selector3.innerHTML = `Pokedéx #${id}`;
            const selector4 = document.querySelector(".pokeIn2");
            selector4.innerHTML = `<img src="${pokemon.back_default}" />`;
        }
);
}

fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            const {...pokemon} = data.sprites;
            console.log(pokemon)
            const selector = document.querySelector(".pokeIn");
            selector.innerHTML = `<img src="${pokemon.front_default}" />`;
            const selector2 = document.querySelector(".pokedex");
            selector2.innerHTML = `${name}`;
            const selector3 = document.querySelector(".number");
            selector3.innerHTML = `Pokedéx #${id}`;
            const selector4 = document.querySelector(".pokeIn2");
            selector4.innerHTML = `<img src="${pokemon.back_default}" />`;
        }
);