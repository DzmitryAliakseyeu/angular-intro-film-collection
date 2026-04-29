import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Film } from '../../../models/films.model';
import { Films } from '../../../services/films/films';


export const filmsResolver: ResolveFn<Film[]> = () => {
	const filmsService = inject(Films);
	return filmsService.getFilms();
};
