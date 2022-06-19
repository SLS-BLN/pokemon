function fetchKantoPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then( allpokemon => {
      allpokemon.results.forEach((pokemon, index) => {
        fetchPokemonData(pokemon);
      });
    });
}

// 1. call the function
fetchKantoPokemon();

// 2. function is called by function fetchKantoPokemon
function fetchPokemonData(pokemon) {  
  const url = pokemon.url;
  fetch(url)
    .then(response => response.json())
    .then( pokeData => {
      // --> insert function to sort objects by index - defined in line 5
      renderPokemon(pokeData);
    });
}
function renderPokemon(pokeData) {
  const allPokemonContainer = document.querySelector('[data-js=poke-container]');
  const pokeContainer = document.createElement('article');
  const pokeName = document.createElement('h2');
  const pokeNumber = document.createElement('p');
  const pokeTypes = document.createElement('ul');

  pokeName.innerText = pokeData.name;
  pokeNumber.innerText = `#${pokeData.id}`;
  createTypes(pokeData.types, pokeTypes);
  pokeContainer.append(pokeName, pokeNumber, pokeTypes);
  allPokemonContainer.appendChild(pokeContainer);

  // add images 
  const pokeImgContainer = document.createElement('div')
  const pokeImage = document.createElement('img')
  
  pokeImgContainer.classList.add('image')
  pokeImage.src = `./images/svg/${pokeData.id}.svg`
  pokeImage.alt = `Pokémon Nr. ${pokeData.id} - ${pokeData.name.toUpperCase()}`
  pokeImgContainer.append(pokeImage);
  pokeContainer.append(pokeImgContainer);
}

function createTypes(types, ul) {
  types.forEach(function (type) {
    const typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi);
  });
}