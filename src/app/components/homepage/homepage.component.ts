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
  pokemonService: PokemonService = inject(PokemonService) // maiuscole DECORATOR minuscole FUNZIONI

  constructor() {
    this.pokemonService.getPokemonData().then(pok => {
      console.log(pok);
      this.pokemons = pok;
    })
  }

}
