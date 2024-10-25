import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../main-routing.module';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = routes
    .map( route => route.children ?? [])
    .flat()
    .filter( route => route && route.path && route.title)
}
