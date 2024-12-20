import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main-routing.module')
    },
    {
        path: '**',
        redirectTo: ''
    },
];
