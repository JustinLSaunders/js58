// var baseURL = 'http://pokeapi.co/api/v2/pokemon-species/offset=' offset
$(function(){
	var perPage = 50;

	var retrievePokemon = function(offset){
		$.get('https://accesscontrolalloworiginall.herokuapp.com/http://pokeapi.co/api/v1/pokemon-species/&limit=' + offset, function(response){
	    var species = response.results
	    for(var i = 0; i < species.length; i++){
	    	console.log(species[i].name);
	    }

	    if(species.length > 0){
		    retrievePokemon(offset + perPage);
	    }
	  });
	};
	retrievePokemon(0)
});