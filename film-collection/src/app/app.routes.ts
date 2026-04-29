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
        pathMatch: 'full',
        loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage),
        resolve: {
            films: filmsResolver
        }
    },
    {
        path: "**",
        redirectTo: ""
    }
];
