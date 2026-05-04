import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { Films } from '../services/films/films';

@Component({
  selector: 'fc-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  router = inject(Router);
  filmsService = inject(Films);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => (e as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  isDetailsPage = computed(() => this.currentUrl().startsWith('/film/'));

  currentFilmTitle = computed(() => {
    if (!this.isDetailsPage()) return '';
    const id = Number(this.currentUrl().split('/film/')[1]);
    return this.filmsService.getFilmById(id)?.title ?? '';
  });
}
