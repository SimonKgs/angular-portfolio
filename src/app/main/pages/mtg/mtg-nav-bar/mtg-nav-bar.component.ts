import { Component, signal } from '@angular/core';
import { routes } from '../mtg-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mtg-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mtg-nav-bar.component.html',
  styleUrl: './mtg-nav-bar.component.css'
})
export class MtgNavBarComponent {
  public isMenuOpen = signal<boolean>(false)

  public menuItems = routes
    .map( route => route.children ?? [])
    .flat()
    .filter( route => route && route.path && route.title);


  collapseMenu() {
    this.isMenuOpen.set(!this.isMenuOpen())
  }
}

