import { Injectable } from '@angular/core';
import { Film } from '../../models/films.model';

@Injectable({
  providedIn: 'root',
})
export class Films {
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
}
