// function fetchKantoPokemon(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(response => response.json())
//     .then(allpokemon => console.log(allpokemon));
//   }
//   console.log(fetchKantoPokemon);

  function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
   
    })
})
   }  
   console.log(fetchKantoPokemon);