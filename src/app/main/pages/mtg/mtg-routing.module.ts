import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'card-list',
          title: 'Cards',
          loadComponent: () => import('./mtg.component'),
        },
        {
          path: 'decks',
          title: 'Decks',
          loadComponent: () => import('./mtg.component'),
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
