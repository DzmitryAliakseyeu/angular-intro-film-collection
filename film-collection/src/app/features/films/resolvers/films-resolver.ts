import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Film } from '../../../models/films.model';
import { Films } from '../../../services/films/films';


export const filmsResolver: ResolveFn<Film[]> = async () => {
	const filmsService = inject(Films);
  const result = await filmsService.getFilms();
  filmsService.filmsCollection.set(result);
	return result;
};
