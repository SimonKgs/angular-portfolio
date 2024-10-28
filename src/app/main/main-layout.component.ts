import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  constructor(){
    console.log('MAIN');
  }
}
