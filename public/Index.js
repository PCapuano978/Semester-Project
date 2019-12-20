// The main JavaScrip document that happens to do everything that isn't hosting the server happens to be this one!

// In a similar vein to how the main index page is split up into three sections that mostly share the same structure, this page does very much the same starting out with setting the Pokemon's main ID to be used for change.
let ID = 1;

// To make sure the arrow keys work, an event listener is hooked to them that activate the function of "increase1" or "decrease1" specifically when tehy are clicked.
var right = document.getElementById("rightButton").addEventListener("click", increase1);
var left = document.getElementById("leftButton").addEventListener("click", decrease1);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    // The single interval event that first checks which key you pressed before it determines whether to run the addition or subjection functions.
    if (keyName === 'ArrowRight') {
        increase1();
    } else if(keyName === 'ArrowLeft') {
        decrease1();

    // Interval by Ten, which (sloppily) just repeats the following single interval functions ten times to (sometimes) produce a result 10x the amount.
    } else if (keyName === 'ArrowUp') {
        increase1(); increase1(); increase1(); increase1(); increase1();
        increase1(); increase1(); increase1(); increase1(); increase1();
    } else if (keyName === 'ArrowDown') {
        decrease1(); decrease1(); decrease1(); decrease1(); decrease1(); 
        decrease1(); decrease1(); decrease1(); decrease1(); decrease1();  
    }

});

// The increase function that checks first if the number is not at the max amount (being set to 648) in which case it would loop back to one. Otherwise, it would increase the ID by 1.
function increase1() {
    ID++;
    if (ID > 648) {
        ID = 1;
     }
 
    //This is out first instance of a fetch method being processed, being done after the ID's changed, but I'll explain it later at the end of this section. 
    fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            name = data.name
            id = data.id
            const {...pokemon} = data.sprites;
            const selector = document.querySelector(".pokeIn");
            selector.innerHTML = `<img class="wow pulse" src="${pokemon.front_default}" />`;
            const selector2 = document.querySelector(".pokedex");
            selector2.innerHTML = `${name}`;
            const selector3 = document.querySelector(".number");
            selector3.innerHTML = `Pokedéx #${id}`;
            const selector4 = document.querySelector(".pokeIn2");
            selector4.innerHTML = `<img class="wow pulse" src="${pokemon.back_default}" />`;
        }
);
}

// Same thing as the increase function, but this one subtracts instead. This includes looping it back to the max amount if it as at the lowest (being 1).
function decrease1() {
    ID--;
    if (ID < 1) {
        ID = 649;
     } else if (ID < 0) {
        ID = 1;
    }

    // It's also ran with it's new ID just like the other one.
    fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            name = data.name
            id = data.id
            const {...pokemon} = data.sprites;
            const selector = document.querySelector(".pokeIn");
            selector.innerHTML = `<img class="wow pulse" src="${pokemon.front_default}" />`;
            const selector2 = document.querySelector(".pokedex");
            selector2.innerHTML = `${name}`;
            const selector3 = document.querySelector(".number");
            selector3.innerHTML = `Pokedéx #${id}`;
            const selector4 = document.querySelector(".pokeIn2");
            selector4.innerHTML = `<img class="wow pulse" src="${pokemon.back_default}" />`;
        }
);
}

// Finally, our real fetch process and the one done at page load-up.

// First, the site is taken of its poke data, but I've done it specially to reference the ID, which is inputted by what the ID variable is set to (which should always be one in this case).
fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)

    // The json data of the source is then parsed.
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            // Following this sequence of variables,  it first deconstructs the sprite data fetched from the pokemon API and sets it to an object list variable of "pokemon"
            const {...pokemon} = data.sprites;
            // Then, we select the "pokeIn" div where we intend to place our fetched images including the data of the front and back sprites names and convert it to inner HTML within it that also add a wow.js animation of it pulsing anew and 
            const selector = document.querySelector(".pokeIn");
            selector.innerHTML = `<img class="wow pulse" src="${pokemon.front_default}" />`;
            // additionally, the Pokedex and number are similarly treated to displaying the information of the Pokemon's name and ID respectively within their following elements.
            const selector2 = document.querySelector(".pokedex");
            selector2.innerHTML = `${name}`;
            const selector3 = document.querySelector(".number");
            selector3.innerHTML = `Pokedéx #${id}`;
            const selector4 = document.querySelector(".pokeIn2");
            selector4.innerHTML = `<img class="wow pulse" src="${pokemon.back_default}" />`;
        }
);

/*
* Digimon Start
*/

// Next, we got the obligatory Digimon section where you inevitably get me to tell you that things this point onward get very samey with formating, and thus, that case is true. Except, this time I'll only try to point out the main differences that aren't just changes in variable names.
let digiID = 1;
const testing = document.querySelector(".fa-arrow-alt-circle-right");
var digiRight = document.querySelector(".fa-arrow-alt-circle-right").addEventListener("click", increaseDigi);
var digiLeft = document.querySelector(".fa-arrow-alt-circle-left").addEventListener("click", decreaseDigi);

