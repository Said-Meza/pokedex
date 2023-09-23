const nombre = document.querySelector('.pokedex__title');
const imagen = document.getElementById('pokedex__img');
const hability = document.querySelector('.pokedex__resumen');


// console.log(imagen.src)

const numerorandon = pokerandom();

function pokerandom(){
        const num = Math.floor(Math.random() * 120 + 1);
        
        return num;
}

async function pokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ numerorandon) ;
    const pokes = await response.json();
    
    console.log(pokes);
    
     rutas={
        name:pokes.forms[0].name,
        img:pokes.sprites.other["official-artwork"].front_default,
        abilites1:pokes.abilities[0].ability.name
        // abilites2:pokes.abilities[1].ability.name

    };
        // console.log(rutas.name);
        
        nombre.textContent = rutas.name;
        imagen.src =rutas.img;
        hability.textContent = `Habilidades : ${rutas.abilites1} `;
        
        // console.log(rutas.abilites1)


    }



pokemons()




