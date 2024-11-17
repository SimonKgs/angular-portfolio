import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, NavBarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {

}
