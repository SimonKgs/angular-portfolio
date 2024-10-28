import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../main-routing.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public isMenuOpen = signal<boolean>(false)

  public menuItems = routes
    .map( route => route.children ?? [])
    .flat()
    .filter( route => route && route.path && route.title);


  collapseMenu() {
    this.isMenuOpen.set(!this.isMenuOpen())
  }

}
