import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Poster } from './components/poster/poster';
import { Films } from '../../services/films/films';

@Component({
  selector: 'app-home-page',
  imports: [Poster],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  route = inject(ActivatedRoute);
  filmsService = inject(Films);
  filmsCollection = computed(()=> this.filmsService.filmsCollection());

}
