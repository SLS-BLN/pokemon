function fetchKantoPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function (allpokemon) {
      console.log(allpokemon);
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}
fetchKantoPokemon();

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
  let pokeContainer = document.createElement('div');
  let pokeName = document.createElement('h4');
  pokeName.innerText = pokeData.name;
  let pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;
  let pokeTypes = document.createElement('ul');
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
