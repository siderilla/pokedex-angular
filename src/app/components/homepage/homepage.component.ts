import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { type PokemonModel } from '../../model/pokemon-model';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-homepage',
	imports: [PokemonCardComponent, CommonModule],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
	pokemons: PokemonModel[] = [];
	currentOffset: number = 0;
	limit: number = 20;

	pokemonService: PokemonService = inject(PokemonService);

	constructor() {
		this.loadPage();
	}

	loadPage(): void {
		this.pokemonService.getPokemonPage(this.currentOffset, this.limit).then(pok => {
			this.pokemons = pok;
		});
	}

	nextPage(): void {
		this.currentOffset += this.limit;
		this.loadPage();
	}

	prevPage(): void {
		if (this.currentOffset >= this.limit) {
			this.currentOffset -= this.limit;
			this.loadPage();
		}
	}
}

