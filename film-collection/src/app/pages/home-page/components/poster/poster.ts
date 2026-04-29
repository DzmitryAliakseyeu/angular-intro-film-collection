import { Component, input } from '@angular/core';
import { PosterModel } from '../../../../models/films.model';

@Component({
  selector: 'app-poster',
  imports: [],
  templateUrl: './poster.html',
  styleUrl: './poster.scss',
})
export class Poster {
  poster = input.required<PosterModel>();
}
