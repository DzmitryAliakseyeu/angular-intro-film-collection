import { computed, Injectable, signal } from '@angular/core';
import { Film } from '../../models/films.model';

@Injectable({
  providedIn: 'root',
})
export class Films {
  public filmsCollection = signal<Film[]>([]);
  public favoriteFilms = computed(() => this.filmsCollection().filter(film => film.isFavorite));

  async getFilms(): Promise<Film[]> {
    try {
      const response = await fetch('/films.json');
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const data = (await response.json()) as Film[];
      return data;
    } catch (error) {
      console.error('Error fetching films:', error);
      return [];
    }
  }

  getFilmById(id:number): Film | undefined {
    return this.filmsCollection().find(film => film.id === id);
  }

  toggleFavorite(id: number) {
    this.filmsCollection.update(films => {
      return films.map((film) => film.id == id ? { ...film, isFavorite: !film.isFavorite } : film);
    });
  }
}
