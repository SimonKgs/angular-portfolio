import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'personal-info',
        title: 'Personal Information',
        loadComponent: () => import('./pages/personal-info/personal-info.component'),      
      },
      {
        path: 'achivements',
        title: 'Achivements',
        loadComponent: () => import('./pages/achivements/achivements.component'),      
      },
      {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./pages/projects/projects.component'),      
      },
      {
        path: '**',
        redirectTo: 'personal-info'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class MainRoutingModule { }
