import { Routes } from '@angular/router';
import { filmsResolver } from './features/films/resolvers/films-resolver';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage),
        resolve: { films: filmsResolver }
    },
    {
        path: 'film/:id',
        loadComponent: () => import('./pages/details-page/details-page').then(m => m.DetailsPage)
    },
     {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
