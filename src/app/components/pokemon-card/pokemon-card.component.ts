import { Component, Input } from '@angular/core';
import { type PokemonModel } from '../../model/pokemon-model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonModel;
}
