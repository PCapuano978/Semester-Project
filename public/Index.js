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

/*
* Digimon Start
*/

let digiID = 1;
const testing = document.querySelector(".fa-arrow-alt-circle-right");
console.log("should not be null, it SHOULD return a div",testing)
var digiRight = document.querySelector(".fa-arrow-alt-circle-right").addEventListener("click", increaseDigi);
var digiLeft = document.querySelector(".fa-arrow-alt-circle-left").addEventListener("click", decreaseDigi);

// Key Event Listener
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
  
    // Single Interval.
    if (keyName === 'd') {
        increaseDigi();
    } else if(keyName === 'a') {
        decreaseDigi();

    // Interval by Ten.
    } else if (keyName === 'w') {
        increaseDigi(); increaseDigi(); increaseDigi(); increaseDigi(); increaseDigi();
        increaseDigi(); increaseDigi(); increaseDigi(); increaseDigi(); increaseDigi();
    } else if (keyName === 's') {
        decreaseDigi(); decreaseDigi(); decreaseDigi(); decreaseDigi(); decreaseDigi(); 
        decreaseDigi(); decreaseDigi(); decreaseDigi(); decreaseDigi(); decreaseDigi();  
    }

});


function increaseDigi() {
    digiID++;
    if (digiID > 100) {
        digiID = 1;
     }

    console.log(digiID);    
    fetch (`https://digimon-api.herokuapp.com/api/digimon/id/${digiID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log("DATA:", data[0].name);
            name = data.name
            id = data.id
            const [digimon] = data;
            console.log(digimon)
            const selector = document.querySelector(".digiIn");
            selector.innerHTML = `<img src="${digimon.img}" />`;
            const selector2 = document.querySelector(".digidex");
            selector2.innerHTML = `${digimon.name}`;
            const selector3 = document.querySelector(".numberD");
            selector3.innerHTML = `Digidex #${digimon.id}`;

        }
);
}

function decreaseDigi() {
    digiID--;
    if (digiID < 1) {
        digiID = 100;
     } else if (digiID < 0) {
        digiID = 1;
    }

    console.log(digiID);    
    fetch (`https://digimon-api.herokuapp.com/api/digimon/id/${digiID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log("DATA:", data[0].name);
            name = data.name
            id = data.id
            const [digimon] = data;
            console.log(digimon)
            const selector = document.querySelector(".digiIn");
            selector.innerHTML = `<img src="${digimon.img}" />`;
            const selector2 = document.querySelector(".digidex");
            selector2.innerHTML = `${digimon.name}`;
            const selector3 = document.querySelector(".numberD");
            selector3.innerHTML = `Digidex #${digimon.id}`;

        }
);
}

fetch (`https://digimon-api.herokuapp.com/api/digimon/id/${digiID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log("DATA:", data[0].name);
            name = data.name
            id = data.id
            const [digimon] = data;
            console.log(digimon)
            const selector = document.querySelector(".digiIn");
            
            selector.innerHTML = `<img src="${digimon.img}" />`;
            const selector2 = document.querySelector(".digidex");
            selector2.innerHTML = `${digimon.name}`;
            const selector3 = document.querySelector(".numberD");
            selector3.innerHTML = `Digidex #${digimon.id}`;

        }
);

/*
* Yu-gi-oh Start
*/

let yugiID = 1;

var yugiRight = document.querySelector(".fa-arrow-alt-circle-right").addEventListener("click", increaseyugi);
var yugiLeft = document.querySelector(".fa-arrow-alt-circle-left").addEventListener("click", decreaseyugi);

// Key Event Listener
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
  
    // Single Interval.
    if (keyName === 'd') {
        increaseyugi();
    } else if(keyName === 'a') {
        decreaseyugi();

    // Interval by Ten.
    } else if (keyName === 'w') {
        increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi();
        increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi();
    } else if (keyName === 's') {
        decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi(); 
        decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi();  
    }

});


function increaseyugi() {
    yugiID++;
    if (yugiID > 100) {
        yugiID = 1;
     }

     fetch (`https://db.ygoprodeck.com/api/v5/cardinfo.php`)
     .then((res) => res.json())
     .then( 
         data => {
             console.log(data);
             name = data.name
             id = data.id
             const selector = document.querySelector(".yugiImage");
             selector.src = data[(0, yugiID)].card_images[0].image_url;
 
         }
 );
}

function decreaseyugi() {
    yugiID--;
    if (yugiID < 1) {
        yugiID = 100;
     } else if (yugiID < 0) {
        yugiID = 1;
    }

    fetch (`https://db.ygoprodeck.com/api/v5/cardinfo.php`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            const selector = document.querySelector(".yugiImage");
            selector.src = data[(0, yugiID)].card_images[0].image_url;

        }
);
}

fetch (`https://db.ygoprodeck.com/api/v5/cardinfo.php`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            const selector = document.querySelector(".yugiImage");
            selector.src = data[(0, yugiID)].card_images[0].image_url;

        }
);