// Key Event Listener
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
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

    // Because there's only a hundred Digimon, I've done it to loop back to one after reaching the 100th one.
    digiID++;
    if (digiID > 100) {
        digiID = 1;
     }
   
    fetch (`https://digimon-api.herokuapp.com/api/digimon/id/${digiID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            name = data.name
            id = data.id
            const [digimon] = data;
            const selector = document.querySelector(".digiIn");
            selector.innerHTML = `<img class="wow pulse" src="${digimon.img}" />`;
            const selector2 = document.querySelector(".digidex");
            selector2.innerHTML = `${digimon.name}`;
            const selector3 = document.querySelector(".numberD");
            selector3.innerHTML = `Digidex #${digimon.id}`;

        }
);
}

function decreaseDigi() {

    // Same can pretty much be said here with how going back on the first one will issue you back the 100th one, being the last one there.
    digiID--;
    if (digiID < 1) {
        digiID = 100;
     } else if (digiID < 0) {
        digiID = 1;
    }
    
    fetch (`https://digimon-api.herokuapp.com/api/digimon/id/${digiID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            name = data.name
            id = data.id
            const [digimon] = data;
            const selector = document.querySelector(".digiIn");
            selector.innerHTML = `<img class="wow pulse" src="${digimon.img}" />`;
            const selector2 = document.querySelector(".digidex");
            selector2.innerHTML = `${digimon.name}`;
            const selector3 = document.querySelector(".numberD");
            selector3.innerHTML = `Digidex #${digimon.id}`;

        }
);
}

// Oh, I guess I also should make a quick note on how the Digimon data is fetched differently from the Pokemon one in having the information stored in more of an array vs. an object, allowing the changes seen here to be applied. As another note, I didn't need to have a back sprite as the artwork is the only image available, so I got to save about ten minutes of my life I could then waste elsewhere. 
fetch (`https://digimon-api.herokuapp.com/api/digimon/id/${digiID}/`)
    .then((res) => res.json())
    .then( 
        data => {
            console.log(data);
            name = data.name
            id = data.id
            const [digimon] = data;
            const selector = document.querySelector(".digiIn");
            selector.innerHTML = `<img class="wow pulse" src="${digimon.img}" />`;
            const selector2 = document.querySelector(".digidex");
            selector2.innerHTML = `${digimon.name}`;
            const selector3 = document.querySelector(".numberD");
            selector3.innerHTML = `Digidex #${digimon.id}`;

        }
);

/*
* Yu-gi-oh Start
*/

// And now for the Yu-gi-oh section. I think you get the deal here.

let yugiID = 1;

var yugiRight = document.querySelector(".fa-arrow-alt-circle-up").addEventListener("click", increaseyugi);
var yugiLeft = document.querySelector(".fa-arrow-alt-circle-down").addEventListener("click", decreaseyugi);

// Key Event Listener
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    // Single Interval.
    if (keyName === 'l') {
        increaseyugi();
    } else if(keyName === 'j') {
        decreaseyugi();

    // Interval by Ten.
    } else if (keyName === 'i') {
        increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi();
        increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi(); increaseyugi();
    } else if (keyName === 'k') {
        decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi(); 
        decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi(); decreaseyugi();  
    }

});

// Holy moly, there's a lot more Yu-gi-oh cards then anything we've seen before. Luckily, the system itself made it pretty simple in finding which was the last one in alphabetical order so we could do the titular loop as per usual.
function increaseyugi() {
    yugiID++;
    if (yugiID > 10337) {
        yugiID = 1;
     }

     fetch (`https://db.ygoprodeck.com/api/v5/cardinfo.php`)
     .then((res) => res.json())
     .then( 
         data => {
             name = data.name
             id = data.id
             const selector = document.querySelector(".yugiImage");
             selector.src = data[(0, yugiID)].card_images[0].image_url;
 
         }
 );
}

// And the beginning is treated the same.
function decreaseyugi() {
    yugiID--;
    if (yugiID < 1) {
        yugiID = 10338;
     } else if (yugiID < 0) {
        yugiID = 1;
    }

    fetch (`https://db.ygoprodeck.com/api/v5/cardinfo.php`)
    .then((res) => res.json())
    .then( 
        data => {
            name = data.name
            id = data.id
            const selector = document.querySelector(".yugiImage");
            selector.src = data[(0, yugiID)].card_images[0].image_url;

        }
);
}

// Compared to the two API's before, Yu-gi-oh's was, without a doubt, the most different in featuring pretty much all the info I needed on the cards themselves, such as image, name, and a brief description on what exactly it is (because I know you'll need that). This also means I just had to program just that one thing for the image without the name or ID, so make that 20 more minutes of my life saved for a combined total of 30 (thanks coders instinct). 
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