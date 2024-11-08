import { Component, input, signal, WritableSignal } from '@angular/core';

import { HeroComponent } from "../../shared/hero/hero.component";
import { MtgSearchComponent } from "./mtg-search/mtg-search.component";
import { MtgNavBarComponent } from "./mtg-nav-bar/mtg-nav-bar.component";


@Component({
  selector: 'app-mtg',
  standalone: true,
  imports: [HeroComponent, MtgSearchComponent, MtgNavBarComponent],
  templateUrl: './mtg.component.html',
  styleUrl: './mtg.component.css'
})
export default class MtgComponent {
  
}
