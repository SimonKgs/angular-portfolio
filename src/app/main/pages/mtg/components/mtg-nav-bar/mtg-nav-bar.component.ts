import { Component, signal } from '@angular/core';
import { routes } from '../../mtg-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getMenuItems } from '../../../../../utils/getRoutes';

@Component({
  selector: 'mtg-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mtg-nav-bar.component.html',
  styleUrl: './mtg-nav-bar.component.css'
})
export class MtgNavBarComponent {
  public isMenuOpen = signal<boolean>(false)

  public menuItems = getMenuItems(routes);
  
  collapseMenu() {
    this.isMenuOpen.set(!this.isMenuOpen())
  }
}

