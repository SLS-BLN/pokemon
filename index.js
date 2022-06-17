function fetchKantoPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function (allpokemon) {
      console.log(allpokemon);
      allpokemon.results.forEach(pokemon => {
        fetchPokemonData(pokemon);
      });
    });
}
// 1. call the function
fetchKantoPokemon();

// 2. function is called by function fetchKantoPokemon
function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then(response => response.json())
    .then(function (pokeData) {
      console.log(pokeData);
      renderPokemon(pokeData);
    });
}
function renderPokemon(pokeData) {
  let allPokemonContainer = document.getElementById('poke-container');
  console.log(allPokemonContainer);
  const pokeContainer = document.createElement('div');
  const pokeName = document.createElement('h4');
  pokeName.innerText = pokeData.name;
  const pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;
  const pokeTypes = document.createElement('ul');
  createTypes(pokeData.types, pokeTypes);
  pokeContainer.append(pokeName, pokeNumber, pokeTypes);
  allPokemonContainer.appendChild(pokeContainer);
}

function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi);
  });
}

function createPokeImage(pokeID, containerDiv){
  let pokeImgContainer = document.createElement('div')
  pokeImgContainer.classList.add('image')

  let pokeImage = document.createElement('img')
  pokeImage.src = `./images/svg${pokeID}.svg`

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

createPokeImage()

console.log(pokeID);
