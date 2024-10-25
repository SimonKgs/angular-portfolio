import { Component } from '@angular/core';
import { SideMenuComponent } from "./shared/side-menu/side-menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  constructor(){
    console.log('MAIN');
  }
}
