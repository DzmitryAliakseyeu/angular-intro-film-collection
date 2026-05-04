import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { PosterModel } from '../../../../models/films.model';
import { Films } from '../../../../services/films/films';

@Component({
  selector: 'app-poster',
  imports: [],
  templateUrl: './poster.html',
  styleUrl: './poster.scss',
  host: {
    class: 'poster',
    '(click)': 'navigateToDetails()'
  },
})
export class Poster {
  filmsService = inject(Films);
  router = inject(Router);
  poster = input.required<PosterModel>();

  navigateToDetails() {
    this.router.navigate(['/film', this.poster().id]);
  }
}
