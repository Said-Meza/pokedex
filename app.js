const $nombre = document.querySelector(".pokedex__title");
const $imagen = document.getElementById("pokedex__img");
const $hability = document.querySelector(".pokedex__resumen");
const $pokedexcontainer = document.querySelector(".pokedex");

const url = `https://pokeapi.co/api/v2/pokemon/${pokerandom()}`;

pokemons(url);

function pokerandom() {
  return num = Math.floor(Math.random() * 120 )+ 1;
}

async function pokemons(url) {
  try {
    const response = await fetch(url);

    if(!response.ok){
        throw { code: response.status || 500 , statusText: response.statusText || "Ocurrio un Error"}
    }
    
    const pokes = await response.json();

    const rutas = {
      name: pokes.forms[0].name,
      img: pokes.sprites.other["official-artwork"].front_default,
      abilites1: pokes.abilities[0].ability.name || "Not Skill",
    };

    $nombre.textContent = rutas.name || "desconocido";
    $imagen.src = rutas.img || "no image" ;
    $hability.textContent = `skill : ${rutas.abilites1}` ;
  } catch (err) {
    $pokedexcontainer.innerHTML=`
      <p class="err">Error ${err.code}: ${err.statusText}</p>
      <p class="err">Inténtalo de nuevo.</p>
    `;
  }
}
