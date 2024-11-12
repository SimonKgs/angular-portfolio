import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../main-routing.module';
import { CommonModule } from '@angular/common';
import { getMenuItems } from '../../../utils/getRoutes';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public isMenuOpen = signal<boolean>(false)

  public menuItems = getMenuItems(routes);

  collapseMenu() {
    this.isMenuOpen.set(!this.isMenuOpen())
  }

}
