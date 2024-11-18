import { Component, inject, signal } from '@angular/core';
import { MtgNavBarComponent } from "./components/mtg-nav-bar/mtg-nav-bar.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-mtg-layout',
  standalone: true,
  imports: [RouterModule, MtgNavBarComponent],
  templateUrl: './mtg-layout.component.html',
  styleUrl: './mtg-layout.component.css'
})

export class MtgLayoutComponent {
  
}
