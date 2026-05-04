import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Poster } from './components/poster/poster';
import { Films } from '../../services/films/films';
import { SearchField } from './directives/search-field';

@Component({
  selector: 'app-home-page',
  imports: [Poster, SearchField],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  filmsService = inject(Films);
  router = inject(Router);

  searchQuery = signal('');

  displayedFilms = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const films = this.filmsService.filmsCollection();
    return query ? films.filter(f => f.title.toLowerCase().includes(query)) : films;
  });

  navigateToFilm(id: number) {
    this.router.navigate(['/film', id]);
  }
}
