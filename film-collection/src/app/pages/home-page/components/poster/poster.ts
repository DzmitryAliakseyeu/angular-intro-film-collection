import { Component, input, output } from '@angular/core';
import { PosterModel } from '../../../../models/films.model';

@Component({
  selector: 'app-poster',
  imports: [],
  templateUrl: './poster.html',
  styleUrl: './poster.scss',
  host: {
    class: 'poster',
    '(click)': 'cardClick.emit(poster().id)'
  },
})
export class Poster {
  poster = input.required<PosterModel>();
  cardClick = output<number>();
  toggleFavorite = output<number>();
}
