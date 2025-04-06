import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { type PokemonModel } from '../../model/pokemon-model';


@Component({
	selector: 'app-pokemon-detail',
	imports: [CommonModule, RouterModule],
	templateUrl: './pokemon-detail.component.html',
	styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
	pokemon!: PokemonModel;
	private route = inject(ActivatedRoute);
	private pokemonService = inject(PokemonService);

	constructor() {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.pokemonService.getSinglePokemon(+id).then(pok => {
				this.pokemon = pok;
				console.log('Pokemon:', pok);
			});
		}
	}

	getTypes(): string {
		return this.pokemon?.types.map(t => t.type.name).join(', ') ?? '';
	}

}
