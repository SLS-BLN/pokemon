function fetchKantoPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(pokemon => {
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
    .then(function (pokeData) {
      renderPokemon(pokeData);
    });
}
function renderPokemon(pokeData) {
  const allPokemonContainer = document.getElementById('poke-container');
  const pokeContainer = document.createElement('article');
  const pokeName = document.createElement('h2');
  pokeName.innerText = pokeData.name;
  const pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;
  const pokeTypes = document.createElement('ul');
  createTypes(pokeData.types, pokeTypes);
  pokeContainer.append(pokeName, pokeNumber, pokeTypes);
  allPokemonContainer.appendChild(pokeContainer);

  // add images 
  const pokeImgContainer = document.createElement('article')
  pokeImgContainer.classList.add('image')
  const pokeImage = document.createElement('img')
  pokeImage.src = `./images/svg/${pokeData.id}.svg`
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