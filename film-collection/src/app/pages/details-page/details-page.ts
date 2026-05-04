import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Film } from '../../models/films.model';
import { Films } from '../../services/films/films';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-details-page',
  imports: [DurationPipe],
  templateUrl: './details-page.html',
  styleUrl: './details-page.scss',
})
export class DetailsPage {
  route = inject(ActivatedRoute);
  filmsService = inject(Films);
  router = inject(Router);

  film = computed<Film | undefined>(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.filmsService.getFilmById(id);
  });

  goBack() {
    this.router.navigate(['/home']);
  }
}
