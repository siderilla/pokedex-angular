import { Injectable } from '@angular/core';
import { type PokemonModel } from '../model/pokemon-model';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	static readonly POKEMON_URL: string = 'https://pokeapi.co/api/v2/pokemon/'
	limit: number;
	offset: number;


	constructor() {
		this.limit = 20;
		this.offset = 0;
	}

	async getPokemonData(): Promise<PokemonModel[]> {
		const url = PokemonService.POKEMON_URL + '?limit=' + this.limit + '&offset=' + this.offset;
		// const data = await fetch(url);
		// return (await data.json()).results ?? [];

		return fetch(url)
			.then(res => res.json())
			.then(data => {
				const requests = [];
				// dettagli di ciascun pokemon
				for (const pokemon of data.results) {
					const pokeUrl = pokemon.url; // url + id
					console.log(pokeUrl);
					const request = fetch(pokeUrl) // salvo in request
						.then(res => res.json())
						.then(data => data) // i dati dentro pokeurl
						.catch(err => console.error(err))
					requests.push(request); // li pusho in requests come array
				}

				return Promise.all(requests); // risolvo la promessa

			});
	}

	async getSinglePokemon(id: number): Promise<PokemonModel> {
		const res = await fetch(PokemonService.POKEMON_URL + id);
		return await res.json();
	}

	async getPokemonPage(offset: number, limit: number = 20): Promise<PokemonModel[]> {
		const url = PokemonService.POKEMON_URL + `?limit=${limit}&offset=${offset}`;
	
		return fetch(url)
			.then(res => res.json())
			.then(data => {
				const requests = data.results.map((pokemon: any) =>
					fetch(pokemon.url)
						.then(res => res.json())
						.catch(err => console.error(err))
				);
	
				return Promise.all(requests);
			});
	}
	

}
