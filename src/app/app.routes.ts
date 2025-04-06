import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
	{ path: 'pokemon/:id', component: PokemonDetailComponent }
];
