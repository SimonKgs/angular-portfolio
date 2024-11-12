import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MtgLayoutComponent } from './mtg-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MtgLayoutComponent,
    children: [
    {
        path: 'card-list',
        title: 'Cards',
        loadComponent: () => import('./pages/card-list/mtg.component'),
      },
      {
        path: 'decks',
        title: 'Decks',
        loadComponent: () => import('./pages/decks/decks.component'),
      },
      {
        path: '**',
        redirectTo: 'card-list'     
      },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class MtgRoutingModule {
 
}
