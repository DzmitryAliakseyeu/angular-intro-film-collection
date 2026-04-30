import { Component, inject, input, output, signal } from '@angular/core';
import { Film, PosterModel } from '../../../../models/films.model';
import { Films } from '../../../../services/films/films';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-poster',
  imports: [JsonPipe],
  templateUrl: './poster.html',
  styleUrl: './poster.scss',
  host: {
    class: 'poster',
    '(click)': 'this.selectedFilm.set(this.filmsService.getFilmById(this.poster().id))'
  },
})
export class Poster {
  filmsService = inject(Films);
  selectedFilm = signal<Film | undefined>(undefined);
  poster = input.required<PosterModel>();
}
