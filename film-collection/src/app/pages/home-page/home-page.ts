import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/films.model';
import { Poster } from './components/poster/poster';

@Component({
  selector: 'app-home-page',
  imports: [Poster],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  route = inject(ActivatedRoute);
  filmsList = signal<Film[]>((this.route.snapshot.data['films'] as Film[] | undefined) ?? []);

  toggleFavorite(id: number) {
    console.log(id);
    this.filmsList.update(films => {
      return films.map((film) => film.id == id ? { ...film, isFavorite: !film.isFavorite } : film);
    });
    console.log(this.filmsList());
  }
}
