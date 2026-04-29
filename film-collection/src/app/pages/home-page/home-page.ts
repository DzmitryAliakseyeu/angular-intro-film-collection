import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/films.model';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  route = inject(ActivatedRoute);
  filmsList = signal<Film[]>((this.route.snapshot.data['films'] as Film[] | undefined) ?? []);
}
