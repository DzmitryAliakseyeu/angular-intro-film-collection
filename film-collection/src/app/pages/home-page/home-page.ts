import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';

import { Poster } from './components/poster/poster';
import { Films } from '../../services/films/films';
import { SearchField } from './directives/search-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [Poster, SearchField, ReactiveFormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  route = inject(ActivatedRoute);
  filmsService = inject(Films);
  searchField = new FormControl('', { nonNullable: true });

  private searchQuery = toSignal(
    this.searchField.valueChanges.pipe(startWith('')),
    { initialValue: '' }
  );

  displayedFilms = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const films = this.filmsService.filmsCollection();
    return query ? films.filter(f => f.title.toLowerCase().includes(query)) : films;
  });
}
